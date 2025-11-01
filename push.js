






const VAPID_PUBLIC_KEY = 'BK8PXwtEqbAqq390C1GAKeTFOhIGUfkVXOBfiCGOjgsgZdwvMD7mFhwx8HGTj-C8LOPoD24dFOJc-gWQFJOVPuQ';
const VAPID_PRIVATE_KEY_PEM = `-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQg9f8/qdb+OVqzUgTz
CLFbLwN3vPW8kYiHA1Xr/cqBYmSgCgYIKoZIzj0DAQehRANCAASvD18LRKmwKqt/
dAtRgCnkxToSBlH5FVzgX4ghjo4LIGXcLzA+5hYcMfBxk4/gvCzj6A9uHRTiXPoF
kBSTlT7k
-----END PRIVATE KEY-----`;
const GAS_URL = 'https://script.google.com/macros/s/AKfycbx7P2Y1pdwXTqjBXT8abvgdPZG82b0s90EHSUXSrVJrM5bzH2ETA5hxuVB5KJCOI3V6yg/exec'; // Replace with your GAS deployed URL
const SUBJECT = 'mailto:you@example.com'; // Your contact email

/////////////////////////////////////////////////////////////////////////////


window.addEventListener("load", init());

  function init(){
   if('serviceWorker' in navigator){ 
     navigator.serviceWorker.register('sw.js').then(registration=>{
     return serviceWorkerRegisteration = registration;
      //registration.installing || registration.waiting || registration.active ;
     }).catch(e=>{console.log(e)})
 
      navigator.serviceWorker.addEventListener('controllerchange',async()=>{ 
      serviceWorkerRegisteration = navigator.serviceWorker.controller;
       })
   }
  
  // getNotificationPermission();

}

function getNotificationPermission(){
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
        subscribeUser().then(e=>{
         //  updateButton();
         var res= JSON.parse(JSON.stringify(e)); // we do jsom for parse the keys auth p256
         var endpoint = res.endpoint;
         var auth = res.keys.auth;
         var p256dh =res.keys.p256dh;
         sendPushMessage(endpoint,p256dh,auth);
        // console.log(endpoint,'22222222222'+p256dh,'33333333333333'+auth);
        })
      }
  }).catch(e=>{
    if(e=="support"){
      alert("your browser doesn't support push messaging ")
    }else if(e=="denied"){
      alert("you block notification")
    }
  })
}



    async function subscribeUser() {
        const swRegistration = await navigator.serviceWorker.ready;
        const convertedVapidKey = urlB64ToUint8Array(VAPID_PUBLIC_KEY); // Convert to Uint8Array

        try {
          const subscription = await swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: convertedVapidKey
            });
            return subscription;
           // console.log('Push Subscription:', subscription);
            // Send subscription to your server
           // sendSubscriptionToServer(subscription);
        } catch (error) {
            console.error('Push subscription failed:', error);
        }
    }


    // function sendSubscriptionToServer(subscription) {
    //     fetch('/save-subscription', { // Your server endpoint
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(subscription)
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Failed to save subscription on server.');
    //         }
    //         console.log('Subscription saved on server.');
    //     })
    //     .catch(error => {
    //         console.error('Error sending subscription to server:', error);
    //     });
    // }


function updateButton(){
 if(Notification.permission=='denied'){
   pushButton.disabled = true;
 }
 pushButton.disabled = false;
}


function unsubscribeUser(){
  pushButton.disabled=true;
  serviceWorkerRegisteration.pushManager.getSubscription().then(subscription=>{
    if(subscription)
      subscription.unsubscribe();
     return subscription;
  }).then(subscription=>{
    updateSubscriptionOnServer(subscription,false);
    isPushSubscibed=false;
    updateButton();
  }).catch(e=>{})

}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
    // Helper function to convert URL-safe Base64 to Uint8Array

//start
getNotificationPermission();












function urlB64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);
            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

  

     function base64urlEncode(buffer){
          const bytes = new Uint8Array(buffer);
            let bin = '';
            for (let i = 0; i < bytes.length; i++) {bin += String.fromCharCode(bytes[i])};
              return btoa(bin).replace(/\+/g, '-')
              .replace(/\//g, '_')
              .replace(/=+$/, '');   
             }
        // Helper: Base64URL Decode;
        function base64urlDecode(str) {
            let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
            while (b64.length % 4) b64 += '=';
            const binary = atob(b64);
            const len = binary.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
            return bytes;
        }


        // Helper: PEM to DER
        function pemToDer(pem) {
            const base64 = pem.replace(/-----BEGIN PRIVATE KEY-----/g, '')
                              .replace(/-----END PRIVATE KEY-----/g, '')
                              .replace(/\s+/g, '');
            const binary = atob(base64);
            const len = binary.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
            return bytes.buffer;
        }

        // HKDF Extract (HMAC-SHA-256)
        async function hkdfExtract(salt, ikm) {
            const key = await crypto.subtle.importKey(
                'raw',
                salt,
                { name: 'HMAC', hash: 'SHA-256' },
                false,
                ['sign']
            );
            return crypto.subtle.sign('HMAC', key, ikm);
        }

        // HKDF Expand
        async function hkdfExpand(prk, info, length) {
            const hashLen = 32;
            const blocks = Math.ceil(length / hashLen);
            let result = new Uint8Array();
            let prev = new Uint8Array();

            for (let i = 1; i <= blocks; i++) {
                const data = new Uint8Array(prev.length + info.length + 1);
                data.set(prev);
                data.set(info, prev.length);
                data[data.length - 1] = i;

                const key = await crypto.subtle.importKey(
                    'raw',
                    prk,
                    { name: 'HMAC', hash: 'SHA-256' },
                    false,
                    ['sign']
                );
                prev = new Uint8Array(await crypto.subtle.sign('HMAC', key, data));
                result = new Uint8Array([...result, ...prev]);
            }
            return result.slice(0, length);
        }
        ////////////////////////////////////////////////
      async function isValidP256Point(publicKeyBytes) {
          if (publicKeyBytes.length !== 65 || publicKeyBytes[0] !== 4) {
            console.error('Invalid length or not uncompressed');
            return false;
          }

  // Extract x and y as BigInt (32 bytes each)
  const hex = (arr) => Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
  const x = BigInt('0x' + hex(publicKeyBytes.slice(1, 33)));
  const y = BigInt('0x' + hex(publicKeyBytes.slice(33)));

  // P-256 parameters
  const p = 2n ** 256n - 2n ** 224n + 2n ** 192n + 2n ** 96n - 1n;
  const b = 41058363725152142129326129780047268409114441015993725554835256314039467401291n;

  // Check y^2 == x^3 - 3x + b mod p
  const lhs = (y * y) % p;
  const rhs = ((x * x * x - 3n * x + b) % p + p) % p; // Ensure positive

  const valid = lhs === rhs;
  if (!valid) console.error('Point not on curve:', lhs, '!=', rhs);
  return valid;
}

        // Generate VAPID Authorization Header
        async function generateVapidHeader(endpoint, vapidPublicKey, vapidPrivateKeyPem, subject) {
            const audience = new URL(endpoint).origin;
            const expiration = Math.floor(Date.now() / 1000) + (12 * 60 * 60);

            const header = { typ: 'JWT', alg: 'ES256' };
            const payload = { aud: audience, exp: expiration, sub: subject };

            const encodedHeader = base64urlEncode(new TextEncoder().encode(JSON.stringify(header)));
            const encodedPayload = base64urlEncode(new TextEncoder().encode(JSON.stringify(payload)));
            const unsignedToken = `${encodedHeader}.${encodedPayload}`;

            const privateKeyDer = pemToDer(vapidPrivateKeyPem);
            const privateKey = await crypto.subtle.importKey(
                'pkcs8',
                privateKeyDer,
                { name: 'ECDSA', namedCurve: 'P-256' },
                false,
                ['sign']
            );

            const signature = await crypto.subtle.sign(
                { name: 'ECDSA', hash: 'SHA-256' },
                privateKey,
                new TextEncoder().encode(unsignedToken)
            );

            const jwt = `${unsignedToken}.${base64urlEncode(signature)}`;
            return `vapid t=${jwt}, k=${vapidPublicKey}`;
        }

        // Encrypt Payload (AES-128-GCM)
 async function encryptPayload(payload, p256dh, auth) {

  const payloadUtf8 = new TextEncoder().encode(payload);

  // 1. Generate ephemeral ECDH key pair
  const serverKeys = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveBits']
  );

  const serverPublicBytes = new Uint8Array(await crypto.subtle.exportKey('raw', serverKeys.publicKey));
  if (serverPublicBytes.length !== 65 || serverPublicBytes[0] !== 4) throw new Error('Invalid server public key');

  // Validate point on curve (keep your isValidP256Point)
  const valid = await isValidP256Point(serverPublicBytes);
  console.log('Is valid P-256 point?', valid);
  if (!valid) throw new Error('Generated invalid P-256 point');

  // 2. Import client public key
  const clientPublicBytes = base64urlDecode(p256dh);
  const clientPublicKey = await crypto.subtle.importKey(
    'raw',
    clientPublicBytes,
    { name: 'ECDH', namedCurve: 'P-256' },
    false,
    []
  );

  // 3. Derive shared secret
  const sharedSecret = await crypto.subtle.deriveBits(
    { name: 'ECDH', public: clientPublicKey },
    serverKeys.privateKey,
    256
  );

  // 4. HKDF
  const authSecret = base64urlDecode(auth);
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const prk = await hkdfExtract(authSecret, new Uint8Array(sharedSecret));
  const info = new Uint8Array([...new TextEncoder().encode('WebPush: info\0'), ...clientPublicBytes, ...serverPublicBytes]);
  const ikm = await hkdfExpand(prk, info, 32);
  const contentPrk = await hkdfExtract(salt, ikm);

  const cek = await hkdfExpand(contentPrk, new TextEncoder().encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdfExpand(contentPrk, new TextEncoder().encode('Content-Encoding: nonce\0'), 12);

  // 5. Pad plaintext (RFC 8291: padding (0s) + payload + delimiter (1 if no padding, 2 if padding >0)
  const rs = 4058; // Ciphertext length (must match your GAS check)
  const plaintextLen = rs - 16; // Subtract GCM tag
  const contentLen = payloadUtf8.length;
  let paddingLen = plaintextLen - contentLen - 1; // Room for delimiter (1 byte)
  if (paddingLen < 0) throw new Error('Payload too large');
  const delimiter = paddingLen > 0 ? 2 : 1;

  const plaintext = new Uint8Array(plaintextLen);
  // Padding is 0s (already in new Uint8Array)
  plaintext.set(payloadUtf8, paddingLen);
  plaintext[paddingLen + contentLen] = delimiter;

  // 6. Encrypt
  const aesKey = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: nonce, tagLength: 128 },
    aesKey,
    plaintext
  );

  console.log('Encrypted length:', encrypted.byteLength); // Must be 4074

  return {
    ciphertextB64: base64urlEncode(new Uint8Array(encrypted)),
    saltB64: base64urlEncode(salt),
    dhB64: base64urlEncode(serverPublicBytes)
  };
} 
    

// Main function to send the push message
async function sendPushMessage(endpoint,p256dh,auth) {
  // TODO: Fill in your values here
    try {
     const payload = JSON.stringify({   title: 'Test',  body: 'o!'});

        // ENCRYPT
        const encrypted = await encryptPayload(payload, p256dh, auth);
        console.log('Encryption result:', encrypted);  // ← DEBUG: Check dhB64 here

        // VAPID HEADER
const authorization = await generateVapidHeader(endpoint,VAPID_PUBLIC_KEY,VAPID_PRIVATE_KEY_PEM,SUBJECT);

        // SEND TO GAS — MUST INCLUDE dhB64!
        const response = await fetch(GAS_URL, {
            method: 'POST',
            body: JSON.stringify({
                endpoint: endpoint,
                ciphertextB64: encrypted.ciphertextB64,
                saltB64: encrypted.saltB64,
                dhB64: encrypted.dhB64,        // ← THIS WAS MISSING!
                authorization: authorization
            })
        });

        const result = await response.json();
        status.textContent = result.ok 
            ? 'Push sent successfully!' 
            : 'Push failed: ' + (result.error || result.fcmResponse);
            
        console.log('GAS Response:', result);
    } catch (err) {
        status.textContent = 'Error sending push: ' + err.message;
        console.error(err);
    }


}

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
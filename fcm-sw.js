// Import Firebase SDK in the service worker;
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Initialize (use same config as app.js)
firebase.initializeApp({
  apiKey: "AIzaSyCKoCdxnRt497Zq7rP5uP0KFvcA1DPibe0",
  authDomain: "fcm-msg-teleshop.firebaseapp.com",
  projectId: "fcm-msg-teleshop",
  storageBucket: "fcm-msg-teleshop.firebasestorage.app",
  messagingSenderId: "150406104185",
  appId: "1:150406104185:web:8ee667482a917fd4e7c0a8",
  measurementId: "G-GFMQGWJ0KF"
});



const messaging = firebase.messaging();

// === BACKGROUND MESSAGE ===
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Background Message:', payload);

  const title = payload.notification?.title || 'Notification';
  const options = {
    body: payload.notification?.body || '',
    icon: 'puplic/192.png',
    badge: 'puplic/192.png',
    data: { url: payload.data?.click_action || '/' }
  };

  self.registration.showNotification(title, options);
});

// === NOTIFICATION CLICK ===
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        for (let client of clientList) {
          if (client.url === url && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(url);
      })
  );
});
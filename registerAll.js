

/////////////////////////////////////////////////////////////////////////////

// "screenshots":[
//               {
//                   "src":"screenShot.jpg",
//                   "sizes":"720x1202",
//                   "type": "image/jpg",
//                   "form_factor":"wide",
//                   "purpose":"any",
//                   "label":"Hi-there"
//               },
//              {
//                   "src":"screenShot.jpg",
//                   "sizes":"720x1202",
//                   "type": "image/jpg",
//                   "platform":"ios",
//                   "purpose":"any",
//                   "label":"Hi-there"
//               }
//               ]





//  Array ( 
//     [publicKey] => BJ9oieAsBTC5TOqeKAVWge0SsLnGKEftuwZ0JloGPakBjARcjpNSJla6K_eVDQDb75wJXqtlaNXvlAeZaOIofDc
//     [privateKey] => m1_BSQfia435oV8xCN8WhhAXoE430d3Tdy8JfrFIpEw   
//       ) 






const applicationServerKey="BJ9oieAsBTC5TOqeKAVWge0SsLnGKEftuwZ0JloGPakBjARcjpNSJla6K_eVDQDb75wJXqtlaNXvlAeZaOIofDc";
//const pushButton= document.querySelector("");
let serviceWorkerRegisteration = null;
//let isPushSubscribed = false;

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
      //  subscribeUser().then(e=>{
    //  updateButton();
     //  })
      }
  }).catch(e=>{
    if(e=="support"){
      alert("your browser doesn't support push messaging ")
    }else if(e=="denied"){
      alert("you block notification")
    }
  })
}



function subscribeUser(){
  const subscribeOption=
   { userVisibleOnly:true,
     applicationServerKey: urlBase64ToUint8Array(applicationServerKey) }

  return new Promise((resolve, reject) => {
    serviceWorkerRegisteration.pushManager.subscribe(subscribeOption)
    .then(subscription=>{
        // updateSubscriptionOnServer(subscription).then(status=>{
        // //isPushSubscribed = true;
        // resolve(status);
        // }).catch(e=>{reject(e)})
        // console.log(JSON.parse(JSON.stringify(subscription)));
        
    }).catch(e=>{reject(e);})
  })
}

function updateSubscriptionOnServer(subscription=null,subscribe=true){
  return new Promise((resolve, reject) => {
    let extra = (subscribe)? '?subsicribe' : '?unsubscribe';
     fetch(''+extra,{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body: JSON.stringify(subscription)
     }).then(res=>{
      if(!res.ok)return;
      resolve('0');
      return res.json();
     }).catch(e=>{reject(e)})
  })
}



function urlBase64ToUint8Array(base64String){
     const padding = '='.repeat((4-base64String.lenght % 4) % 4 );
     const base64 = (base64String + padding).replace(/\-/g,'+').replace(/_/g,'/');
     const rowData =window.atob(base64);
     const outputArry= new Uint8Array(rowData.length);
     for(let i=0;i<rowData.length;++i){
       outputArry[i]=rowData.charCodeAt(i);
     }
     return outputArry;
}


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










//////////////////////test//////////////////////

// var x ={
// endpoint: "https://fcm.googleapis.com/fcm/send/cYA5bmitU2Q:APA91bH_Oslp5Unh6oM8cdg8DV4tE99ORokaBA1f2ua6YG_T2smUg3lpiUqHpmUVkT1dNAOOhxDAHtG9jDdBvke9WZG6gnkNeENkQHev_o3jJgA22ph0tRdgMEqBWRha-kSdJm_48-_p",

//   auth: "YrQ8Nlk3I_v9nWaWZK3qkg",
// p256dh: "BGcCoDKyH0ifkg5gPTLilp2BlIPTK-LcWeGvJqRBA2Jh-kvZMo1av6LtJcsVRTOLzpkIBJcBwhmXyleQtUm7x34",

// }


// fetch("http://myphpapifree.infinityfreeapp.com/",{
//     method:"post",
//     body: JSON.stringify(x) ,
//    // headers : {'Content-Type' : 'application/json'}
    
// }).then(response=> response.json()).then(r=>{ console.log(r) })
////////////////////////////////////////////////
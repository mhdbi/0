///////
const version =445;
var cacheName =`staticCahe-${version}`;
var dynamicName="dynamicCache"

let assets=['/','index.html','home.css','tecno.css','app.js',"404.html","/puplic/icons/screensh1.jpg","/puplic/icons/screensh2.jpg",
           '/puplic/icons/chocolate.jpg','/puplic/icons/cigarette.jpg','/puplic/icons/dairy-products.jpg','/puplic/icons/drink.jpg',
           '/puplic/icons/fruits.jpg','/puplic/icons/nuts.jpg','/puplic/icons/purchase.png','/puplic/icons/robot.png',
           '/puplic/icons/1.jpg','/puplic/icons/2.jpg','/puplic/icons/3.jpg',
           '/puplic/512m.png','/puplic/512.png','/puplic/192.png'];
  

self.addEventListener("install" , (ev)=>{ 

       ev.waitUntil(
               caches.open(cacheName).then( c=>{  c.addAll(assets)
                            }).catch(e=>{  console.log(e)  })
                );
       self.skipWaiting();
});

 

self.addEventListener('activate' ,(ev)=>{
  clients.claim().then(c=>{      });

  caches.keys().then((key) => {
    key.filter(key=>{ if(key!=cacheName ){ return true }}).map(key=>caches.delete(key));
      });

});


////////////////////////////////notific////////////////////////////////////////////////////
////////////////////////////msg/////msg///////////////////////////////////////////////////

self.addEventListener('sync',(e)=>{});
self.addEventListener('periodicsync', (e)=>{});
self.addEventListener("push", (event) => {
  if (self.Notification && self.Notification.permission === "granted") {

  

  const data    =  event.data? event.data : {};
  const title   =  data.title   || "Something Has Happened";
  const message =  data.message || "Here's something you might want to check out.";
  const icon    = "images/new-notification.png";

 
  event.waitUntil(self.registration.showNotification('title', {
      body: 'message',
      tag: "simple-push-demo-notification",
       icon,
       data:"https://www.google.com"
     }
    ));


}
});

self.addEventListener('notificationclick', function (e){
  e.notification.close();

  e.waitUntil(
    clients.openWindow("https://mhdbi.github.io/00")
  )
})


//////////////////////////msg////////////////msg////////////////////////////////////////////










///////////////////////////////fetch/////////////////////////////////////////////////////////



self.addEventListener('fetch'  , (ev)=>{
 var onLine = self.navigator.onLine; 
 var url  = new URL(ev.request.url);
 
 var img  = url.hostname.includes('picsum.photos')||url.pathname.includes('.png')||url.pathname.includes('.jpj')||url.pathname.includes('.svg');
 var Json = url.hostname.includes('random-data-api.com');
 var css  = url.pathname.includes('.css')||url.hostname.includes('googleapis.com');
 var font = url.hostname.includes('gstatic')||url.pathname.includes('woff2');
 var html = ev.request.mode=='navigate';
 var thumb= url.pathname.includes('thumbnail');
 var icons= url.pathname.includes('icons');
 var Gscript=url.hostname.includes('script')||url.pathname.includes('exec');

 var myURL= self.location.hostname;
 var outer= ev.request.mode=='cors' || myURL != ev.request.referrer;
 var referrer =ev.request.referrer.includes(myURL);

 if(onLine ){

        if(referrer && icons){
          return ev.respondWith(cacheF(ev.request));
        }else if(thumb){
          return ev.respondWith(fetch(ev.request,{method: "GET",mode: "no-cors",redirect:"follow",credentials:"omit"}))
          }else { 
           return ev.respondWith(fetch(ev.request,{mode: "cors",redirect:"follow",credentials:"omit"}));
          }
      
      // }else{
      //     return ev.respondWith(cacheF(ev));
      // }

 }else{
   ev.respondWith(html404());
 }

});



// function cacheOnly(){
//   console.log('yeh icons');
//   return caches.match(ev.request)||null;
// }

// function cacheFirst(){
//   return caches.match(ev.request).then(res=>{
//      return res || fetch(ev.request,{mode: "cors",credentials:"omit"});
//   })
// }


// function netOnly(){
//   return fetch(ev.request);
// }

// function netFirst(){
//   return fetch(ev.request).then(res=>{
//     if(res.ok) return res;
//        return caches.match(ev.request);
//   })
// }

 function cacheF(ev){
   return caches.match(ev).then(resC=>{
     var resF =  fetch(ev).then(resF=>{
        var resf= caches.open(cacheName,{mode: "no-cors",credentials:"omit"}).then(cache=>{
          cache.put(ev , resF.clone());
          return resF;
        })    
        return resf;
      }) ; 
     return resC|| resF;
   }).catch(e=>{ cacheF(ev) }) 
}

function html404(){
  return caches.match('/404.html');

}

// function fetchF(ev){
//  return fetch(ev.request,{mode:'cors', credentials:'omit'}).then(resF=>{
//   if(resF.ok){ 
//       return caches.open(cacheName).then(cache=>{
//              cache.put(ev.request,resF.clone());
//              return resF;
//        })
//       }else{
//         return caches.match(ev.request);
//       }
//  })
// }


// function imgRes(){
//   return caches.match('404.html');
// }



// function fakeReq(){
//   return caches.match('404.html');
// }
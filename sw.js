///////
const version =5;
var cacheName =`staticCahe-${version}`;
var dynamicName="dynamicCache"

let assets=['index.html','home.css','tecno.css','app.js',"404.html","icons/3d-lock.png","icons/add.png","icons/chocolate-bar.png",
  "icons/cigarette.png","icons/dairy-products.png","icons/drink.png","icons/file.png","icons/fruits.png","icons/minus.png",
  "icons/nuts.png","icons/purchase.png","icons/white-shop-icon.png"
  ];

self.addEventListener("install" , (ev)=>{ 

    ev.waitUntil(
        Promise.resolve()
        .then((e)=>{
          return addAsset()
        })
        .then((e)=>{
          self.skipWaiting();
        }).catch(e=>{console.log(e)})                  
      )

})

function addAsset(){

    caches.open(cacheName).then(c=>{    
        c.addAll(assets).then((e)=>{
         console.log('added'),
            (e)=>{
         console.log(e)
             }
      }).catch(e=>{ console.log(e)  });
    })

 }



self.addEventListener('activate' ,(ev)=>{
  clients.claim().then(c=>{      });

  caches.keys().then((key) => {
    key.filter(key=>{ if(key!=cacheName && key!='xxx'){ return true }}).map(key=>caches.delete(key));
      });

});


////////////////////////////////notific////////////////////////////////////////////////////
////////////////////////////msg/////msg///////////////////////////////////////////////////


// self.addEventListener("push", (event) => {
//   if (self.Notification && self.Notification.permission === "granted") {

  

//   const data    =  event.data? event.data : {};
//   const title   =  data.title   || "Something Has Happened";
//   const message =  data.message || "Here's something you might want to check out.";
//   const icon    = "images/new-notification.png";

 
//   event.waitUntil(self.registration.showNotification('title', {
//       body: 'message',
//       tag: "simple-push-demo-notification",
//        icon,
//        data:"https://www.google.com"
//      }
//     ));


// }
// });

// self.addEventListener('notificationclick', function (e){
//   e.notification.close();

//   e.waitUntil(
//     clients.openWindow("https://mhdbi.github.io/00")
//   )
// })


//////////////////////////msg////////////////msg////////////////////////////////////////////










///////////////////////////////fetch/////////////////////////////////////////////////////////



self.addEventListener('fetch'  , (ev)=>{
 var onLine = self.navigator.onLine; 
 var url  = new URL(ev.request.url);
 
 var img  = url.hostname.includes('picsum.photos')||url.pathname.includes('.png')||url.pathname.includes('.jpj');
 var Json = url.hostname.includes('random-data-api.com');
 var css  = url.pathname.includes('.css')||url.hostname.includes('googleapis.com');
 var font = url.hostname.includes('gstatic')||url.pathname.includes('woff2');
 var html = ev.request.mode=='navigate';
 var thumb= url.pathname.includes('thumbnail');
 var Gscript=url.hostname.includes('script')||url.pathname.includes('exec');

 var myURL= self.location.hostname;
 var outer= ev.request.mode=='cors' || myURL != ev.request.referrer;
 var referrer =ev.request.referrer.includes(myURL);

 if(onLine ){
         if(thumb){
          return ev.respondWith(fetch(ev.request,{method: "GET",mode: "no-cors",redirect:"follow",credentials:"include"}))
            
          }else { 
           return ev.respondWith(fetch(ev.request,{mode: "cors",credentials:"omit"}));
          }
      
      // }else{
      //     return ev.respondWith(cacheF(ev));
      // }

 }else{
   ev.respondWith(html404());
 }

});



// function casheOnly(){
//   return caches.match(ev.request);
// }

// function cacheFirst(){
//   return caches.match(ev.request).then(res=>{
//      return res || fetch(ev.request);
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
   return caches.match(ev.request).then(resC=>{
     var resF = fetch(ev.request,{mode:'cors', credentials:"omit"}).then(resF=>{
         caches.open(cacheName).then(cache=>{
          cache.put(ev.request , resF.clone());
          return resF;
        })     
      })
     return resC|| resF;
   })
}

function html404(){
return caches.matchAll('404.html');
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
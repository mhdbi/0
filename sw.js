
///////
const version =232;
var cacheName =`staticCahe-${version}`;
var dynamicName="dynamicCache";

let assets=['/','index.html','home.css','tecno.css','app.js',"404.html","puplic/icons/screensh1.jpg","puplic/icons/screensh2.jpg",
           'puplic/icons/chocolate.jpg','puplic/icons/cigarette.jpg','puplic/icons/dairy-products.jpg','puplic/icons/drink.jpg',
           'puplic/icons/fruits.jpg','puplic/icons/nuts.jpg','puplic/icons/purchase.png','puplic/icons/robot.png',
           'puplic/icons/1.jpg','puplic/icons/2.jpg','puplic/icons/3.jpg',
           'puplic/512m.png','puplic/512.png','puplic/192.png'];
  

self.addEventListener("install" , (ev)=>{ 

       ev.waitUntil(
        assets.map(as=>{ 
              caches.match(as).then((cacheRes)=>{if(cacheRes)return cacheRes;

                  return fetch(as).then(netRes=>{
                      if(!netRes || netRes.status !==200 || netRes.type!=='basic'){ return netRes }

                            const resTOcache  = netRes, newMaxAge ='public , max-age=31536000,s-maxage=31536000'; 
                              
                            caches.open(cacheName).then(cache=>{   
                                    const cacheHeader = new Headers(resTOcache.headers);
                                    cacheHeader.set('Cache-Control', newMaxAge);
                                    const modifiedCacheRes = new Response(resTOcache.body , {
                                      status: resTOcache.status,
                                      statusText: resTOcache.statusText,
                                      headers: cacheHeader
                                    })     
                                    cache.put(as , modifiedCacheRes);
                              })//for cache
                          })
                        })
                  })
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

        if(referrer ){
          return ev.respondWith(cacheF(ev));
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




 function cacheF(ev){
 
  const isNet = ev.request.url.startsWith('http');
if(isNet){
    caches.match(ev.request).then((cacheRes)=>{
         if(cacheRes){return cacheRes};})
    
          return fetch(ev.request).then(netRes=>{
              if(!netRes || netRes.status !==200 || netRes.type!=='basic'){ return netRes }

            const resTOcache  = netRes.clone(), resTObroser = netRes, newMaxAge ='public , max-age=31536000,s-maxage=31536000';

            const resHeader    = new Headers(resTObroser.headers);
                  resHeader.set('Cache-Control', newMaxAge);// 1 year
            const modifiedRes = new Response(resTObroser.body , {
                status: resTObroser.status,
                statusText: resTObroser.statusText,
                headers: resHeader
               })     
              
             caches.open(cacheName).then(cache=>{   
                    const cacheHeader = new Headers(resTOcache.headers);
                    cacheHeader.set('Cache-Control', newMaxAge);
                    const modifiedCacheRes = new Response(resTOcache.body , {
                      status: resTOcache.status,
                      statusText: resTOcache.statusText,
                      headers: cacheHeader
                    })     
                    cache.put(ev.request , modifiedCacheRes);
               })//for cache

              return modifiedRes;
          })
     
 } // for if first

}

function html404(){
  return caches.match('404.html');

}













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









//  function cacheF(ev){
//    return caches.match(ev).then(resC=>{
//      var resF =  fetch(ev).then(resF=>{
//         // resF.headers.set('Cache-Control',`public,max-age=${60*60*24*7},s-maxage=${60*60*24*30}`);
//         // resF.headers.set('Access-Control-Allow-Origin','*');
//         var resf= caches.open(cacheName,{mode: "cors",redirect:"follow",credentials:"omit"}).then(cache=>{
//           cache.put(ev , resF.clone());
//           return resF;
//         })    
//         return resf;
//       }) ; 
//      return resC|| resF;
//    }).catch(e=>{ cacheF(ev) }) 
// }





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
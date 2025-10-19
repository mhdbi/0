


const data={

  url : "https://script.google.com/macros/s/AKfycbyVKJnEGb2KYOOi6pHG0m0_hLmVwoZo9ecmxwULAwWE0a3NeXYgKdC22dOjJZKMK-nrxw/exec",
  db :null ,
  dbData: null ,
  recog:null,
  searchItems :[],                                 // for search result
  counter:0,

  downLTips:false,                                 //for download tips
  iname:  localStorage.getItem('iname')  ||null,
  iphone: localStorage.getItem('iphone') ||null,

  accDB:false,                                     // for switch acc db info
 

  orderPh:'' ,                                 //for users orders show phone &place                           
  order:[] ,                                  //for customer order 
  userOrders:[] ,                              // for detect user order cover
  indexOrderType:'order',                    // for indexed order of th user 


  wts    : "https://wa.me/+963981715375",
  userImg:"icons/LOGO.png",
  indexItem:null,                           //for edit with index of item 
 
  orderInfoSite:0,                         //for open close windo of site , index , order


  user:null,                             //for merchent user info only


  item:['','','','','','','','',''],   //for add item only
  world :"",
  files : []  ,
  fileN:"",
  imgId:[],
  post      : '', 
  title     :'',
  price:'',                             //for input of add edit items
  hash :"",                              // for hashed items names

    
    va       :  []    ,
    placeSearch:""  ,
    inpSearch:  ""   ,
    search   :  []      ,
    y        :  ""     ,
    allmydata:  []   ,
    mydata   :  []      ,
    vadata   :  []    ,


    myroute  :  ""    ,
    route1   :  "verify" ,
    route2   : ""     ,

    callx    :   false,

    searchBar0:  false,
    storageOrder:[],

  //  logoutt     : false,



    warning :  false,
    scroll :    6   ,

    run  : false  , 
    delItem:false,       //for holder delete items
    delItemDone:false,   //for done deleted item
    sendCartDone:false,  //for done sended cart
    editBtn :false,

    FUNname: []  ,
    FUNrun:false   ,
   
  newPhone:'',
  newPass:'',
  
   ///for color
  colors: ['rgb(255, 230, 109)','rgb(63, 52, 13)','rgb(21, 21, 0)','rgb(249, 224, 146)'],
  color:[  [255, 230, 109],  [63, 52, 13]  , [21, 21 ,  0] ,[249 , 224, 146] ],
  revColor:true ,

  //for cart
  cartItem:[],
  cart: 0,
  errSend:false,
  runSolve:false,
  runErr:false,
  siteText:null,
  

  geoL:'',

  
}




const methodss={

        ///// for home ////

        route: async function(){
         if (Array.isArray(this.user) ){ 
            
           this.user[3]=='syria'?(this.route2='Admin',this.$router.push({name:'account'}) )
            :( this.$router.push({name:'socitey'}),this.siteOrders(this.indexOrderType) )   
              
          }else if( !(Array.isArray(this.user))  ) {
                     this.route2="verify"; 
                     this.$router.push({name:'account'})

           }

           
        },



        funAdmin:function(){
 
          if(localStorage.getItem("user")){ 
          this.user =localStorage.getItem("user").split(",");
          this.user[0]=='Admin'?this.route2='Admin':true;


          }
        },

        // funUser:function(){
        //     if(!this.iname || !this.iphone){
        //        return Promise.resolve(this.askMe=false).then(()=>(this.askMe=true) );
        //      }else{
        //       localStorage.setItem('iname' , this.iname);
        //       localStorage.setItem('iphone', this.iphone);
        //       this.askMe=false;
              
        //      }
        // },

         firstLog:function(){
          if(!this.iname){ 
             return Promise.resolve(this.askMe=false).then(()=>(this.askMe=true) )
          }else{
                     localStorage.setItem('iname' , this.iname)
                     this.askMe=false

               };
         },
     
        editLog:function(){
              localStorage.setItem('iname' ,  this.iname);
              localStorage.setItem('iphone',  this.iphone);
              this.accDB=false;
        
         },





            // ///////////////////////
         created: function (){
          
            var x = 1;
            var y ="created";
            var url =this.url+`?x=${x}&y=${y}`;
            fetch(url).then(r=> { 
              if(!r.ok){
               return Promise.reject("0");
               }else{
             //  setTimeout( this.created , 15000);
               return r.json();
               }
          }).then(e=>{ 
              this.allmydata = e;
            
            //  this.allmydata.splice(0,1);
            //  this.allmydata  = e.sort((a,b)=>0.5-Math.random());
          }).catch(e=>{
             this.FUNname = this.created ;
             this.FUNrun =true;
          })    
               
        },








   /// for inset //////
          

           data: function(){
              // for check the router param to filter the allmyData
                     var y = [];
                     this.allmydata.forEach(x=>{    
                            if(x.world==this.$route.params.inset){
                               y.push(x); 
                            }
                           })
                           this.mydata=y;     this.vadata=y;
      
              if(this.mydata.length<=0)return setTimeout( this.data , 1000);       
              // for add the semeler items to the hash arry
                this.mydata.forEach(e=>{
                    var ee= e.title.split(' '),arr=[];
                      
                        this.mydata.forEach((i,y)=>{   
                          var ii= i.title.split(' '),iii;
                              ii.length<=2?iii=0:iii=1;
                          if(e!=i && ee[iii]==ii[iii]){ 
                            arr.push({name:ii.slice(1).join(' '),item:i});
                            e.hash=arr;
                          }
                        })

                      })
              // for remove the same items title from the myadta arry
                this.mydata.forEach(e=>{
                    if(e.hash){
                      e.hash.forEach(x=> this.mydata.indexOf(x.item)>=0?this.mydata.splice(x.it,1):null );
                      }
                      })
    },



       

        change:function(){
        this.callx=this.callx?false:true;
        },
    

   searcher:  function(){
       var s =  this.inpSearch;  
          s!=''?this.mydata=this.mydata.filter((x)=> x.title.match(s)):this.mydata=this.vadata;
 
             },
      
 
       searchBar:function(e){
              var inptext = document.getElementsByClassName('inputtext')[0];
              var routeS  = document.getElementById('test4');
             if(this.searchBar0==false){ 
                e.target.style.left= 145+'px';
                inptext.style.width= 190+"px";
                inptext.style.opacity=1;
                this.searchBar0=true;
                
                routeS.style.display='none';
                e.target.classList.remove('search');
                e.target.classList.add("search2");
                e.target.innerText='إنهاء';
             }else{
              e.target.classList.remove('search2');
              e.target.classList.add("search");
              e.target.innerText='';
              e.target.style.left= 5+'px';
                inptext.style.opacity=0;
                inptext.style.width= 0+"px";
                this.searchBar0=false;
                
                routeS.style.display='flex';
                this.mydata=this.vadata;
                this.inpSearch='';
             }
            },
             
             
            btnF:function(e){
              var {target} = e;
              target.classList.remove('animate');
               void target.offsetWidth;
              target.classList.add('animate');

            }, 
             




      ///////////////////////account/////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////

        x: function(){
        document.getElementById('xx').style.display="none";
        document.getElementsByClassName('oo')[0].style.display="none";
        document.getElementById('xxx').style.display="none";
        document.getElementById('xxxx').style.display="none";
        this.sms=false;
        },
       




recognition:function(){
      this.startButton= document.getElementsByClassName('reco')[0];
      this.endButton  = document.getElementsByClassName('pauseR')[0];
  if(this.startButton){ 
          this.recog = new (window.SpeechRecognition ||
          window.webkitSpeechRecognition ||
          window.mozSpeechRecognition ||
          window.msSpeechRecognition)();

        this.recog.lang = "ar-AR";
        this.recog.continuous = true;
        //this.recog.interimResults = true;
        this.recog.maxAlternatives = 1;

        this.recog.onresult = (event) => {
          var len=event.results.length;          //this event lunch on every result 
          const transcript = event.results[len-1][0].transcript; 
          this.wordR(transcript);
        };
        this.recog.onstart = () => {
            this.startButton.style.display='none';
            this.endButton.style.display='flex';
            this.startButton.removeEventListener('click', this.recoStart);
            this.endButton.addEventListener("click"     ,  this.recoEnd );
        };
        this.recog.onend = () =>{ 
          this.startButton.style.display='flex';
          this.endButton.style.display='none';
          this.endButton.removeEventListener('click', this.recoEnd   );
          this.startButton.addEventListener("click",  this.recoStart );
          };

          this.recoStart=()=>{this.recog.start(); }
          this.recoEnd  =()=>{this.recog.stop();  }
        this.startButton.addEventListener("click",  this.recoStart );
        this.endButton.addEventListener("click"  ,  this.recoEnd   );

  }else{ 
    setTimeout(()=>this.recognition(),500)
  }
 
   },

wordR:function(msg){

 msg=msg.split(' ');
 this.allmydata.forEach(t=>{ 
     msg.forEach(w=>{ 
      var len  = w.length;
      var endL1= w[len-1]=='ه'|| w[len-1]=='ة' || w[len-1]=='ا'|| w[len-1]=='و'|| w[len-1]=='ي';
          endL1?w=w.slice(0, -1):true; 

        if(t.title.length >= w.length && w!='' && w!=' '){ 
           return  t.title.match(w)?(this.searchItems.indexOf(t)==-1?this.searchItems.push(t):true):true
        }else{
           return  w.match(t.title)?(this.searchItems.indexOf(t)==-1?this.searchItems.push(t):true):true 
        }
  })
 });

 this.searchItems.length>=1&&this.$route.name!='search'?this.$router.push({name:'search'}):null;

 },

///////////////////////////////////////////////////


deleteUser:function(id){
  var x=JSON.stringify({id:id});
  var y="deleteUser";
  var url =this.url+`?x=${x}&y=${y}`;
  fetch(url).then(r=>{
    if(!r.ok){ 
      return Promise.reject("0");
         }else{
          return r.json();
         }
          }).then(e=>{ })
},



    addUser:function() {
      this.run=true;
    var comment0 = document.querySelectorAll("#name");
    var comment1 = document.querySelectorAll("#phone");
    var comment2 = document.querySelectorAll("#pass");
    var comment3 = document.querySelectorAll("#place");
      
     var date =new Date();
      var mi   = date.getMinutes();  var day =date.getDay();
      var key  = Math.floor(1+Math.random()*99999)+mi+day;


   if(comment0[0].value=="" || comment1[0].value == "" || comment2[0].value == ""||comment3==""){
    this.$refs.xx.style.display="block";  

   }else{  
    
    return new Promise(r => {
      this.run=true;
      r([comment0[0].value,comment1[0].value,comment2[0].value,comment3[0].value,key]); 
        

      }).then(obj =>{ 
        var x=JSON.stringify({obj:obj});
        var y="addUser";
        var url =this.url+`?x=${x}&y=${y}`;
        fetch(url).then(r=>{
          if(!r.ok){
            return Promise.reject("0");
           }else{
            this.$refs.oo.style.display="flex";this.run=false;
             return r.json();
             
          
           }
      })
    
    }).catch(e=>{
           this.FUNname = this.addUser;
           this.FUNrun =true;
           this.run=false;
    }) 

    }
},




getmyData: function(){
  if(this.newPhone!="" && this.newPass!="" && this.newPass  && this.newPass ){ 
  this.run=true;

  var x=JSON.stringify({phone:this.newPhone,pass:this.newPass});
  var y="getmyData";
  var url =this.url+`?x=${x}&y=${y}`;
  fetch(url).then(r=>{
    if(!r.ok){ 
      return Promise.reject("0");
         }else{
          return r.json();
         }
          }).then(e=>{ 

      this.run=false;
  if(e.values && Array.isArray(e.values) && e.values!="none" ){
    this.user = e.values; 
    localStorage.setItem("user",this.user);
    this.user[0]=='Admin'?this.route2='Admin':router.push('/socitey');   
   
  }else{  
     this.$refs.xxx.style.display="flex";
  } 
  }).catch(e=>{
    this.run=true;
        this.getmyData() ;
        
    })  

  }else{
    this.$refs.xx.style.display="flex";
  }
},




deleteItem:function(){ 
  this.delItem=false;             // for items data base
  var x=JSON.stringify({index:this.indexItem});
  var y="deleteItem";
  var url =this.url+`?x=${x}&y=${y}`;
  fetch(url).then(r=>{
    if(!r.ok){
      return Promise.reject("0");
     }else{
      this.delItemDone=true;
       return r.json();
      }
    }).catch(e=>{
      this.FUNname = this.deleteItem ;
      this.FUNrun =true;
   }) 

},



api: async function(){   // for edit and add
      var obj = await this.info();

     fetch(this.url,{method:"POST",body:JSON.stringify(obj)}) 
     .then(r=> {  
      if(!r.ok){ 
      return Promise.reject("0");
         }else{
          this.$refs.oo.style.display="flex";
          return r.json();
         }
      }).then(x=>{
        this.files=[]; this.imgId=[];
        this.run=false;
      })
      .catch(e=>{
       this.imgId=[];this.files=[];
       this.FUNname = this.api ;
       this.FUNrun =true;
       this.run=false;
      }) 
      
    
},



info: function(){
     this.run=true;

     this.world==""? this.world=this.item[2]      : this.item[2]  = this.world;
     this.price==""? this.price=this.item[3]      : this.item[3]  = this.price;
     this.title==""? this.title=this.item[0]      : this.item[0]  = this.title;
     this.post== ""? this.post=this.item[1]       : this.item[1]  =  this.post;
     this.hash== ""? this.hash=this.item[9]       : this.item[9]  =  this.hash;
     ///////////////////////////////////////////////////////////////////////
     this.item[8]=0;
     ///////////////////////////////////////////////////////////////////////
     var files = this.files;
     ///////////////////////////////////////////////////////////////////////
     //////////////////////////////////////////////////////////////////////
      return new Promise(r => {
             if (files.length==0) {
              r({file: null ,item: this.item  ,imgId:this.imgId ,indexItem:this.indexItem });
        }else{  
              r({file: files ,item: this.item ,imgId:this.imgId ,indexItem:this.indexItem});
             
        }
       })
},





   compressor: function(){
  var input = document.getElementById('files');    const WIDTH =200;
    if(input){ console.log(77)
      input.addEventListener('change',(x)=>{

      var oldImg = x.target.files[0];    this.fileN = oldImg.name;
       
           var reader = new FileReader();
               reader.readAsDataURL(oldImg);
               reader.onload = (e)=>{
           var oldImgUrl= e.target.result;
           var img = document.createElement("img");
               img.src = oldImgUrl;
 
           img.onload=(e)=>{
             var canvas = document.createElement("canvas");
             var ratio  = WIDTH / e.target.width;  canvas.width = WIDTH;   canvas.height= e.target.height*ratio;
             
             const context = canvas.getContext("2d");
          
                   context.drawImage(img,0,0,canvas.width,canvas.height);
             let newImgUrl = context.canvas.toDataURL("img/jpeg",1.0);                    
                
             let newImg = document.createElement("img");
                 newImg.src= newImgUrl;   newImg.class='imgimg';
                 newImg.width=80;
                 newImg.height=e.target.height*80/e.target.width;
 
                  var dataA = newImgUrl.split(",");    
                  var mimeType = dataA[0].match(/:(\w.+);/)[1];
                  var data = dataA[1];
             var file={ fileName: this.fileN , mimeType: mimeType , data: data} 
             
                if(this.files.length >= 2){ 
                  this.$refs.xxxx.style.display="block";
                 }else{ 
                  this.files.push(file);
                  document.getElementsByClassName('wrapper')[0].appendChild(newImg);
                  document.getElementsByClassName('theImgs')[0].style.display="flex";
                }
              

        }         
               
     }            
    });
  }else{ this.compressor}
 },
 
 imgR:function(){
   this.files=[]
     document.getElementsByClassName('wrapper')[0].querySelectorAll('img').forEach(x=> x.remove() );
     document.getElementsByClassName('theImgs')[0].style.display="none";
 },
 








///////////////////index/////////////////////////



  deleteIndex :  function(){ 
      var x = JSON.stringify({x:0});
      var y ="deleteIndex";
      var url =this.url+`?x=${x}&y=${y}`;
      fetch(url).then(r=>{
        if(!r.ok){
          return Promise.reject("0");
         }else{
           return r.json();
          }
    }).catch(e=>{
    this.FUNrun=true;
    this.FUNname=this.deleteIndex;
   })

},




moveOrder:function(orderId){  // for edit order to be index 
  this.run=true;
  var x = JSON.stringify({orderId:orderId});
  var y ="moveOrder";
  var url =this.url+`?x=${x}&y=${y}`;
  fetch(url).then(r=>{
    if(!r.ok){ return Promise.reject() }else{ this.run=false; return r.json() }

  }).catch(e=>{
    this.FUNname=this.moveOrder;
    this.FUNrun=true;
    this.run=false;
  })

},




siteOrders:function(){
    this.run=true;

  var x = JSON.stringify({type:this.indexOrderType});
  var y ="siteOrders";
  var url =this.url+`?x=${x}&y=${y}`;
  fetch(url).then(r=> { 
    if(!r.ok){
     return Promise.reject("0");
     }else{
     return r.json();
     }
}).then(e=>{ 
    this.run=false;
    var userOrders=[];
    e.forEach(i=>{
    if(i.place==this.user[3]||this.user[3]=='syria'){
    userOrders.push(i);
    
    }
   })
   this.userOrders=userOrders;//use splice if obj
   setTimeout(this.siteOrders ,5000)
}).catch(e=>{
    this.run=false;
    this.FUNname = this.siteOrders ;
    this.FUNrun =true;
     

})    

},




indexedDB:function(){
  // indexedDB.deleteDatabase('app')
   const openDB = window.indexedDB.open('app',1);
   openDB.addEventListener('success' , (ev)=>{ this.db = ev.target.result;})
 
   openDB.addEventListener('error' , (ev)=>{ console.log(ev); }) ;
 
   openDB.addEventListener('upgradeneeded', (ev)=>{
     this.db = ev.target.result;
     if(!this.db.objectStoreNames.contains('app')){
       this.db.createObjectStore('app',{ keyPath:'id', });
       }
     
   })
 
   
 },
 
 makeTX:function(obj){
     let tx = this.db.transaction('app','readwrite');
     tx.onerror=(e)=>{};
     tx.oncomplete= (e)=>{};
     
           if(obj==0){
                 var e = tx.objectStore('app').getAll();
                     e.onsuccess = (e)=>{ 
                                 this.dbData=e.target.result;
                                 
                                 this.dbData.forEach(e=>{
                                 e.date.split('/')[1]==7?tx.objectStore('app').delete(e.id):true;
                                })
                               } 
                     e.onerror = (e)=>{ console.log(e) }
        }else {
                 var e = tx.objectStore('app').add(obj);
                     e.onsuccess = (e)=>{ tx.commit(); }
                     e.onerror = (e)=>{ console.log(e) }
        }
 
 },
 



















// // install : function(){ 
// // window.addEventListener('beforeinstallprompt', (e) => {
// //   e.preventDefault(); const deferredPrompt = e;
// //   var install=this.$refs.install;
// //   install.style.display="flex";
// //   install.addEventListener('click', () => {
// //       deferredPrompt.prompt();
// //       deferredPrompt.userChoice.then(choiceResult => {
// //           if (choiceResult.outcome === 'accepted') {
// //               console.log('App installed');
// //           } else {
// //               console.log('App installation declined');
// //           }
// //           install.style.display = 'none';
// //       });
// //   });
// // })
// // },




coloring:function(){
     this.counter++;
  requestAnimationFrame(this.coloring);
},

coloring0:function(){
 var stop=0;
 var y; var x=this.color;
 var one   = [  [255, 230, 109],  [63, 52, 13]  , [21, 21 ,  0] ,[249 , 224, 146] ];
 var tow   = [  [165, 248, 255],  [0, 52,  82]  , [0 , 20 , 21] ,[146 ,249 , 238] ];
 
 this.revColor?y=tow:y=one;
 
 for(var i=0; i<x.length ; i++ ){
 x[i][0]-y[i][0]!=0?(x[i][0]-y[i][0]>0?(x[i][0]-=1,stop=1):(x[i][0]+=1,stop=1)):true;
 x[i][0]-y[i][0]!=0?(x[i][1]-y[i][1]>0?(x[i][1]-=1,stop=1):(x[i][1]+=1,stop=1)):true;
 x[i][0]-y[i][0]!=0?(x[i][2]-y[i][2]>0?(x[i][2]-=1,stop=1):(x[i][2]+=1,stop=1)):true;
}

if (stop==0){
    this.revColor = !this.revColor;
  setTimeout(() => {
       requestAnimationFrame(this.coloring);
    }, 10000);
  }else{
  var obj = [ `rgb(${x[0][0]},${x[0][1]},${x[0][2]})`  ,`rgb(${x[1][0]},${x[1][1]},${x[1][2]})`,
              `rgb(${x[2][0]},${x[2][1]},${x[2][2]})`  ,`rgb(${x[3][0]},${x[3][1]},${x[3][2]})`
              ]
              //`rgb(${x[4][0]},${x[4][1]},${x[4][2]})`  ,`rgb(${x[5][0]},${x[5][1]},${x[5][2]})` 
  this.colors=obj;
  
       requestAnimationFrame(this.coloring);
   
  }

},


///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// logout:function(){
//   localStorage.setItem('window' , this.item[19]);
//   localStorage.removeItem("i1");
//   this.i1=[];
//   this.myId="";
//  this.$refs.oo.style.display="flex";
//  },
 


addORdel:function(equation,item){     ////////////for cart items
if(this.cartItem.length==0) 
  return this.cartItem.push({title:item.title,count:item.count,price:item.price,z:this.allmydata.indexOf(item)});
  //////////////////  
  this.cartItem.forEach((x)=>{
    if( x.title==item.title)
     return equation=='+'?x.count+=1:(x.count!=1?x.count-=1:this.cartItem.splice(this.cartItem.indexOf(x),1))
  })
  //////////////////
  var arr  =[]
   this.cartItem.forEach(x=>{
    arr.push(x.title);
   }) 
   if(equation=='+'&&arr.indexOf(item.title)==-1)
    return this.cartItem.push({title:item.title,count:item.count,price:item.price,z:this.allmydata.indexOf(item)});


 },




 xyPosition:function(e){
  var {target} =e;
  var cart = document.getElementsByClassName('cartBtn')[0];

  const xyTarget = target.getBoundingClientRect();
  const xTarget = xyTarget.left 
  const yTarget = xyTarget.top 


  const xyCart   = cart.getBoundingClientRect();
  const xCart = xyCart.left+10;
  const yCart = xyCart.top+10; 
 ///////////////////////////////////////////////////
 /////////////////////////////////////////////////
 var img=document.createElement('img'); // this id the secret why it plased as the card place
 img.src="icons/purchase.png";
 img.style.position = 'absolute';
 img.style.width='4.5vw';
 img.style.left = `${xTarget}px`
 img.style.top  = `${yTarget}px`;
 img.style.transition= 'all 1.7s';
 img.classList.add('tar');

 document.getElementsByClassName('dialog')[0].appendChild(img);
 var tar = document.querySelectorAll('.tar');
 tar.forEach((t)=>{
  setTimeout(()=>{
            t.style.left=`${xCart}px`;
            t.style.top =`${yCart}px`;},1)
   
   setTimeout(()=>t.remove(),1100)
 })

 

 },






 /// for cart ////
 date : function(){ 
  var date = new Date();
  var date ='('+(date.getDay()*1+16)+'/'+(date.getMonth()*1+1)+'/'+date.getFullYear()+')|*'+date.getHours()-1+':'+date.getMinutes()+'*|';
  return date;
 },
 
 
 ocCart:function(){

  if(this.cart==3){
    
    if(this.cartItem.length==0||this.iphone==''||this.geoL==null||this.geoL==''){
       this.errSend=true;
       
    }else{
    
     
      //// for api send data ///
      var id = Math.floor(1+Math.random()*1234567890);
      var obj= {cartItem:this.cartItem,orderPhone:this.iphone,geoL:this.geoL,id:id,indexed:"order"};
      //- ------------------- -//
     ///// for idexedDb  /////
       var cartItem=JSON.stringify(this.cartItem);
       var data={id:id,cartItem:cartItem,date:this.date()};
     ///// for idexedDb  /////

      var x  = JSON.stringify(obj);
      var y  ="newOrder";
      var url =this.url+`?x=${x}&y=${y}`;
      fetch(url).then(r=>{
        if(!r.ok){
           return Promise.reject();
        }else{
           this.sendCartDone=true;
           return r.json();}
      }).then(e=>{ 
         this.makeTX(data);
         this.telegram();
         this.cartItem=[];this.orderPhone=null;this.geoL=null;
      }).catch(e=>{
        this.FUNrun=true;
        this.FUNname=this.ocCart;
      })

    }
   
  }
 },



 telegram:function(){
      ////  telegram bot  ////
      var chatId =`-4647034325`;
      var token  =`7883274835:AAHMSeD4WhgOSOl-DsPUXihoo-PDuBS3hWY`;
      var textLoc= typeof this.geoL=="string"?"open site" :`https://maps.google.com/?q=${this.geoL.latitude},${this.geoL.longitude}`
      var text   =" Orders: "+'https://mhdbi.github.io/0' +"  Location: "+textLoc;
      var url    = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`; fetch(url).then(e=>{
          if(!e.ok){
            return Promise.reject(0);
          }else{}
        }).catch(e=>{ 
          this.FUNrun=true;
          this.FUNname= this.telegram;
          
        })
        
 },








 
 
//  imgSlider:function(document,event){
//    var $down = $(event.target).hasClass("down");
//    var $up =   $(event.target).hasClass("up");
 
//   if($up){
//    $(event.target).css({"display":"none"});
//    $(event.target).siblings(".up").slideUp("fast")
//    $(event.target).siblings(".down").slideDown("fast")
 
//   }else if($down){
//    $(event.target).css({"display":"none"});
//    $(event.target).siblings(".up").slideDown("fast")
//    $(event.target).siblings(".down").slideUp("fast")
 
//   }
//  },
 



//  onScroll: function(e){
//   // 
//      var lastScrollTop=0;
//    $(".inset").on("scroll", ()=>{    
//  // <!-- 
//  //     var scrollabc = 140 ;
//  //     var nowScrollTop = $(".inset").scrollTop();
//  //     if(nowScrollTop > scrollabc){
//  //       if(nowScrollTop > lastScrollTop){
        
//  //         $(".topBar").height("-=6");
//  //       }else{
//  //         $(".topBar").height("+=6");
         
//  //       }
//  //     }
//  //     lastScrollTop=nowScrollTop; -->
 
 
//    if(($(".panels").height() - ($(window).height() + $(".inset").scrollTop()) <= 0)&& this.scroll < Object.keys(this.mydata).length){
//        this.scroll +=2;
 
//     }
 
//  })
//  },
 
 

chosePlace:function(){
 
  var geoL= document.getElementsByClassName('geoL')[0];

if(this.siteText=='text'){ 
  this.geoL=null;                 ///////  for text
    geoL.style.display='flex';


}else if(this.siteText=='gps'){          ///// for GPS 
  geoL.style.display='none';
    this.geoL=null;
      if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition((x)=>{
        const latitude  = x.coords.latitude;
        const longitude = x.coords.longitude;
        this.geoL={latitude:latitude,longitude:longitude};
        this.runSolve=true;
       },
      ()=>{this.runErr=true;}
      )
     
      }else{
          this.runErr=true;
      }

  }
},



        

 //end   of   methodes
 };
 
 
 
 const computed ={
     data4: function(){  
 
       return this.mydata//.slice(0, this.scroll);
     },

  
 
 
   backGround: function(){
     return `background: linear-gradient(${this.counter+`deg`}, rgb(255, 230, 109), rgb(63, 52, 13));`  
  //<div :style="filter" >for learn</div>
   },
 
   backGround0: function(){
    return  ` background: linear-gradient(359deg, ${this.colors[0]} ,${this.colors[1]} );
              box-shadow: inset 0px -5px 10px ${this.colors[2]}, inset 0px 5px 10px ${this.colors[3]} 
                                  ,0px 13px 17px #000000  ; ` ;
  }
       
  
      
 };
 
 
 const StaticHtml={
       
  data() { 
          return  data
           
         },

       methods : methodss,    
       computed:{
        cartPrice:function(){
              var x=0;
              this.cartItem.forEach(i=>{
                x += i.count*i.price;
              })
              return x;
            },
          },
         
       
       template: ` 
           















     
 <div :class="{ cartBtn2 : $route.name=='inset'||$route.name=='search' }" class="cartBtn"  v-if='$route.name=="home"||$route.name=="inset"||$route.name=="search"' @click="cart=1">
    <img src="icons/purchase.png" style="filter: hue-rotate(159deg); width: 40%;"/> 
    <div :class="{ after2 : $route.name=='inset'||$route.name=='search' }" class="after" > </div>
 </div>








<transition-group name="slide-fade">

<div class='cart' v-if="cart!=0" >
  <div   class="pageTop" :class="{ pageTop2 : cart!=0 }" >

       <div   class="cartFront" >
          <div class="test3" >tele shop</div>
       </div>





      <div class="cartBack" >

          <div   :class="{ display : cart==1 }"  class="cartItem"  >
              <div class="itemFlex" style="color:#ffffff;border-bottom: 1px solid wheat;height: 8%;">
                <span style="background: #fefefe;border-radius: 2rem;color: black;">تعديل</span><span >المجموع</span><span >سعر الواحدة</span><span >العدد</span> <span >الطلب</span>
              </div>
              <div v-for="i in cartItem" :key="i" class="itemFlex " style="height: auto;">
                <span style="background: red;color: rgb(255, 255, 255);justify-content: space-around;border-radius: 1rem;">
                 <span @click="allmydata[i.z].count+=1,i.count+=1" style="color: ivory;font-size: 15px;">+</span>
                 <span @click="allmydata[i.z].count-=1,i.count!=1?i.count-=1:cartItem.splice(cartItem.indexOf(i),1)" style="font-size: 15px;">-</span>
                </span> 
                 
                 <span style="color: gold;">{{i.price*i.count}}</span><span style="color: greenyellow;">{{i.price}}</span> <span >{{i.count}}</span> <span style="color: rgb(255, 201, 209);">{{i.title}}</span>
              </div>
         </div>
      



       
          <div :class="{ display : cart==2 }"  class="cartItem"  > 
            <div class="itemFlex test1" style="background: repeating-linear-gradient(145deg, rgb(53 69 43), transparent 65%);border-radius: 2rem;height: 10%;" >: تحديد الموقع </div>

         
      <div class="itemFlex" style="flex-direction: column;gap: 25px;justify-content: start;height: 55%;">

            

          <div class="itemFlex" style="border-radius: 5rem;margin: 10px 0px;height: 15%;">
           <label for="text"   style="width: 13vh;"  @click="siteText='text',chosePlace('text'),run=false,runErr=false"   :class="{ 'shake2 hoverPlace' : siteText=='text'}">كتابة نصية</label> <input type="radio"       id="text">
           <label for="GPS"    style="width: 13vh;"  @click="siteText='gps',chosePlace('gps'),run=false,runErr=false"    :class="{ 'shake2 hoverPlace' : siteText=='gps' }">   GPS     </label> <input type="radio"       id="GPS">      
          </div>





              <div class="itemFlex geoL" style='display: none;'>
               <textarea type="text" cols="3" rows="3" dir="rtl" v-model="geoL"   placeholder=" قم بتحديد موقعك بالتفصيل"></textarea>
              </div>
             
              <div v-if="runErr"   class="errSolve" :class="{ shake2 : runErr }">حدث خطأ ما, يرجى تعيين الموقع كتابةً </div>
              <div v-if="runSolve" class="errSolve" :class="{ shake2 : runSolve }">تم تحديد الموقع بنجاح</div>
              
            </div> 
        


            <div class="itemFlex" style="justify-content: space-evenly;background: repeating-linear-gradient(21deg, #435742, #4c6546 28px); margin: 10px 0px;height: 13%;box-shadow: inset 2px 1px 5px #0d0d0d, inset 0px -2px 8px #000000;">
              <input id='i' type="text" dir="rtl" placeholder="ما اسمك" v-model="iname"  @input="editLog()"   style='width: 60%; background: none; border: none;font-weight: bolder;box-shadow: none;outline: none;display: flex;' />
                <span style='font-weight: bold; color: #e2e294;text-shadow: 0px 0px 1px yellow;'> : اسمك</span>
             </div>

             <div class="itemFlex" style="justify-content: space-evenly;background: repeating-linear-gradient(21deg, #435742, #4c6546 28px); height: 13%;box-shadow: inset 2px 1px 5px #0d0d0d, inset 0px -2px 8px #000000;">
              <input id='u' type="text"  dir="rtl" placeholder="ما رقمك" v-model="iphone"  @input="editLog()"  style='width: 60%; background: none; border: none;font-weight: bolder;box-shadow: none;outline: none;display: flex;' />
                <span style='font-weight: bold; color: #e2e294;text-shadow: 0px 0px 1px yellow;'> : رقمك</span>
             </div>
       




       <div v-if="run" style="position:relative;z-index:9998;">
         <div class="containerW" >
          <div style="color: wheat;"> ..انتظر</div>
           <div class="it item1"></div>
           <div class="it item2"></div>
           <div class="it item3"></div>
          </div>
       </div>
       
      
   



         </div>
     </div>
  </div>
   


    <div class="pageBottom">

      <div v-if="errSend" class="errSolve errSolve2" :class="{ shake: errSend }"> 
          لم تقم بتعبئة أو اختيار كامل المعلومات 
          <br> <div @click="errSend=false,cart=2" 
            style="width: 35%;font-size: 14px;padding: 5px;background: #232323;border-radius: 1rem;">حسناً</div>
       </div>

      <div class="priceAll" v-if="cart==1"> 
        <span>{{cartPrice}}</span> <span>مجموع الفاتورة</span> 
      </div>
 

      <div class="buttonBottom" >
        
        <button  class="backword" @click="run=false,runErr=false,runSolve=false,cart!=0?cart-=1:true">رجوع</button>
        <button  class="next"   v-if="cart!=2&&cart!=3"  @click="cart+=1">متابعة</button>
        <button  class="next"   v-else-if="cart==2&&cart!=3"   @click="cart=3,ocCart()">إرسال الطلب</button>
        <button  class="next"   v-else-if="cart==3"   >قيد الإرسال</button>
        
      </div>
       


      

    </div>
</div>


</transition-group>

<!--------------------------------->




<!--------------------------------------------------------------------------------------------------->



<div class="commenter survey" v-if="FUNrun" style="bottom: 155px;height: auto;" :class="{ shake: FUNrun }">
  <div class="callx2"  @click="FUNrun=false" >x</div>
  <div style="text-align:center;font-size: 14px;color: #ffffff;margin:20px;">
    حدث خطأ أثناء جلب البيانات <br>
    ..التغطية ضعيفة..
      
  </div> 
          
            <div class="button"  style="margin-top:10px;" @click="FUNname(),FUNrun=false">
              <div class="login"  style="background: linear-gradient(0deg, black,white);">إعادة المحاولة</div>
            </div>

  </div>

<!-- ----------------for delete item done------------------------- -->

<div class="commenter survey" v-if="delItemDone" style="bottom: 155px;height: auto;">
  <div class="callx2"  @click="delItemDone=false" >x</div>
  <div style="text-align:center;font-size: 14px;color: #ffffff;margin:20px;">
   تم حذف العنصر
      
  </div> 
          
      <div class="button"  style="margin-top:10px;" @click="delItemDone=false">
         <button class="login"  style="background: linear-gradient(0deg, black,white);">حسناً </button>
      </div>

  </div>

<!-- ----------------for send cart done------------------------- -->

<div class="commenter survey" v-if="sendCartDone" style="bottom: 155px;height: 220px;" :class="{ shake: sendCartDone }">
  <div class="callx2"  @click="sendCartDone=false" >x</div>
  <div style="text-align:center;font-size: 17px;color: #ffffff;margin:20px;">
  انتظر مكالمة من الساعي<br>
  سنصل موقعك في أقرب وقت
    
      
  </div> 
          
      <div class="button"  style="margin-top:10px;" @click="sendCartDone=false,cart=0,ocCart(),cartItem=[]">
         <button class="login"  style="background: linear-gradient(0deg, black,#ffffff);">حسناً </button>
      </div>

  </div>




  

       `
 }





 
 ///////////////////////////////
 /////////////////////////
 ///////////////////
 //////////////
 /////////
 //////
      // Vue App \\
 
 
 
   const app = Vue.createApp({
        data() {
      return data;
        },
      methods : methodss,

      computed: computed,
      components:{StaticHtml},
 
      mounted(){
        this.$router.push({name:'home'});
        // window.addEventListener('hashchange', () => {
        //   var currentPath= window.location.hash;
        //  if(currentPath=="#/"){ 

        //    }else if(currentPath=="#/inset")
        //  });
         
         this.funAdmin();
       //    this.funUser();
         this.created();
         this.indexedDB();
         setTimeout(this.coloring,5000);

        // this.notificM();
        // this.siteOrders()
   

                }   
                   
                 })

 
     const routes = [
         { path: "/",             name:"home",   component:  ()=> import('./views/Home.js').then(t => t.default.Home ) },
         { path: "/inset/:inset", name:"inset",  component:  ()=> import('./views/Inset.js').then(t => t.default.Inset ) },
         { path: "/account",      name:"account",component:  ()=> import('./views/Account.js').then(t => t.default.Account ) },
         { path: "/socitey",      name:"socitey",component:  ()=> import('./views/Socitey.js').then(t => t.default.Socitey ) },
         { path: "/index",        name:"index",  component:  ()=> import('./views/Index.js').then(t => t.default.Index ) },
         { path: "/search",       name:"search", component:  ()=> import('./views/search.js').then(t => t.default.Search ) }
    
        ];
 
    
    
     const router = VueRouter.createRouter({
           history: VueRouter.createWebHashHistory(),
            routes
     });
 
     app.use(router).mount('#app')
 
 
 







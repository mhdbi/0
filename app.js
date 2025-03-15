


const data={

  url : "https://script.google.com/macros/s/AKfycbwa94WwRGOzIqyM-hGZ05Fq0mhaNpNNlJfVkUM8widBU1DG3oTk5lIgByZ_h4lABjFG/exec",
  db :null ,
  dbData: null ,

  cart:0,
  siteText:true,                          // btn chang cart  place, text

  orderPhone:null,                        //for cart order phone
  cartItem:[],          //for cart order items
  geoL:'',                               //for cart order gps 
  inputP:'',                               //for cart chose market user place

  orderPh:'' ,                         //for users orders show phone &place                           
  order:[] ,                           //for customer order 
  userOrders:[] ,                      // for detect user order cover
  indexOrderType:'order',                    // for indexed order of th user 


  wts    : "https://wa.me/+963981715375",
  userImg:"https://drive.google.com/thumbnail?id=1_ZixOFUJe_f4hIKNm_it3AaBD88YHl-w",
  indexItem:null,                       //for edit with index of item 

  orderInfoSite:0,                      //for open close windo of site , index , order


  user:[],                             //for merchent user info only


  item:['','','','','','','','',''],   //for add item only
  world :"",
  files : []  ,
  fileN:"",
  imgId:[],
  post      : '', 
  title     :'',
  price:'',                             //for input of add edit items

    
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
    runErr:false,
    runSolve:false,
    errSend:false,
    delItem:false,       //for holder delete items
    delItemDone:false,   //for done deleted item
    sendCartDone:false,  //for done sended cart

    FUNname: []  ,
    FUNrun:false   ,
   
  newPhone:'',
  newPass:'',
  
  //   showC :  false ,
 //  alertC:  false ,
 //  newC  :  []    ,
 //   showM :  false ,
 //   alertM: false  ,
 //  newM  :  []
  
}




const methodss={

        

        route: async function(event){
        
              this.mydata="";  this.myroute=event; this.vadata='';  //مهم بقائها هنا
              this.inpSearch="";   this.msg='';   this.scroll = 6; 
            if(event=="خضار وفواكه"||event=="مواد غذائية"||event=="حلويات"||event=="نقرشات"||event== "مشروبات"||event=="تبغيات"){
                
                this.ecity();   
                router.push('/inset');
              
               $('body').append(`<style> .cartButton::before{animation: cart 2s ease-in 0s;}</style>`);
               $('.cartButton').css({"display":"flex","transform":" translate(-39vw, 1vw)"});
            
          }else if (event=='verify' && this.user.length>0 ){ 
            
              this.user[3]=='syria'?(this.route2='Admin',router.push('/account') )
              :(  router.push('/socitey'),this.siteOrders(this.indexOrderType) )   
              
                   $('.cartButton').css({"display":"none","transform":" translate(0vw, 1vw)"});
          }else if(event=='verify' && this.user.length<=0 ) {
                     this.route2="verify"; 
                     router.push('/account');
                     $('.cartButton').css({"display":"none","transform":" translate(0vw, 1vw)"});
           }else if(event==''){
                     router.push('/');
                     $('.cartButton').css({"display":"flex","transform":" translate(0vw, 1vw)"});
              }else if(event=='index'){
                     $('.cartButton').css({"display":"none","transform":" translate(0vw, 1vw)"});
                     router.push('/index');
                     this.storageOrderFun();
              }

           
        },

        funUser:function(){
           this.myroute==""?router.push("/"):true;
             
          if(localStorage.getItem("user")){ 
          this.user =localStorage.getItem("user").split(",");
          this.user[0]=='Admin'?this.route2='Admin':true;
              
         // this.      = this.i1[6];
          
          }
        },
         
        storageOrderFun:function(){
         var index= localStorage.getItem('storageOrder')||[];
         index.lenght>=2?this.storageOrder=index.split(','):this.storageOrder=index;
         console.log(this.storageOrder)
        },



         created: function (){
          
            var x = JSON.stringify({name:1});
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
            //  this.allmydata = e;
            //  this.allmydata.splice(0,1);
            //  this.allmydata  = e.sort((a,b)=>0.5-Math.random());
          }).catch(e=>{
             this.FUNname = this.created ;
             this.FUNrun =true;
          })    
               
          },



         




          

            ecity : function(){
              
                      var all = this.allmydata;
                      var y = [];
                         all.forEach(x=>{
                      
                      if(x.world==this.myroute){
                         y.push(x);
                         
                      }
                      })
                       this.mydata=y;
                       this.vadata=y;

            if(this.mydata.length<=0)return setTimeout( this.ecity , 2000);
             
                       
                },



       

        change:function(){
        this.callx=this.callx?false:true;
        },
    


        searcher: async function(){
         // this.mydata=this.vadata;
         
       //var sear=document.querySelectorAll(".inputtext");sear[0].value ;
         var s =  this.inpSearch;
         var result1 = this.mydata.map((x)=>x.title);
         var i1 =[];
         var result2 =result1.filter((x)=>x.toLowerCase().indexOf(s.toString()) > -1   );
             result2.forEach((x)=> {
               result1.forEach((i ,y)=>{
               if ( i === x){
               return i1.push(y);
               
             }
               })
               });
              var i1= i1.filter((x2,y2)=> i1.indexOf(x2)===y2 );//لحذف التكرار
             var va = [];
            
              for(var e=0 ; e < i1.length ; e++ ){
                 var v =this.mydata[i1[e]];
                    va.push(v);
                   }    
                 this.mydata= va;
              
           if(s==''){
             this.mydata=this.vadata;
           }
        
       },
      








      ///////////////////////tecnoForm/////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////

        x: function(){
        this.$refs.xx.style.display="none";
        this.$refs.oo.style.display="none";
        this.$refs.xxx.style.display="none";
        this.$refs.xxxx.style.display="none";
        this.sms=false;
        },

       date : function(){ 
        var date = new Date();
        var date ='('+(date.getDay()*1+9)+'/'+(date.getMonth()*1+1)+'/'+date.getFullYear()+')|*'+date.getHours()+':'+date.getMinutes()+'*|';
        return date;
       },
       
       cartPrice:function(){
        var x=0;
        this.cartItem.forEach(a=>{
         x+= a.price*a.count;
        })
        return x;
       },

        // onoff:function(){  
        //  this.select=this.world;
        // },
       






   deleteUser:function(){
     
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
  this.run=true;

  var x=JSON.stringify({phone:this.newPhone,pass:this.newPass});
  var y="getmyData";
  var url =this.url+`?x=${x}&y=${y}`;
  fetch(url).then(r=>{
    if(!r.ok){ 
      return Promise.reject("0");
         }else{
          this.$refs.oo.style.display="flex"
          return r.json();
         }
          }).then(e=>{ 
  this.user = e.values; 
  this.run=false;
  if(this.user.length > 0 && this.user!="none" ){
    localStorage.setItem("user",this.user);
    this.user[0]=='Admin'?this.route2='Admin':router.push('/socitey');   
   
  }else{  
     this.$refs.xxx.style.display="flex";
     this.run=false;
  } 
  }).catch(e=>{
        this.getmyData() ;
        
    })  
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
     this.post== ""? this.post=this.item[1]       : this.item[1]   = this.post;
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








////////////////////////////////////////////



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
  var userOrders=[];
  console.log(e)
   e.forEach(i=>{
    if(i.place==this.user[3]||this.user[3]=='syria'){
    userOrders.push(i);
    
    }
   })
   this.userOrders=userOrders;//use splice if obj
   
}).catch(e=>{
   this.FUNname = this.siteOrders ;
   this.FUNrun =true;
})    

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










///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// logout:function(){
//   localStorage.setItem('window' , this.item[19]);
//   localStorage.removeItem("i1");
//   this.i1=[];
//   this.myId="";
//  this.$refs.oo.style.display="flex";
//  },
 





 compressor: function(){
  var input = $("#files");
  //this.xyz=2;
  const WIDTH =200;
      input.on("change",()=>{
      var oldImg = input.prop('files')[0];
      this.fileN = oldImg.name;
       
           var reader = new FileReader();
               reader.readAsDataURL(oldImg);
               reader.onload = (e)=>{
           var oldImgUrl= e.target.result;
           var img = document.createElement("img");
               img.src = oldImgUrl;
 
               img.onload=(e)=>{
             var canvas = document.createElement("canvas");
             var ratio    = WIDTH / e.target.width;
             canvas.width = WIDTH;
             canvas.height= e.target.height*ratio;
             
             const context = canvas.getContext("2d");
          
                   context.drawImage(img,0,0,canvas.width,canvas.height);
             let newImgUrl = context.canvas.toDataURL("img/jpeg",98);
                       
                
             let newImg = document.createElement("img");
                 newImg.src= newImgUrl;
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
      
                 $("#wrapper").append(newImg);
                 $(".theImgs").css({"display":"flex"});
                }
              
 
 
        }         
               
     }
              
    });
 },
 
 
 ocCart:function(){
  
  if(this.cart==0){
    $('.pageTop').css({"transform":"rotateX(0deg)"});
    $('.cart').fadeOut('slow');
    $('#cartItem2').fadeOut();
    $('#cartItem3').fadeOut();
  }else if(this.cart==1){ 
   $('.cart').fadeIn('slow').css({"display":"flex"});
   $('.pageTop').css({"transform":"rotateX(180deg)"});
   $('#cartItem1').fadeIn(); 
   $('#cartItem2').fadeOut('slow');
   $('.priceAll').fadeIn('slow');
  }else if(this.cart==2){
    $('#cartItem3').fadeOut('slow');
    $('#cartItem1').fadeOut('slow');
    $('#cartItem2').fadeIn('slow');
    $('.priceAll').fadeOut('slow');
  }else if(this.cart==3){
    $('#cartItem2').fadeOut('slow');
    $('#cartItem3').fadeIn('slow');
  }else if(this.cart==4){
    
    if(this.cartItem.length==0||this.orderPhone==''||this.inputP==''||this.geoL==null||this.geoL==''){
       this.errSend=true;
    }else{
    
      ///// for idexedDb  /////
        var cartItem=JSON.stringify(this.cartItem);
        var data={id:id,cartItem:cartItem,date:this.date()};
      ///// for idexedDb  /////
      
      //// for api send data ///
      var id = Math.floor(1+Math.random()*1234567890);
      var obj= {cartItem:this.cartItem,orderPhone:this.orderPhone,inputP:this.inputP,geoL:this.geoL,id:id,indexed:"order"};

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
        var text   ='https//mhdbi.github.io/' +"the full date is"+this.date();
        var url    = `https//api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
        fetch(url).then(e=>{
          if(!e.ok){
            return Promise.reject(0);
          }else{}
        }).catch(e=>{ 
          this.FUNrun=true;
          this.FUNname= this.telegram;
        })
 },


indexedDB:function(){
 // indexedDB.deleteDatabase('app')
  var openDB = indexedDB.open('app',1);
  openDB.addEventListener('success' , (ev)=>{ this.db = ev.target.result;})

  openDB.addEventListener('error' , (ev)=>{ console.log(ev); }) ;

  openDB.addEventListener('upgradeneeded', (ev)=>{
    this.db = ev.target.result;
    if(!db.objectStoreNames.contains('app')){
      db.createObjectStore('app',{ keyPath:'id', });
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













 imgR:function(){
   this.files=[]
   $("#wrapper").children("img").remove();
   $(".theImgs").css({"display":"none"})
 },
 
 
 
 imgSlider:function(document,event){
   var $down = $(event.target).hasClass("down");
   var $up =   $(event.target).hasClass("up");
 
  if($up){
   $(event.target).css({"display":"none"});
   $(event.target).siblings(".up").slideUp("fast")
   $(event.target).siblings(".down").slideDown("fast")
 
  }else if($down){
   $(event.target).css({"display":"none"});
   $(event.target).siblings(".up").slideDown("fast")
   $(event.target).siblings(".down").slideUp("fast")
 
  }
 },
 

 
 searchBar:function(){
   if(this.searchBar0==false){ 
      $(".search").css({"left": "145px","z-index": "6"})
      $(".inputtext").css({ "width": "190px" , "opacity": "1"})
      this.searchBar0=true;
      $(".routeS").fadeOut("slow");
      $('#search').removeClass('search').addClass("search2").text('إنهاء');
      
   }else{
     $('#search').removeClass("search2").addClass('search').text('');
      $(".search").css({"left": "5px","z-index": "6"})
      $(".inputtext").css({ "width": "0px" , "opacity": "0"})
      this.searchBar0=false;
      $(".routeS").fadeIn("slow");
      this.mydata=this.vadata;

      
   }
 },
 
 
 cardF:function(document,event){
   var $element = $(event.target);
     if(this.card==1){ 
    $element.parent().siblings(".u4").slideDown("slow");
     }else if(this.card==0){
       $element.parent().slideUp("slow");
     }
 },
 

 
 refresh:function(){
  this.created();
  $('.refresh').css({"transform":"rotateZ(360deg)"})
  setTimeout(this.refreshB , 3000)
 },
 refreshB:function(){
  $('.refresh').css({"transform":"rotateZ(0deg)"})
 },
 
 onScroll: function(e){
  // 
     var lastScrollTop=0;
   $(".inset").on("scroll", ()=>{    
 // <!-- 
 //     var scrollabc = 140 ;
 //     var nowScrollTop = $(".inset").scrollTop();
 //     if(nowScrollTop > scrollabc){
 //       if(nowScrollTop > lastScrollTop){
        
 //         $(".topBar").height("-=6");
 //       }else{
 //         $(".topBar").height("+=6");
         
 //       }
 //     }
 //     lastScrollTop=nowScrollTop; -->
 
 
   if(($(".panels").height() - ($(window).height() + $(".inset").scrollTop()) <= 0)&& this.scroll < Object.keys(this.mydata).length){
       this.scroll +=2;
 
    }
 
 })
 },
 
 
 
 
// cartPrice:function(){
//   var x=0;
//   this.cartItem.forEach(i=>{
//     x += i.count*i.price;
//   })
//   return x;
// },

myButton:function(){
if(this.siteText){ 
  this.geoL=null;
    $('body').append(`<style> .myButton::before{transform: translate(0vh, -1vh);}</style>`);
    $('.myButton').css({"background":"#e90aff"});
    $('.myPlace').css({"display":"none"});
    $('.btnPlace').fadeIn('slow');

  }else if(!this.siteText){
    this.geoL=null;
    $('body').append(`<style> .myButton::before{transform: translate(-4vh, -1vh);}</style>`);
    $('.myButton').css({"background":"none"});
    $('.btnPlace').css({"display":"none"});
    $('.myPlace').fadeIn('slow');

  }
},

btnPlace:function(){
this.myPlace=null;
$('.btnPlace').fadeOut('slow');
  
if('Geolocation' in navigator){
  // this.run=true;
  // navigator.geolocation.getCurrentPosition(success).then(x=>{
  //   const latitude  = x.coords.latitude;
  //   const longitude = x.coorde.longitude;

  //   this.geoL={latitude:latitude,longitude:longitude};
  // this.run=false;
  // this.runSolve=true;

  //   // `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
  // }).catch(e=>{
    // this.runErr=true;
  //   });
   $('.myButton').fadeOut();
   this.runSolve=true;
}else{
      this.runErr=true;
}

},



 //end   of   methodes
 };
 
 
 
 const computed ={
     data4: function(){
       return this.mydata.slice(0, this.scroll);
     },
 
 
 
  //  filter: function(){
  //      if(this.myroute=="light" || this.myroute=="سيارات"){
  //        return "filter: hue-rotate(106deg);"//رskyblue
  //       }else if( this.myroute=="فرص عمل"){
  //        return "filter: hue-rotate(308deg);" // red 
  //       }else if(this.myroute=="عقارات" ){
  //        return "filter: hue-rotate(45deg);" //  green 
  //       }else if( this.myroute=="C.V"){
  //         return "filter: none" // أصفر  
  //       }else if( this.myroute=="طلب مأجور"){
  //         return "filter: hue-rotate(165deg);" // أزرق غامق
  //      }
  // <div :style="filter" >for learn</div>
  //  },
 
    //  backGround: function(){
    //          if(this.myroute=="light" || this.myroute=="سيارات"){
    //      return "background:linear-gradient(0deg, #000000, rgb(107 145 142), rgb(255, 255, 255));"//رskyblue
    //     }else if( this.myroute=="فرص عمل"){
    //      return "background:linear-gradient(0deg, #000000, rgb(145 107 107) , rgb(255, 255, 255) )" // red 
    //     }else if(this.myroute=="عقارات" ){
    //      return "background:linear-gradient(0deg, #000000, rgb(114 145 107) 45%, rgb(255, 255, 255) 98%);"//green 
    //     }else if( this.myroute=="C.V"|| this.myroute=="تسويق"){
    //      return "background:linear-gradient(0deg, #000000, rgb(143 145 107), rgb(255, 255, 255));" // أصفر  
    //     }else if( this.myroute=="طلب مأجور"){
    //      return "background:linear-gradient(0deg, #000000, rgb(107 114 145), rgb(255, 255, 255));" // أزرق 
    //    }
       
    //  },

      
 };
 
 
 
 
 const app = Vue.createApp({
         data() {
    return data;
         },
       methods : methodss,
 
       computed: computed,
 
 created(){

 }
 ,
       mounted(){
         
         window.addEventListener('hashchange', () => {
           var currentPath= window.location.hash;
          if(currentPath=="#/"){ 
           $('.cartButton').css({"display":"flex","transform":" translate(0vw, 1vw)"});
             
            }else if(currentPath=="#/inset"){
               $('body').append(`<style> .cartButton::before{animation: cart 2s ease-in 0s;}</style>`);
               $('.cartButton').css({"display":"flex","transform":" translate(-39vw, 1vw)"});
               
            }else if(currentPath=="#/account"||currentPath=="#/socitey"||currentPath=="#/index"){
           $('.cartButton').css({"display":"none","transform":" translate(0vw, 1vw)"});
            }
          });
          

          this.funUser();
          this.created();
          this.indexedDB();
         // this.notificM();
         // this.siteOrders()


                 }   
                    
                  })
 
 
 
 
 
 
 
 
 
     const Home = {
        data() {
    return data;
              
         },
       methods : methodss,    
       computed: computed,
 
        template: `
 
    
 
 <header class="header">
   <div class="contaiiner">


<div id="test3" dir="rtl">
 <div style="margin-right: 25px;">  SHOP  </div>
 <div>  TELE </div>
</div>
 
   </div>
 </header>

 

 

 
 
 
 
 <div class="menu-container" >
 
 
   <ul class="vertical-nav" style="left:0px;" >
 
     <li  @click="route('خضار وفواكه')">
       <a > 
          <img src="icons/fruits.png" style="filter: drop-shadow(0.2px 1.5px 1px #000000); width: 35%;" />
       </a> 
     </li>
 
     <li  @click="route('مواد غذائية')">
       <a >
         <img src="icons/dairy-products.png" style="filter: drop-shadow(0.2px 1.5px 1px #000000); width: 35%;" />
       </a>
     </li>
     
 
     
     <li @click="route('حلويات')">
       <a >
       <img src="icons/chocolate-bar.png" style="filter: drop-shadow(black 0px 0px 4px); width: 35%;" />
       </a>
     </li>
    
     <div class="log-out" @click="route('index'),makeTX(0)" >
       <a  >
         <img src="icons/file.png" style="width: 25px;filter: brightness(0.7);" />
         </a>
     </div>
 
 
 
   </ul>
 
 
 
 
   <ul style="right:0px;" class="vertical-nav">
    
   <li @click="route('نقرشات')">
       <a >
       <img src="icons/nuts.png" style="filter: drop-shadow(#000000 0px 0px 4px); width: 40%;" />
        </a>
   </li>
 
     <li @click="route('مشروبات')">
       <a >
       <img src="icons/drink.png" style="filter: drop-shadow(#000000 0px 0px 4px); width: 35%;" />
         </a>
     </li>
     
    <li @click="route('تبغيات')">
       <a >
        <img src="icons/cigarette.png"  style="filter: drop-shadow(black 0px 0px 4px); width: 35%;" />
       </a>
    </li>
 
    
     <div class="log-out" @click="route('verify')">
       <a  @click="indexItem='addItem'">
          <img src="icons/3d-lock.png" style="width: 25px;filter: brightness(0.7);" />
       </a>
     </div>
 
   </ul>



    </div>
 
 
    
    ` };
 
 
 
 
 
 
 
 
 
 
 
 
 
     const Inset = { 
        data() {
    
    return data;
              
       
         },
       methods :methodss ,  
       computed: computed,
       
       template: `
 <div   class="inset"  @scroll.once="onScroll(e)" >
   
 <!---------------------------------------header-------------------------------------------------->
 <nav class="header__nav"  id="fade3"  >
  
 <ul class="header__menu"  style="top:1px;" >
 
 
       <li class="header__item"    >
         <div  class="searcher" >
             <input type="text" dir="ltr" name="search" @input="searcher()" class="inputtext"  placeholder="اسم المادة..." v-model="inpSearch" />
            <div   @click="searchBar()" class="search"  id='search' > </div>
         </div>
       </li>   
 
 
       <li class="header__item routeS"    >
         {{myroute}}
       </li>   
 
 
    <li class="header__item"  style="right:5px;">
     <div class="heead "  style="display:block;" >
      <h1 class="header__logo__name" @click="route('')" >
         <i class="fa fa-home" style="text-shadow: white 0px 0px 1px;color: white;text-align: center;font-size: 13px;
        margin: 2px;"><br/>الرئيسية</i>
       </h1>
     </div>
    </li>
 
 
     </ul> 
 
 
 </nav>
 

<div class="panels">
<TransitionGroup name="list" >
 <template v-for="item in data4" :key="item" > 
   
<div class="panel"  >


   <div class="page2">

        <div class="itemFlex editDEL"  v-if='route2=="Admin"'>
             
              <router-link to="/account" >
                <span @click="indexItem=allmydata.indexOf(item),imgId=[item.img1id,item.img2id],route1='addItem'">تعديل</span> 
              </router-link>

              <span @click="delItem=true">حذف</span>
              <div v-if="delItem" class="delItemHolder" > 
                <span @click="delItem=false">لا</span> 
                <span @click="indexItem=allmydata.indexOf(item),imgId=[item.img1id,item.img2id],deleteItem()">حذف</span>
              </div>
         </div>



         
    <div class="holdPlusMinus">    
      <div class="titlee">{{item.title}}</div>
       <div style="color: white;font-size: 10px;width: 100%;height: 100%;padding: 10px 5px 20px 5px;text-align: center;">
                             {{item.post}}
                        <div style="width:100%;height:200px;">
                             {{item.price}} : السعر 
                        </div>
                   </div>
      


         <div style="width:100%;height:40px;">
           
           <div @click="item.count!=0?item.count=item.count*1-1:true" class="plusMinus" style="right: 73.5%;filter: hue-rotate(27deg);">
             <img src="icons/minus.png" title="subtraction icons" style="filter: drop-shadow(0.2px 1.5px 1px black); width: 40%;"/>
           </div>  

           <div  class="plusMinus centerPM">{{item.count}}: العدد</div> 

           <div @click="item.count=item.count*1+1" class="plusMinus" style=" right: 0%;filter: hue-rotate(220deg);">
            <img src="icons/add.png" title="ui icons" style="filter: drop-shadow(0.2px 1.5px 1px black);width: 40%;"/>
           </div>

         </div>
         
    </div>




     <div  class="imgDiv" >

       <i v-if=" item.img1!='' && item.img2!='' " class="fas fa-angle-left down"  @click="imgSlider(document, $event)" style="left:10px;top: 30%;opacity: 0.5;font-size: 31px;position: absolute;color: white;"></i>
       <img v-if=" item.img1!='' "  :src="item.img1"  class="imgg up"  />	
       <img v-if=" item.img2!='' "  :src="item.img2"  class="imgg down" style="display:none;"/>
       <img v-if="item.img1==''&&item.img2==''"  :src="userImg" class="imgg up" />
       <i v-if="item.img1!=''&&item.img2!=''" class="fas fa-angle-right up"  @click="imgSlider(document, $event)"  style="right:10px;top:30%;opacity: 0.5;font-size: 31px;position: absolute;color:white;"></i>
    
     </div>
 


 
  

          
        
   </div>
 
 

 
 <!----------------------------->
 <Transition name="slide-fade">
    <div class="fade before" v-if="item.count!=0" name="fade">
       
          <p >
             <span @click=""   style="display:flex;"> 
                <div style="color: white;padding-left: 9px;font-size: 14px;display:flex;place-items:center;"
                   @click="cartItem.push({title:item.title,count:item.count,price:item.price})">
                  <img src="icons/purchase.png" style=" width: 25%;margin-right:11px;" />إضافة 
                </div>
             </span>
           </p>
 

          <div class="price"> المجموع: {{item.count*item.price}}</div>

 <!-------------------------------------------------------------------->

    </div>  <!------for before----------------->
 </Transition>

   </div>  <!--------for panal---------->
 
  </template>
 </TransitionGroup>
 </div>
 
 


 <!------------------------- end of inset holder--------->
       </div> 
 
    
 
 ` };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 const Socitey = { 
           data() {
    return data;
              
         },
       methods : methodss,    
       computed: computed,
 
       template: ` 
 <div   class="inset" @scroll.once="onScroll(e)">
   
 <!---------------------------------------header-------------------------------------------------->
  <nav class="header__nav"  id="fade3"  style="postion:relative;">
 
     <ul class="header__menu"   >

       <li class="header__item refre"     @click="refresh(),deleteIndex()" v-if="route2=='Admin'" style="z-index:9;">
         <i class="fas fa-sync refresh"  style="color: rgb(255 255 255);font-size: 13px;transition: 2s;text-shadow: rgb(255 36 101) 0px 0px 10px, black 0px 0px 5px;" ></i>
       </li>   


       <li class="header__item"  @click="indexOrderType='index',userOrders=[],siteOrders(indexOrderType)" v-if="indexOrderType=='order'">
         <div class="index" style="margin-left: 55px;">الفهرس</div>
       </li>  
       
       <li class="header__item"  @click="indexOrderType='order',userOrders=[],siteOrders(indexOrderType)" v-if="indexOrderType=='index'">
         <div class="index" style="margin-left: 55px;">الطلبات</div>
       </li>

 
   <li class="header__item"  style="right:5px;">
     <div class="heead "  style="display:block;" >
      <h1 class="header__logo__name"   @click="route('')">
         <i class="fa fa-home" style="text-shadow:white 0px 0px 1px;color:white; text-align: center;font-size: 13px;margin: 2px;">
         <br/>الرئيسية</i>
       </h1>
     </div>
    </li>
 
     </ul> 
 </nav>
 
 <!--------------------------------------------------------------------------------------->
 
 
 <div  style="margin: 120px 0px;" v-if='orderInfoSite==0'>
  <template v-for="item in userOrders" :key="item" > 
     <div style="background: linear-gradient(45deg,rgb(28, 28, 28),rgb(149, 149, 147));border-radius: 1rem;margin-top: 10px;">
       <div >
       <div class="itemFlex" >
                <div class="span2" style="color:white;"><div >{{item.id}}</div> المعرف </div>
          </div>
          <div class="itemFlex" style="color:white;">
                <div class="span2"><div >{{item.date}}</div> التاريخ </div>
                <div class="span2">{{item.place}}</div>
          </div>

          <div class="itemFlex" style="color:#ffcc00;">
                <div class="span2" @click='moveOrder(item.id)' v-if="indexOrderType=='order'">نقل للأرشيف</div>
                <div class="span2" @click='orderPh=item.GPS,orderInfoSite=2'>موقع الطلب</div>
                <div class="span2" @click='order=JSON.parse(item.data),orderInfoSite=1'>الطلب</div>
          </div>
          
     </div>
   </div>
  </template>
  </div>
 

 <!---------------------------------------------->

    <div  style='background: #2f2e2e;height: 90%;margin-top: 20%;width: 100%;border-radius: 1rem;'
          v-if='orderInfoSite==1' >  

          <div class="cartItem" id="cartItem" style='height:90%;margin-top:15%;'>
            <div @click='orderInfoSite=0' class='back'>x</div>  

             <div class="itemFlex" style="color:#87ffed;border-bottom: 1px solid wheat;height:5%;">
                <span >المجموع</span><span >سعر الواحدة</span><span >العدد</span> <span >الطلب</span>
             </div>
             <div v-for="i in order"  class="itemFlex" style="height: auto;">
               <span style="color: gold;">{{i.price*i.count}}</span><span style="color: greenyellow;">{{i.price}}</span> <span >{{i.count}}</span> <span style="color: rgb(255, 201, 209);">{{i.title}}</span>
             </div>
          </div>

  </div>
 
 <!-------------------------------------------->

  <!---------------------------------------------->

    <div  style='' v-if='orderInfoSite==2' >
          <div class="cartItem" id="cartItem" style='height:90%;margin-top:20%;'>
            <div @click='orderInfoSite=0' class='back'>x</div>  

                <div class=''></div>
                <div class=''></div>
                <div class="">{{orderPh}}</div>
            
          </div>

  </div>
 
 <!-------------------------------------------->
 
   <div v-if="run" style="top:0px;width:100vw;height:100vh;position:fixed;background:#0a0a0a8c;z-index:9998;">
    <div class="containerW" >
       <div class="it item1"></div>
       <div class="it item2"></div>
       <div class="it item3"></div>
     </div>
   </div>
 
 </div>
 
 
 
 
 
          `
            }
 
 
 
 
 
 
 
 const index={
  data(){
  return data;
  },

  methods: methodss,
  computed: computed,
       
       template: `
       
       
 <div   class="inset" @scroll.once="onScroll(e)">
   
 <!---------------------------------------header-------------------------------------------------->
  <nav class="header__nav"  id="fade3"  style="postion:relative;">
 
     <ul class="header__menu"  style="justify-content: flex-end;" >
 
   <li class="header__item"  style="right:5px;">
     <div class="heead "  style="display:block;" >
      <h1 class="header__logo__name"   @click="route('')">
         <i class="fa fa-home" style="text-shadow:white 0px 0px 1px;color:white; text-align: center;font-size: 13px;margin: 2px;">
         <br/>الرئيسية</i>
       </h1>
     </div>
    </li>
 
     </ul> 
 </nav>
 
 <!--------------------------------------------------------------------------------------->
 
 
 <div  style="margin: 120px 0px;" v-if="orderInfoSite==0">
  <template v-for="item in dbData" :key="item" > 
     <div style="background: linear-gradient(45deg,rgb(30, 30, 30),rgb(148, 148, 148));border-radius: 1rem;margin-top: 10px;">
       <div >
       <div class="itemFlex" >
                <div class="span2" style="color:white;"><div >{{item.id}}</div> المعرف </div>
          </div>
          <div class="itemFlex" style="color:white;">
                <div class="span2"><div >{{item.date}}</div> التاريخ </div>
                
          </div>

          <div class="itemFlex" style="color:#ffcc00;">
                <div class="span2" @click='order=JSON.parse(item.cartItem),orderInfoSite=1'> الطلب</div>
          </div>
          
     </div>
   </div>
  </template>
  </div>
 
 <!---------------------------------------------->

   <div  style='background: #2f2e2e;height: 90%;margin-top: 20%;width: 100%;border-radius: 1rem;'
          v-if='orderInfoSite==1' >  

          <div class="cartItem" id="cartItem" style='height:90%;margin-top:15%;'>
            <div @click='orderInfoSite=0' class='back'>x</div>  

             <div class="itemFlex" style="color:#87ffed;border-bottom: 1px solid wheat;height:5%;">
                <span >المجموع</span><span >سعر الواحدة</span><span >العدد</span> <span >الطلب</span>
             </div>
             <div v-for="i in order"  class="itemFlex" style="height: auto;">
               <span style="color: gold;">{{i.price*i.count}}</span><span style="color: greenyellow;">{{i.price}}</span> <span >{{i.count}}</span> <span style="color: rgb(255, 201, 209);">{{i.title}}</span>
             </div>
          </div>

  </div>
 
 <!-------------------------------------------->

  

  </div>
 
    
 
 <!-------------------------------------------->
 
 
 </div>
       
       
       `

 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     const Account = { 
           data() {
    return data;
              
         },
       methods : methodss,    
       computed: computed,
       
       template: ` 
      
 
 
      <div   >
 
   <div v-if="run" style="width:100vw;height:100vh;position:fixed;background:#0a0a0a8c;z-index:9998;
        display: flex;justify-content: center;align-items: center;">
    <div class="containerW" >
       <div class="it item1"></div>
       <div class="it item2"></div>
       <div class="it item3"></div>
     </div>
   </div>
 
   <div ref="oo" class="oo"  style="z-index:9999;width:100%;height:100%;" @click="x(),route(''),bac=1,run=false" >
     <div  style="justify-content: center;align-items: center;flex-direction: column;">
      <h1   class="oh"  > اضغط للرجوع</h1>
      <h5 class="display_error">تمت العملية بنجاح </h5>
     </div>
   </div>
 
       <div class="navbar" >
    




 
  <nav class="header__nav"  id="fade3"  style="position:relative;" v-if="route2=='Admin'">

    <ul class="header__menu"   >


 
         <li class="header__item"  @click="siteOrders(indexOrderType)">
           <router-link to="/socitey" >
             <div class="index">   المجتمع  </div>
           </router-link>
         </li>

          <li class="header__item" v-if="indexItem=='addItem'" >
            <div class="index" @click="route1='addItem'" > إضافة عنصر </div>
         </li>

           <li class="header__item"  >
            <div class="index"   @click="route1='addUser'" style="margin-right: 10px;"> إنشاء حساب </div>
         </li>
  
     </ul> 
 </nav>




 
 
  <div ref="xx" class="xx"   >
   <h1 @click="x()" class="xh" > x </h1>
   <h5 class="display_error">قم بتعبئة كافة البيانات ,ليتم الإرسال</h5>
 </div>
 
 <div ref="xxx" class="xx" >
   <h1 @click="x()" class="xh" > x </h1>
   <h5 class="display_error">عذرا لا يوجد حساب يطابق هذه المعلومات</h5>
 </div>
 
 <div ref="xxxx" class="xx" >
   <h1 @click="x()" class="xh" > x </h1>
   <h5 class="display_error"> يمكن تحميل صورتان فقط </h5>
 </div>
 
 
 
 
 
 
     
   <div  v-if="route2=='verify'" >




    <div class="main" v-if="route1=='verify'">
     <div class="commenter" style="background: #00000066;top:200px;" >
         <div  class="form-container">
         
            <div class="button">
                 <button class="login"   @click="route1='تسجيل'"
                > تسجيل دخول </button>
             </div>
 
 
         </div>
     </div>
   </div>
 
 
 
 
   <div  v-if="route1=='تسجيل'" >
     
 
   <div      style="padding: 10px;" >
 
    <div class="container">
         <h2 class="title1">تسجيل الدخول</h2>
         <div  class="form-container">
 
             <div class="input-box password">
                 <input dir="rtl" type="text"   id="phone" v-model="newPhone"  placeholder="رقم الجوال" />
           </div>
           <div class="input-box password">
                 <input  dir="rtl" type="text"   id="pass" v-model="newPass"  placeholder="كلمة السر" />
           </div>
 
           <div @click="route1='forget'" class="forgetPass"
           > هل نسيت كلمة المرور </div>
 
             <div class="button"  >
                 <button class="login" @click="getmyData()">تحقق</button>
             </div>
             
 
             <div class="button" >
                 <button class="login" @click="route1='verify'"
                 >رجوع</button>
             </div>
 
         </div>
       </div>
     </div>
   </div>
 
 
 
 
 
  <div  v-if="route1=='forget'" >
     
   <div      style="padding: 10px;" >
 
    <div class="container">
         <h2 class="title1" style="text-align: center;">
          في حال نسيان كلمة المرور <br>
          أرسل لنا رسالة واتساب من رقم مالك الحساب حصراً <br> 
          ويتم الرد بكلمة السر حال تحقق البوت من صحة البيانات  
         </h2>
 
         <div  class="form-container">
 
             <div class="button"  >
                    <a class="login" :href="wts" style=" width: auto;">
                    <i class="fa fa-phone" style="font-size:15px;color:green;">واتساب 
                      +963 981715375
                    </i> 
                    </a>
             </div>
             
             <div class="button" >
                 <button class="login" @click="route1='verify'"
                 >رجوع</button>
             </div>
 
         </div>
       </div>
    </div>
   </div>
 
 
 
 </div>
 
  
 
 
 
 
 
 
 <div   v-if="route2=='Admin'" >
     




<div class="container"   v-if="route1=='addUser'">
         <h2 >إنشاء حساب</h2>
     
       <div  class="form-container">
 
           <div class="input-box password">
             <input  dir="rtl" type="text"  id="name" name="Location"  placeholder="الإسم" />   
           </div>
           <div class="input-box password">
             <input dir="rtl" type="text"   id="phone" name="Location"  placeholder="رقم الجوال" />  
           </div>
           <div class="input-box password">
             <input  dir="rtl" type="text"   id="pass" name="Location"  placeholder="كلمة السر" />
           </div>
           <div class="input-box password">
             <input  dir="rtl" type="text"   id="place" name="Location"  placeholder="المكان" />
           </div>
          
   
             <div class="button" style="bottom:20px;"  @click="addUser()">
                 <button class="login" >إرسال</button>
             </div>

 
     </div>
</div>





 <div class="container"   v-if='route1=="addItem"'>
   
     <div action="#" class="form-container">
         
         
 <h2  class="title2"> أهلاَ بك <br/>Mohammed   </h2>
    
     <div class="input-box password">
         <input  dir="rtl" type="text" v-model="title"  placeholder="العنوان باختصار" />
     </div>
 
     <div class="input-box email">
        <textarea type="text" dir="rtl" class="input" v-model="post" required placeholder="كتابة البوست" rows="3" cols="30">
        </textarea>
     </div>
    
    <div class="input-box password">
         <input  dir="rtl" type="text" v-model="price"  placeholder=" .. السعر" />
    </div>
 
    <div class="select" style="width:100%" >
      <select @change="onoff()" v-model="world" class="world" dir="rtl">
       <option value="">اختر مكان الظهور</option>
       <option >خضار وفواكه</option>
       <option >مواد غذائية</option>
       <option >نقرشات</option>
       <option >حلويات</option>
       <option >مشروبات</option>
       <option >تبغيات</option>
      </select>
    </div>
  
  
  
 
 <div class="logi">
 
   <label  class="label5" @click.once="compressor()" > 
    <div v-if="files.length==0"> اختر صورة  </div>
    <div v-if="files.length>=1"> اختر صورة ثانية </div>
   <input   name="file"  id="files" style="width:0px;" type="file"  multiple  />
   </label>
 
 </div>
 
 <div class="theImgs" >
   <div id="wrapper"></div>
   <div  @click="imgR()" >إلغاء</div>
 </div>
 
 
 



 

 
 
 
             <div class="button" style="margin-bottom:75px;">
                 <button class="login" @click="api()">تأكيد العملية</button>
             </div>
             
             <div >


 

 
         </div>
      </div>
   </div>
 
 
    
 
 </div>
 </div>
        
 </div>
 
 
 ` };
 
 
 
 
 
 
 
 
     const routes = [
         { path: "/", component: Home },
         { path: "/inset", component: Inset },
         { path: "/account", component: Account },
         { path: "/socitey", component: Socitey },
         { path: "/index", component: index },
     ];
 
     const router = VueRouter.createRouter({
           history: VueRouter.createWebHashHistory(),
            routes
     })
 
     app.use(router)
     app.mount('#app')
 
 
 








   



















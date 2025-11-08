

export default{
 
    
   Index:{

    data(){
    return data;
    },
  
    methods: methodss,
    computed: computed,
         
         template: `
         
         
   <div class="inset"  style='display:flex;justify-content: center;'>
  
   <!---------------------------------------header-------------------------------------------------->
    <nav class="nav-mune"  id="fade3"  style="postion:relative;">
   
       <ul class="header__menu"  style="justify-content: flex-end;" >
   
       <li class="header__item fatora"  >
        <span @click="accDB=false" :style="!accDB?'color:#69f8ed;':'' "> سجل الفواتير </span> | <span :style="accDB?'color:#69f8ed;':'' " @click="accDB=true"> حسابي </span>
      </li>
       
      <li class="header__item"  v-if="route2=='Admin'&&!editBtn" @click="editBtn=!editBtn" style='color: #fbfbfb;right: 20%;'>
            وضع التعديل
      </li>
      <li class="header__item"  v-if="route2=='Admin'&&editBtn" @click="editBtn=!editBtn" style='color: #fbfbfb;right: 20%;'>
           وضع المستخدم
      </li>
  
     <li class="header__item"  style="right:5px;">
       <div class="heead "  style="display:block;" >
        <h1 class="header__logo__name"   @click="$router.push({ name : 'home' })">
           
           <svg width="33" height="33" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <!-- Roof -->
              <polygon points="6,16 16,6 26,16" fill="#fde068"/>
              <!-- House body -->
              <rect x="9" y="15" width="14" height="8" fill="#fde068"/>
              <!-- Door -->
              <rect x="14" y="19" width="4" height="5" fill="#232323"/>
              <!-- Window -->
              <rect x="11" y="18" width="3" height="3" fill="#fde068"/>
              <rect x="18" y="18" width="3" height="3" fill="#fde068"/>
            </svg>


         </h1>
       </div>
      </li>
   
       </ul> 
   </nav>
  
  
  
 <!--------------------------------------for indexed db orders------------------------------------------->
  <div v-if='!accDB' style='width: 100%; height: 100%;'>
   
    <div  style="margin: 120px 0px;" v-if="orderInfoSite==0">
    <template v-for="item in dbData" :key="item" > 
       <div style="background: linear-gradient(151deg, #929292, #131313);;border-radius: 1rem;margin-top: 10px;">
         <div >
         <div class="itemFlex" >
                  <div class="span2" style="color:white;"><div >{{item.id}}</div> المعرف </div>
            </div>
            <div class="itemFlex" style="color:white;">
                  <div class="span2"><div >{{item.date}}</div> التاريخ </div>
                  
            </div>
  
            <div class="itemFlex" >
              <div class="span2" @click='order=JSON.parse(item.cartItem),orderInfoSite=1' style='background: linear-gradient(0deg, black, #78735a);color: #ffe888;box-shadow: none;'>
                   الطلب
              </div>
            </div>
            
       </div>
     </div>
    </template>
    </div>
   
   <!---------------------------------------------->
  
     <div  style='background: #2f2e2e;height: 90%;margin-top: 20%;width: 100%;border-radius: 1rem;'
            v-if='orderInfoSite==1' >  
  
            <div class="cartItem" id="cartItem" style='height:100%;margin-top:5%;display: flex;'>
              <div @click='orderInfoSite=0' class='back'>x</div>  
  
               <div class="itemFlex" style="color:#87ffed;border-bottom: 1px solid wheat;height:5%;">
                  <span >المجموع</span><span >سعر الواحدة</span><span >العدد</span> <span >الطلب</span>
               </div>
               <div v-for="i in order"  class="itemFlex" style="height: auto;">
                 <span style="color: gold;">{{i.price*i.count}}</span><span style="color: greenyellow;">{{i.price}}</span> <span >{{i.count}}</span> <span style="color: rgb(255, 201, 209);">{{i.title}}</span>
               </div>
            </div>
  
    </div>
   
   <!-------------bottom for get indexed order------------------------------->
  </div> 
    
  
  
   

   <!----------------------------------------for iname ipass-------------------------------------->
  
    <div v-if='accDB' style="z-index:999;margin-top:20vh;width: 95vw;height: 70vh;position: relative;transition: 2s;display: flex; flex-direction: column;align-items: center;justify-content: start;    border-radius: 2rem;
                 background: linear-gradient(-11deg, rgb(112 81 0), rgb(108 108 108));">
        <div class="test3" style="letter-spacing: 5px;font-size: 25px;color:transparent;height: 20%;dir:rtl;font-weight: 200;" >  أهلاً بك &nbsp; {{iname}} </div>
  
        <div class="itemFlex" style="border-radius: 5rem;margin: 10px 0px;height: 15%;">
           <input class="input" type="text" rows="1" dir="rtl" placeholder="الاسم" v-model="iname" />
        </div>
        <div class="itemFlex" style="border-radius: 5rem;margin: 10px 0px;height: 15%;">
          <input class="input" type="text" rows="1" dir="rtl" placeholder="رقم الجوال" v-model="iphone" />
        </div>
      

        <div  class="redButton" @click="editLog()">
             حفظ   
        </div>
  

    </div>

      
  
   </div>
   
         
         
         `
  
   }
   
   

}
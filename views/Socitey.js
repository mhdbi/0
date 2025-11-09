

export default{

     Socitey :{ 

        data() {
 return data;
           
      },
    methods : methodss,    
    computed: computed,

    template: ` 
<div   class="inset" >

<!---------------------------------------header-------------------------------------------------->
<nav class="nav-mune"  id="fade3"  style="postion:relative;">

  <ul class="header__menu"   >

    <li class="header__item "     @click="siteOrders()"  style="z-index:9;">
       <div class="index" style="margin-left: 5px;">تحديث</div>
    </li>   

    <li class="header__item"  @click="indexOrderType='index',userOrders=[],siteOrders()" v-if="indexOrderType=='order'">
      <div class="index" style="margin-left: -25vw;">الفهرس</div>
    </li>  
    
    <li class="header__item"  @click="indexOrderType='order',userOrders=[],siteOrders()" v-if="indexOrderType=='index'">
      <div class="index" style="margin-left: -25vw;">الطلبات</div>
    </li>


    <li class="header__item"  style="right:5px;">
        <div class="heead "  style="display:block;" >
        <h1 class="header__logo__name" @click="$router.push({ name : 'home' })" >
            
              <svg width="33" height="33" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <!-- Roof -->
                <polygon points="6,16 16,6 26,16" fill="skyblue"/>
                <!-- House body -->
                <rect x="9" y="15" width="14" height="8" fill="skyblue"/>
                <!-- Door -->
                <rect x="14" y="19" width="4" height="5" fill="#232323"/>
                <!-- Window -->
                <rect x="11" y="18" width="3" height="3" fill="skyblue"/>
                <rect x="18" y="18" width="3" height="3" fill="skyblue"/>
              </svg>

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



}
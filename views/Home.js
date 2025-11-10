//export var x=5;  // return module without need to .default
    
    export default {
         Home : {
            data() {
        return data;
                  
             },
           methods : methodss,
          
              
           computed: computed, 
             mounted() {       
               this.recognition();
               this.notifINIT();
               
             },
            beforeDestroy() {
             window.removeEventListener('click', this.recog.start());
             },
            template:
            `
 

<header class="header" >
  <div class="contaiiner">

    <div class='downAndai'> 

      <div @click="route(),indexItem='addItem'">
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.22 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" fill="#ffffff"/>
          <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" fill="#06a185"/>
        </svg>
      </div>

      <div @click="downLTips=!downLTips">
         <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 4V16M12 16L8 12M12 16L16 12M4 20H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </div>

    </div>

    <!- ----------------- ------------>
   <div class="test3" dir="rtl">
     <div >  Tele shop  </div>
   </div>
  <!- ----------------- ------------>


   </div>
 </header>


<!-- for open page on ---- -->

<div class="openTop">
</div>


<!-- for open page on ---- -->







<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" :style='star' class="star">
  <!-- Define reusable shapes -->
  <defs>
    <!-- A symbol for a 6-pointed star -->
    <symbol id="six-point-star" viewBox="0 0 100 100">
      <polygon points="50,0 60,35 95,35 65,60 75,95 50,70 25,95 35,60 5,35 40,35" />
    </symbol>
  </defs>
  <!-- Background color -->
  <rect width="100%" height="100%" fill="#23232300" />
  
  <!-- Stars -->
  <g fill="black">
    <use href="#six-point-star" x="50" y="50" width="10" height="10" />
    <use href="#six-point-star" x="150" y="100" width="20" height="20" />
    <use href="#six-point-star" x="250" y="70" width="25" height="25" />
    <use href="#six-point-star" x="350" y="150" width="25" height="25" />
    <use href="#six-point-star" x="450" y="10" width="20" height="20" />
    <use href="#six-point-star" x="550" y="80" width="25" height="25" />
    <use href="#six-point-star" x="650" y="120" width="15" height="15" />
    <use href="#six-point-star" x="750" y="60" width="20" height="20" />
    <use href="#six-point-star" x="850" y="100" width="25" height="25" />
    <use href="#six-point-star" x="900" y="30" width="20" height="20" />
    <use href="#six-point-star" x="100" y="200" width="25" height="25" />
    <use href="#six-point-star" x="200" y="250" width="30" height="30" />
    <use href="#six-point-star" x="300" y="220" width="20" height="20" />
    <use href="#six-point-star" x="400" y="280" width="20" height="20" />
    <use href="#six-point-star" x="500" y="200" width="40" height="40" />
    <use href="#six-point-star" x="600" y="260" width="20" height="20" />
    <use href="#six-point-star" x="700" y="300" width="25" height="25" />
    <use href="#six-point-star" x="800" y="240" width="20" height="20" />
    <use href="#six-point-star" x="900" y="280" width="25" height="25" />
    <use href="#six-point-star" x="950" y="220" width="15" height="15" />

    <use href="#six-point-star" x="50"  y="350" width="40" height="40" />
    <use href="#six-point-star" x="150" y="400" width="20" height="20" />
    <use href="#six-point-star" x="250" y="370" width="25" height="25" />
    <use href="#six-point-star" x="350" y="450" width="5" height="5" />
    <use href="#six-point-star" x="450" y="310" width="20" height="20" />
    <use href="#six-point-star" x="550" y="380" width="25" height="25" />
    <use href="#six-point-star" x="650" y="420" width="30" height="30" />
    <use href="#six-point-star" x="750" y="360" width="20" height="20" />
    <use href="#six-point-star" x="850" y="400" width="25" height="25" />
    <use href="#six-point-star" x="900" y="330" width="20" height="20" />
    <use href="#six-point-star" x="100" y="500" width="25" height="25" />
    <use href="#six-point-star" x="200" y="550" width="30" height="30" />
    <use href="#six-point-star" x="300" y="520" width="20" height="20" />
    <use href="#six-point-star" x="400" y="580" width="30" height="30" />
    <use href="#six-point-star" x="500" y="500" width="20" height="20" />
    <use href="#six-point-star" x="600" y="560" width="25" height="25" />
    <use href="#six-point-star" x="700" y="600" width="10" height="10" />
    <use href="#six-point-star" x="800" y="540" width="20" height="20" />
    <use href="#six-point-star" x="900" y="580" width="25" height="25" />
    <use href="#six-point-star" x="950" y="520" width="20" height="20" />


  </g>
  

</svg>




 
 
 
 <div class="menu-container" >
 
 
   <ul class="vertical-nav" style="left:0px;" >
  
     <li  @click="$router.push({ name : 'inset', params :{ inset : 'خضار وفواكه' } })" >
       <a style='animation: 6s lightCircle ease-in 0s;'>  </a>
          <img src="puplic/icons/fruits.jpg"  class='imgHome' />
     </li>
 
     <li  @click="$router.push({name : 'inset',params:{inset:'مواد غذائية'}})" >
       <a style='animation: 15s lightCircle ease-in 0s;'> </a>
         <img src="puplic/icons/dairy-products.jpg"  class='imgHome' />
     </li>
     
 
     
     <li @click="$router.push({name : 'inset',params:{inset:'حلويات'}})" >
       <a style='animation: 6s lightCircle ease-in 0s;'> </a>
       <img src="puplic/icons/chocolate.jpg"  class='imgHome' />
     </li>
    
     <div class="log-out" @click="$router.push({name : 'index'}),makeTX(0)" >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 22V20C20 18.9391 19.5786 17.9217 18.8284 17.1716C18.0783 16.4214 17.0609 16 16 16H8C6.93913 16 5.92172 16.4214 5.17157 17.1716C4.42143 17.9217 4 18.9391 4 20V22" stroke="skyblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
     </div>
 
 
 
   </ul>
 
 
 
 
   <ul style="right:0px;" class="vertical-nav">
     <li @click="$router.push({name : 'inset',params:{inset:'نقرشات'}})" >
      <a style='animation: 20s lightCircle ease-in 0s forwards;'> </a>
       <img src="puplic/icons/nuts.jpg"  class='imgHome' />
     </li>

     <li @click="$router.push({name : 'inset',params:{inset:'مشروبات'}})" >
       <a style='animation: 5s lightCircle ease-in 0s;'>  </a>
       <img src="puplic/icons/drink.jpg"  class='imgHome' />  
     </li>
     
    <li @click="$router.push({name : 'inset',params:{inset:'تبغيات'}})"  >
       <a style='animation: 11s lightCircle ease-in 0s;'>  </a>
        <img src="puplic/icons/cigarette.jpg"   class='imgHome'/>      
    </li>
 
    
     <div class="log-out" >
          <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="reco">
           <path d="M12 14C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11C9 12.6569 10.3431 14 12 14Z" fill="#fefefeff"/>
           <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11" stroke="skyblue" stroke-width="2"/>
           <path d="M12 18V21" stroke="#ffffff" stroke-width="2"/>
           <path d="M9 21H15" stroke="#ffffff" stroke-width="2"/>
         </svg>
         
           <div class='pauseR'>
             <div style='width:16px;height:14px;background:red;border-radius:0.3rem;box-shadow: 0px 0px 12px red;margin-right: 10px;'></div>
               البحث الصوتي
           </div>
     </div>
 
   </ul>



    </div>
 


    <!-- for download ----  ------ -->
<transition-group name="slide-fade">

      <div class="instruction" v-if="downLTips"  :class="{ 'slide-fade-enter-from' : downLTips}"> 

          <div style="top:-5vh;width: 85vw;height: 85vh;position: relative;transition: 2s;display: flex; flex-direction: column;align-items: center;justify-content: start;    border-radius: 2rem; background: linear-gradient(75deg, black, rgb(81, 106, 105));box-shadow: #000000c2 -3.5vw 2.5vh 18px">
               
           <div class="plase" >
              <div style="display: flex;justify-content: center;align-items: center;width: 100%;">
              Teleshop   لتحميل تطبيق  
              </div>
            </div>
              <div class="itemFlex" style='flex-direction: column;align-items: center;'> 
                <div class="test5" > أولاً :</div>
                <img style='max-width: 100%;height: 16vh;border-radius: 0.5rem;width: 300px;'  src='puplic/icons/1.jpg' @error='er($event)' />
              </div>

              <div class="itemFlex" style='flex-direction: column;align-items: center;'> 
                <div class="test5" >  ثانياُ :</div>
                <img style='width: 95%;border-radius: 0.5rem;'    src='puplic/icons/2.jpg' @error='er($event)' />
              </div>
                  
                    <div  class="redButton" @click="downLTips=!downLTips">
                          حسناً   
                    </div> 
              </div>            
       </div>

</transition-group>

 <!-- for download ----  ------ -->

 <!-- for notification ----  ------ -->

 <div style="z-index: 901;width: 100vw;height: 100vh;position: absolute;background: #0c0b00bd;flex-direction: column;
              display: none;justify-content: center;align-items: center;"  id="notifyBtn" > 


  <div style="width: 95vw;height: 50vh;position: relative;transition: 2s;display: flex; flex-direction: column;align-items: center;justify-content: start;    border-radius: 2rem;
               background: linear-gradient(311deg, black, #222222);">
            <div class="test3" style="font-size: 40px;color:transparent;height: 30%;">Teleshop</div>

                 <div class="plase" :class="{ shake2 : user }">
                    <p style="display: flex;justify-content: center;align-items: center;width: 100%;">
                       من فضلك : يجب تفعيل الإشعارات لتلقي طلبات المستخدمين
                    </p>
                 </div>
    
            <div  class="redButton" >
                اضغط في أي مكان للتفعيل    
            </div>
   </div>

</div>

 <!-- for notifacation ----  ------ -->





    ` ,
    }

}








// <header class="header" >
//   <div class="contaiiner">

//     <div class='downAndai' style="width: 100%;padding: 10px;height: 35%;justify-content: space-around;flex-direction: row;letter-spacing: 2px;font-size: 1rem;
//     background: conic-gradient(from 220.5deg at 49.5%, #00000000 13deg, #00000000 100.2deg, #d1d1d170 50deg, #349d8c5c 100deg);
//     position: absolute;right: 0px; color: #d0ce9d;top: 0px;display: flex;align-items: center;"> 

//       <div> أحذية </div>
//       <div> إكسسوارات </div>


//     </div>

//    <div class="test3" dir="rtl" style='    font-size: 23px;top:22px;'>
//      <div >  Aqua gifts </div>

//    </div>

//    </div>
//  </header>


// <!-- for open page on ---- -->

// <div class="openTop">
//   <div class='between'></div>
// </div>


// <div class="openBottom">
//   <div class='between'></div>
// </div>

// <!-- for open page on ---- -->


 
 
 
//  <div class="menu-container" >
 
 
//    <ul class="vertical-nav" style="left:0px;" >
  
//      <li  @click="$router.push({ name : 'inset', params :{ inset : 'خضار وفواكه' } })" :style='backGround' >
//        <a style='animation: 6s lightCircle ease-in 0s;'>  </a>
//           <img src="icons/fruits.jpg"  class='imgHome' />
//           <div class='imgSh'></div>
//      </li>
 
//      <li  @click="$router.push({name : 'inset',params:{inset:'مواد غذائية'}})" :style='backGround'>
//        <a style='animation: 15s lightCircle ease-in 0s;'> </a>
//          <img src="icons/dairy-products.jpg"  class='imgHome' />
//          <div class='imgSh'>hgfhgf</div>
//      </li>
     
 
     
//      <li @click="$router.push({name : 'inset',params:{inset:'حلويات'}})" :style='backGround'>
//        <a style='animation: 6s lightCircle ease-in 0s;'> </a>
//        <img src="icons/chocolate.jpg"  class='imgHome' />
//        <div class='imgSh'></div>
//      </li>
    
//      <div class="log-out" @click="$router.push({name : 'index'}),makeTX(0)" >
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="skyblue" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//         <path d="M20 22V20C20 18.9391 19.5786 17.9217 18.8284 17.1716C18.0783 16.4214 17.0609 16 16 16H8C6.93913 16 5.92172 16.4214 5.17157 17.1716C4.42143 17.9217 4 18.9391 4 20V22" stroke="skyblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//       </svg>
//      </div>
 
 
 
//    </ul>
 
 
 
 
//    <ul style="right:0px;" class="vertical-nav">
//      <li @click="$router.push({name : 'inset',params:{inset:'نقرشات'}})" :style='backGround'>
//       <a style='animation: 8s lightCircle ease-in 0s;'> </a>
//        <img src="icons/nuts.jpg"  class='imgHome' />
//        <div class='imgSh'></div>
//      </li>

//      <li @click="$router.push({name : 'inset',params:{inset:'مشروبات'}})" :style='backGround'>
//        <a style='animation: 5s lightCircle ease-in 0s;'>  </a>
//        <img src="icons/drink.jpg"  class='imgHome' />
//        <div class='imgSh'></div>   
//      </li>
     
//     <li @click="$router.push({name : 'inset',params:{inset:'تبغيات'}})" :style='backGround'>
//        <a style='animation: 11s lightCircle ease-in 0s;'>  </a>
//         <img src="icons/cigarette.jpg"   class='imgHome'/>
//         <div class='imgSh'></div>
       
//     </li>
 
    
//      <div class="log-out" >
//           <div @click="route(),indexItem='addItem'">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.22 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" fill="skyblue"/>
//           <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" fill="#06a185"/>
//         </svg>
//       </div>
//      </div>
 
//    </ul>



//     </div>



















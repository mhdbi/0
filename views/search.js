

export default{
  
  
     Search : { 
        
        data() {
    
    return data;
              
       
         },
       methods :methodss ,  
       computed: computed,
       mounted() {       
               this.recognition();

             },
            beforeDestroy() {
             window.removeEventListener('click', this.recog.start());
             },
       template: `
 <div   class="inset" >
   
 <!---------------------------------------header-------------------------------------------------->
 <nav class="nav-mune"  id="fade3"  >
  
 <ul class="header__menu"  style="top:0px;" >
 
 
    <li class="header__item"  style="display:flex;width:40%;">
      <h1 style='color: #f1edb5;display:flex;font-size: 0.9rem;align-items: center;justify-content: center;' @click="$router.push({ name : 'home' })" >
             خروج
        </h1>
     </li>

       <li class="test3" id='test4'  style='letter-spacing: 1.3vw;font-size: 22px;-webkit-text-stroke-width: 1.5px;color: #8b8b8b;' >
         <img  style='filter: drop-shadow(0px 0px 3px yellow);width: 6vw;min-width: 4vh;max-width: 6vh;' src='icons/robot.png' />
       </li>   
 
 
    <li class="header__item"  style="display:flex;width:40%;">

       
        <h1 class=" reco" style='color: #f1edb5;display:flex;font-size: 0.9rem;align-items: center;justify-content: center;' >
             متابعة البحث
        </h1>
    
           <div class='pauseR'>
             <div style='width:16px;height:14px;background:red;border-radius:0.3rem;box-shadow: 0px 0px 12px red;margin-right: 10px;'></div>
             إيقاف 
           </div>

     </li>

 
   </ul> 
 
 </nav>
 




 

<div class="panels">
<TransitionGroup name="list" >
 <template v-for="item , y in searchItems" :key="y" > 
   
<div class="panel"  >


   <div class="page2">


         
      
          <div class="titlee">{{item.title}}</div>

          <div class="postText">
                 <div> {{item.post}}   </div>

                       <div  class='postSame'>
                        <template v-for='s in item.same' >
                            <div @click='mydata.splice(y, 0, s.it)'  > {{s.name}} </div>
                        </template>
                      </div>  
          </div>
      


        <div class="holderCount">

             
           <div class="centerPM"> المجموع: {{item.count*item.price}}</div>


             <div  class="centerPM" style="border:none;" >{{item.count}}: العدد</div> 
             
             <div class="centerPM">
                      {{item.price}} : السعر 
             </div>

         </div>







      <div @click="item.count!=0?item.count=item.count*1-1:true,btnF($event),addORdel('-',item)" class="plusMinus minus" style="left: 30px;">
         -
      </div>  

      <div @click="xyPosition($event),item.count=item.count*1+1,btnF($event),addORdel('+',item)" class="plusMinus plus" style=" right:30px;">
         +
      </div>






     <div  class="imgDiv" >
       <i v-if=" item.img1!='' && item.img2!='' " class="fas fa-angle-left down"   style="left:10px;top: 30%;opacity: 0.5;font-size: 31px;position: absolute;color: white;"></i>
       <img v-if=" item.img1!='' "  :src="item.img1"  class="imgg up"  />	
       <img v-if=" item.img2!='' "  :src="item.img2"  class="imgg down" style="display:none;"/>
       <img v-if="item.img1==''&&item.img2==''"  :src="userImg" class="imgg up" />
       <i v-if="item.img1!=''&&item.img2!=''" class="fas fa-angle-right up"    style="right:10px;top:30%;opacity: 0.5;font-size: 31px;position: absolute;color:white;"></i>
    
     </div>
 


 
  

          
        
   </div>
 
 

 
 

   </div>  <!--------for panal---------->
 
  </template>
 </TransitionGroup>
 </div>
 
 


 <!------------------------- end of inset holder--------->
       </div> 
 
    
 
 ` }
 
 
 

}
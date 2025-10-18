

export default{
  
  
     Inset : { 
        
        data() {
    
    return data;
              
       
         },
       methods :methodss ,  
       computed: computed,
       mounted(){
        this.data();
      },

       template: `
 <div   class="inset" >
   
 <!---------------------------------------header-------------------------------------------------->
 <nav class="nav-mune"  id="fade3"  >
  
 <ul class="header__menu"  style="top:0px;" >
 
 
       <li class="header__item"    >
         <div  class="searcher" >
             <input type="text" dir="ltr" name="search" @input="searcher()" class="inputtext"  placeholder="اسم المادة..." v-model="inpSearch" />
            <div   @click="searchBar($event)" class="search"  id='search' > </div>
         </div>
       </li>   
 
 
       <li class="test3" id='test4'  style='letter-spacing: 1.3vw;font-size: 22px;-webkit-text-stroke-width: 1.5px;color: #8b8b8b;' >
         {{$route.params.inset}}
       </li>   
 
 
    <li class="header__item"  style="right:5px;">
     <div class="heead "  style="display:block;" >
      <h1 class="header__logo__name" @click="$router.push({ name : 'home' })" >
         
            <svg width="33" height="33" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <!-- Roof -->
              <polygon points="6,16 16,6 26,16" fill="#FFC107"/>
              <!-- House body -->
              <rect x="9" y="15" width="14" height="8" fill="#FFC107"/>
              <!-- Door -->
              <rect x="14" y="19" width="4" height="5" fill="#232323"/>
              <!-- Window -->
              <rect x="11" y="18" width="3" height="3" fill="#FFB300"/>
              <rect x="18" y="18" width="3" height="3" fill="#FFB300"/>
            </svg>

       </h1>
     </div>
    </li>
 
 
     </ul> 
 
 
 </nav>
 

<div class="panels">
<TransitionGroup name="list" >
 <template v-for="item , y in data4" :key="y" > 
   
<div class="panel"  >


   <div class="page2">

        <div class="itemFlex editDEL"  v-if='editBtn'>
             
              <router-link to="/account" >
                <span @click="indexItem=allmydata.indexOf(item),imgId=[item.img1id,item.img2id],route1='addItem'">تعديل</span> 
              </router-link>

              <span @click="delItem=true">حذف</span>
              <div v-if="delItem" class="delItemHolder" > 
                <span @click="delItem=false">لا</span> 
                <span @click="indexItem=allmydata.indexOf(item),imgId=[item.img1id,item.img2id],deleteItem()">حذف</span>
              </div>
         </div>



         
      
          <div class="titlee" >{{item.title}}</div>

          <div class="postText">
                 <div> {{item.post}}   </div>

                       <div  class='postSame'>
                        <template v-for='s in item.hash' >
                            <div @click='mydata.splice(y, 1, s.item)'  > {{s.name}} </div>
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
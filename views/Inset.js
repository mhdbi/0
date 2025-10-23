

export default{
  
  
     Inset : { 
        
        data() {
    
    return data;
              
       
         },
        methods : {...methodss, 

            er:function(e){
              var n=navigator.onLine;
              if(n){
                e.currentTarget.style.display='flex';
                e.currentTarget.src=e.currentTarget.src;
               }else{
                e.currentTarget.style.display='none';
                e.currentTarget.src=e.currentTarget.src;
              
               }
             },
            dimintion:function(e){
                  var img= e.currentTarget;
                  var w=img.offsetWidth  ,  h=img.offsetHeight , p=img.parentNode.offsetWidth;
                  // we take h/w  to git the aspect ratio from the width
                  img.style.width= p+'px';
                  img.style.height= p*h/w+'px';

             },


           }, 

       computed: computed,
       mounted(){
        this.data();
        this.onScroll();
   
      },
       beforeDestroy() {
             var inset = document.getElementsByClassName("inset")[0];
             inset.removeEventListener('scrooll', this.recog.start());
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


             <div  class="centerPM" style='border:none;color: #affaffff;'>{{item.count}}: العدد</div> 
             
             <div class="centerPM" >
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

      <img v-if=" item.img1id!='' "  :src='item.img1id'   class="imgg up" @load='dimintion($event)' @error='er($event)' alt='no' />	

     </div>
 


 
  

          
        
   </div>
 
 

 
 

   </div>  <!--------for panal---------->
 
  </template>
 </TransitionGroup>
 </div>
 
 


 <!------------------------- end of inset holder--------->
       </div> 
 
    
 
 ` }
 
 
 
// for multiple imges
///////////////////////////////////////////////
    // <div  class="imgDiv" >
     
    //    <i v-if=" item.img1!='' && item.img2!='' " class="fas fa-angle-left down"   style="left:10px;top: 30%;opacity: 0.5;font-size: 31px;position: absolute;color: white;"></i>
    //    <img v-if=" item.img1!='' "  :src="item.img1"  class="imgg up" @error='er($event)' alt='no' />	
    //    <img v-if=" item.img2!='' "  :src="item.img2"  class="imgg down" style="display:none;"/>
    //   <i v-if="item.img1!=''&&item.img2!=''" class="fas fa-angle-right up"    style="right:10px;top:30%;opacity: 0.5;font-size: 31px;position: absolute;color:white;"></i>
    
    //  </div>
/////////////////////////////////////////////////




}
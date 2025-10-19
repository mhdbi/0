

export default{

    
     Account : { 
        
        data() {
 return data;
           
      },
    methods : methodss,    
    computed: {
  
    
  },
 
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

<div ref="oo" class="oo"  style="z-index:9999;width:100%;height:100%;" @click="x(),$router.push({ name : 'home' }),bac=1,run=false" >
  <div  style="justify-content: center;align-items: center;flex-direction: column;">
   <h1   class="oh"  > اضغط للرجوع</h1>
   <h5 class="display_error">تمت العملية بنجاح </h5>
  </div>
</div>

 

<div class="navbar hexagon" >
 





<nav class="nav-mune"  id="fade3"   v-if="route2=='Admin'">

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






<div id="xx" class="xx"   >
<h1 @click="x()" class="callx2" > x </h1>
<h5 class="display_error">قم بتعبئة كافة البيانات ,ليتم الإرسال</h5>
</div>

<div id="xxx" class="xx" >
<h1 @click="x()" class="callx2" > x </h1>
<h5 class="display_error">عذرا لا يوجد حساب يطابق هذه المعلومات</h5>
</div>

<div id="xxxx" class="xx" >
<h1 @click="x()" class="callx2" > x </h1>
<h5 class="display_error"> يمكن تحميل صورتان فقط </h5>
</div>






  
<div  v-if="route2=='verify'" >




 <div class="main" v-if="route1=='verify'">
  <div class="commenter" style="background: #00000066;top:200px;" >
      <div  class="form-container">
         <div style="display: flex;justify-content: center;color: #fde068;    letter-spacing: 2px;">
              مخصص للمتاجر العملاء
          </div>

         <div class="button">
              <div class="login"   @click="route1='تسجيل'"
             > تسجيل دخول </div>
          </div>
         

      </div>
  </div>
</div>




<div  v-if="route1=='تسجيل'" >
  

<div      style="display: flex;justify-content: center;" >

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
              <div class="login" @click="getmyData()">تحقق</div>
          </div>
          

          <div class="button" >
              <div class="login" @click="route1='verify'"
              >رجوع</div>
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
                   0981715375
                 </i> 
                 </a>
          </div>
          
          <div class="button" >
              <div class="login" @click="route1='verify'"
              >رجوع</div>
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
              <div class="login" >إرسال</div>
          </div>


  </div>
</div>





<div class="container"   v-if='route1=="addItem"' style="height:auto;margin-top: 24%;">

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




<div class="logi" @click.once='compressor()'>
  <label  class="label5"  > 
      <div v-if="files.length==0"> اختر صورة  </div>
      <div v-if="files.length>=1"> اختر صورة ثانية </div>
      <input   name="file"  id="files" style="width:0px;" type="file"  multiple  />
  </label>
</div>

<div class="theImgs" >
    <div id="wrapper" class='wrapper'></div>
    <div  @click="imgR()" >إلغاء</div>
</div>











          <div class="button" style="margin-bottom:75px;">
              <div class="login" @click="api()">تأكيد العملية</div>
          </div>
          
          <div >





      </div>
   </div>
</div>


 

</div>
</div>
     
</div>


` }


}
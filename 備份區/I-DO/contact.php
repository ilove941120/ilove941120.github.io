<?php include_once("php/head_page.php");  ?>

<section>
  <!-- 聯絡我們 -->
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="contact_title_block">
          <div class="contact_english_title"> 
            <div class="line_decoration_left"></div>
            Contact Us  
            <div class="line_decoration_right"></div>
          </div>
          <div class="contact_chinese_title">奕多國際貿易</div>
        </div>
      </div>
      <div class="row">
        <div class="contact_page_content_block">
          營業時間：(平日)08:30 ~ 17:30
          <br>
          [總部]407台中市西屯區中工二路188號3樓 電話： 04-23583323 傳真：04-23583023
          <br>
          [台中門市]407台中市西屯區天保街13號 電話： 04-23583303 傳真：04-23583302
          <br>
          [台北分公司]114台北市內湖區金豐街66號2樓 電話： 02-27963303 傳真：02-27963305
        </div>
      </div>
      <div class="row">
        <div class="form_and_map">
          <form action="" class="contact_form" method="POST">
            <input type="text" placeholder="姓名" id="visitor_name" name="visitor_name" class="input_style">
            <input type="text" placeholder="電話" id="visitor_phone" name="visitor_phone" class="input_style">
            <input type="email" placeholder="E-mail" id="visitor_email" name="visitor_email" class="input_style">
            <textarea name="visitor_ask" id="visitor_ask" cols="30" rows="10" placeholder="詢問內容" class="textarea_style"></textarea>
            <div class="button_bar">
              <div class="i_not_robot">
                <div class="g-recaptcha" data-sitekey="AIzaSyA1pjEmAoe0XG4iW6x1qQ8ZnEcDQdvhHBc"></div>
              </div>
              <div class="sent_button">確定送出</div>
            </div>
          </form>
          <div class="map_block">
            <iframe class="mapStyle"
                  frameborder="0" 
                  style="border:0" 
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA1pjEmAoe0XG4iW6x1qQ8ZnEcDQdvhHBc&q=橘野數位設計" 
                  allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- JS表單驗證 -->
  <script>
    var chineseNameCheck = /^[\u4E00-\u9FA5]+$/;
      var phoneCheck = /^[0][9]\d{8}$/
      var emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var textareaCheck = "";
      // 點擊驗證表單
      $(".sent_button").click(function(){
          if($("#visitor_name").val() =="" || chineseNameCheck.test($("#visitor_name").val()) == false){
              alert("請輸入中文姓名,不可以空百或格式錯誤")
              return false;

          }
          if($("#visitor_phone").val() =="" || phoneCheck.test($("#visitor_phone").val()) == false){
              alert("請輸入手機,不可以空白或格式錯誤")
              return false;

          }
          if($("#visitor_email").val() =="" || emailCheck.test($("#visitor_email").val()) == false){
              alert("請輸入E-mail,不可以空白或格式錯誤")
              return false;

          }
          if($("#visitor_ask").val() ==""){
              alert("請輸入問題,不可以空白")
              return false;

          }
          
          else {
              $(".contact_form").submit();
          }
      })
  </script>
  <!-- 聯絡我們 -->

  <!-- 產品展示 -->
  <div class="product_show_block">
    <div class="container">
      <div class="row">
        <div class="product_show">
          <a href="#" class="product_item">
            <img src="upload/test1.jpg" alt="" />
            <div class="product_item_mask">
              <div class="product_item_name">產品名稱</div>
            </div>
          </a>
          <a href="#" class="product_item">
            <img src="upload/test1.jpg" alt="" />
            <div class="product_item_mask">
              <div class="product_item_name">產品名稱</div>
            </div>
          </a>
          <a href="#" class="product_item">
            <img src="upload/test1.jpg" alt="" />
            <div class="product_item_mask">
              <div class="product_item_name">產品名稱</div>
            </div>
          </a>
          <a href="#" class="product_item">
            <img src="upload/test1.jpg" alt="" />
            <div class="product_item_mask">
              <div class="product_item_name">產品名稱</div>
            </div>
          </a>
        </div>
        <div class="product_show_sm">
          <a href="#" class="product_item">
            <img src="upload/test1.jpg" alt="" />
            <div class="product_item_mask">
              <div class="product_item_name">產品名稱</div>
            </div>
          </a>
          <a href="#" class="product_item">
            <img src="upload/test1.jpg" alt="" />
            <div class="product_item_mask">
              <div class="product_item_name">產品名稱</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- JS產品的寬度等於高度 -->
  <script>
    var product_width = $("product_item").width();
    $(document).ready(function () {
      $(".product_item").height(product_width);
    });
    $(window).resize(function () {
      $(".product_item").height(product_width);
    });
  </script>
  <!-- 產品展示 -->
  <!-- 公司 -->
  <div class="company_block">
    <div class="container">
      <div class="row">
        <div class="company">
          <a href="#" class="company_item">
            <img src="img/logo2.gif" alt="" />
          </a>
          <a href="#" class="company_item">
            <img src="img/logo2.gif" alt="" />
          </a>
          <a href="#" class="company_item">
            <img src="img/logo2.gif" alt="" />
          </a>
          <a href="#" class="company_item">
            <img src="img/logo2.gif" alt="" />
          </a>
          <a href="#" class="company_item">
            <img src="img/logo2.gif" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- 公司 -->
</section>

<?php include_once("php/foot.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap4.min.css">
    <link rel="stylesheet" href="css/external_i.css">
    <link rel="stylesheet" href="css/external_k.css">
    <link rel="stylesheet" href="css/external_g.css">
    <link rel="stylesheet" href="css/external_p.css">
    <link rel="stylesheet" href="css/slick-theme.css">
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/gs.css">

    <script language="javascript" src="js/jquery-1.12.3.min.js"></script>
    <script language="javascript" src="js/preload/jquery.preload.min.js"></script>
    <script src="js/slick.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>

</head>
<body>
    <div class="welcome_head">
        <div class="head_block">
            <div class="menu_bar">
                <div class="head_search">
                    <div class="head_search_icon_block"><i class="fap fa-search-btb"></i></div>
                    <input type="text" placeholder="尋找產品">
                </div>
                <a href="#" class="menu_item">產品專區</a>
                <a href="#" class="menu_item">聯絡我們</a>
                <a href="#" class="menu_item">會員中心</a>
                <a href="#" class="menu_line"><i class="fap fa-line02"></i></a>
                <div class="menu_group_RWD"><i class="fap fa-bars"></i></div>
            </div>
            
        </div>
        <div class="desk_head_block">
            <img src="img/head_background.png" alt="">
            <div class="desk_head_logo">
                <img src="img/logo1.png" alt="">
            </div>
        </div>
    </div>
    <div class="menu_group">
        <div class="menu_group_close"><i class="fak fa-close"></i></div>
        <a href="#" class="menu_group_item">產品專區</a>
        <a href="#" class="menu_group_item">聯絡我們</a>
        <a href="#" class="menu_group_item">立即結帳</a>
        <a href="#" class="menu_group_item">會員中心</a>
    </div>
    <script>
        $(".menu_group_RWD").click(function(){
            $(".menu_group").fadeIn()
        })
        $(".menu_group_close").click(function(){
            $(".menu_group").fadeOut()
        })
    </script>
    
    <!-- 側邊購物車 -->
    <section>
        <div class="side_cart_button">
            <div class="side_item">
                <i class="fak fak-shopping-cart-typcn"></i>
                <div class="quantity">(<span class="all_product_number_out">5</span>)</div>
            </div>
            <div class="divider"></div>
            <div class="side_item">
                <i class="fak fa-heart-fi"></i>
                <div class="quantity">(<span>5</span>)</div>
            </div>
            <div class="divider"></div>
            <div class="side_item">
                <i class="fak fak-clock-btm"></i>
                <div class="record">瀏覽紀錄</div>
            </div>
        </div>
        
        <div class="side_shop_cart">
            <div class="shop_cart_head">
                <i class="fap fa-chevron-left"></i>
                瀏覽紀錄(<span class="all_product_number">4</span>)
                <div class="close_button">	
                    <i class="fak fa-cross"></i>
                </div>
            </div>
            <div class="shop_cart_content">
                <div class="shop_cart_item">
                    <div class="checkbox">
                        <input type="checkbox" name="" id="">
                    </div>
                    <div class="shop_cart_item_img">
                        <img src="img/test1.png" alt="">
                    </div>
                    <div class="shop_cart_item_content">
                        <div class="shop_cart_item_name">商品名稱商品名稱商品名稱商</div>
                        <div class="shop_cart_item_price">NT$ <span>6000</span></div>
                    </div>
                    <div class="shop_cart_item_delete"><i class="fak fa-trash-fa"></i></div>
                </div>
                <div class="shop_cart_item">
                    <div class="checkbox">
                        <input type="checkbox" name="" id="">
                    </div>
                    <div class="shop_cart_item_img">
                        <img src="img/test1.png" alt="">
                    </div>
                    <div class="shop_cart_item_content">
                        <div class="shop_cart_item_name">商品名稱</div>
                        <div class="shop_cart_item_price">NT$ <span>6000</span></div>
                    </div>
                    <div class="shop_cart_item_delete"><i class="fak fa-trash-fa"></i></div>
                </div>
                <div class="shop_cart_item">
                    <div class="checkbox">
                        <input type="checkbox" name="" id="">
                    </div>
                    <div class="shop_cart_item_img">
                        <img src="img/test1.png" alt="">
                    </div>
                    <div class="shop_cart_item_content">
                        <div class="shop_cart_item_name">商品名稱</div>
                        <div class="shop_cart_item_price">NT$ <span>6000</span></div>
                    </div>
                    <div class="shop_cart_item_delete"><i class="fak fa-trash-fa"></i></div>
                </div>
                <div class="shop_cart_item">
                    <div class="checkbox">
                        <input type="checkbox" name="" id="">
                    </div>
                    <div class="shop_cart_item_img">
                        <img src="img/test1.png" alt="">
                    </div>
                    <div class="shop_cart_item_content">
                        <div class="shop_cart_item_name">商品名稱</div>
                        <div class="shop_cart_item_price">NT$ <span>6000</span></div>
                    </div>
                    <div class="shop_cart_item_delete"><i class="fak fa-trash-fa"></i></div>
                </div>
                
                
            </div>
            <div class="shop_cart_foot">
                <div class="delete_button">刪除</div>
                <div class="join_button">加入購物車</div>
            </div>
        </div>
        <script>
            $(".side_cart_button").click(function(){
                $(".side_shop_cart").slideToggle()
                var product_width = $(".shop_cart_item_img").width()
                $(".shop_cart_item_img").height(product_width)
            })
            $(".close_button").click(function(){
                $(".side_shop_cart").hide()
            })
            $(".shop_cart_item_delete").click(function(){
                var all_item=0;
                $(this).parents(".shop_cart_item").remove()

                $(".shop_cart_item").each(function(){
                    all_item++
                })
                $(".all_product_number").text(all_item)
                $(".all_product_number_out").text(all_item)
                

            })
            $(document).ready(function(){
                var all_item=0;
                $(".shop_cart_item").each(function(){
                    all_item++
                })
                $(".all_product_number").text(all_item)
                $(".all_product_number_out").text(all_item)
            })
        </script>
        <script>
            $(document).ready(function(){
                var product_width = $(".shop_cart_item_img").width()
                $(".shop_cart_item_img").height(product_width)
            })
            $(window).resize(function(){
                var product_width = $(".shop_cart_item_img").width()
                $(".shop_cart_item_img").height(product_width)
            })
        </script>
    </section>
    <div class="banner_block">
        <div class="banner_content">
            <div class="banner_img">
                <img src="img/test1.png" alt="">
            </div>
        </div>
        <div class="deck_banner">
            <div class="deck_mask2">
                <div class="deck_slogan_1">
                    <img src="img/slogan_1.png" alt="">
                </div>
            </div>
            <div class="deck_mask3">
                <div class="deck_1">
                    <img src="img/deck1.png" alt="">
                </div>
                <div class="deck_2">
                    <img src="img/deck2.png" alt="">
                </div>
            </div>
        </div>
        
    </div>
    <div class="about_block">
        <div class="about_content_RWD">
            <div class="about_title">
                <img src="img/about.png" alt="">
            </div>
            <div class="about_text">
                身為執業藥師，多年前看著家中小孩手不離3C產品
                <br>
                於是想到從日常飲食中給予小孩子在眼睛上的保護與身體營養的補充
                <br>
                經過搜尋發現甜菜根的營養成分真的是一種完善組成的天然食材
                <br>
                於是展開了這段長達七年的青粮秫開發旅程
                <br>
                <br>
                當然，好吃美味是必備的條件
                <br>
                經過一連串非傳統思維的香腸製作程序，中間沒有任何非天然的食材與添加物
                <br>
                並加入健康無毒的因子，讓甜菜根香腸更加完善
                <br>
                <br>
                在一群好友的指教與認同下，我開創了運用天然材料的物理性質
                <br>
                處理肉品食材去腥除汙的程序，再以甜菜根、山藥、洋蔥等天然食材為佐料製作
                <br>
                原嘗  甜菜根香腸及竹居  滷味系列產品
                <br>
                也自己養紅麴做為饌粮  紅麴米腸的原料，終於完備了青粮秫的內涵
                <br>
                在經過七年修練後的今天，青粮秫準備好要出檯面市
                <br>
                並以傳統為底蘊、用專業知識為輔，開創新的製程
            </div>
        </div>
        <div class="desk_about_RWD">
            <img class="desk_slogan" src="img/slogan.png" alt="">
        </div>

        <div class="desk_about">
            <div class="desk_about_bottom">
                <div class="about_content">
                    <div class="about_title">
                        <img src="img/about.png" alt="">
                    </div>
                    <div class="about_text">
                        身為執業藥師，多年前看著家中小孩手不離3C產品
                        <br>
                        於是想到從日常飲食中給予小孩子在眼睛上的保護與身體營養的補充
                        <br>
                        經過搜尋發現甜菜根的營養成分真的是一種完善組成的天然食材
                        <br>
                        於是展開了這段長達七年的青粮秫開發旅程
                        <br>
                        <br>
                        當然，好吃美味是必備的條件
                        <br>
                        經過一連串非傳統思維的香腸製作程序，中間沒有任何非天然的食材與添加物
                        <br>
                        並加入健康無毒的因子，讓甜菜根香腸更加完善
                        <br>
                        <br>
                        在一群好友的指教與認同下，我開創了運用天然材料的物理性質
                        <br>
                        處理肉品食材去腥除汙的程序，再以甜菜根、山藥、洋蔥等天然食材為佐料製作
                        <br>
                        原嘗  甜菜根香腸及竹居  滷味系列產品
                        <br>
                        也自己養紅麴做為饌粮  紅麴米腸的原料，終於完備了青粮秫的內涵
                        <br>
                        在經過七年修練後的今天，青粮秫準備好要出檯面市
                        <br>
                        並以傳統為底蘊、用專業知識為輔，開創新的製程
                    </div>
                </div>
                <img src="img/about_background.png" alt="">
                <div class="desk_about_slogan">
                    <img src="img/slogan.png" alt="">
                </div>
                <div class="desk_about_flower">
                    <img src="img/flower.png" alt="">
                </div>
                <div class="desk_about_greens">
                    <img src="img/greens.png" alt="">
                </div>
                <div class="desk_about_fork">
                    <img src="img/fork2.png" alt="">
                </div>
                <div class="desk_about_spoon">
                    <img src="img/spoon2.png" alt="">
                </div>
            </div>
            <div class="desk_about_sauasge">
                <img src="img/sausage1.png" alt="">
                <div class="desk_about_knife">
                    <img src="img/knife2.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="product_block">
        <div class="desk_prodcut_block">
            <div class="desk_prodcut_bottom">
                <div class="produc_content">
                    <div class="container">
                        <div class="row">
                            <div class="slider_block">
                                <a href="#" class="slider_item">
                                    <div class="slider_item_img">
                                        <img src="test_img/12563649_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_content">
                                        <div class="product_name">黑豬肉香腸</div>
                                        <div class="product_price_block">
                                            <div class="product_main_price">NT$ <span>6000</span></div>
                                            <div class="product_sub_price">原價NT$ <span>6900</span></div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="slider_item">
                                    <div class="slider_item_img">
                                        <img src="test_img/12528489_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_name">黑豬肉香腸</div>
                                    <div class="product_price_block">
                                        <div class="product_main_price">NT$ <span>6000</span></div>
                                        <div class="product_sub_price">原價NT$ <span>6900</span></div>
                                    </div>
                                </a>
                                <a href="#" class="slider_item">
                                    <div class="slider_item_img">
                                        <img src="test_img/12528489_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_name">黑豬肉香腸</div>
                                    <div class="product_price_block">
                                        <div class="product_main_price">NT$ <span>6000</span></div>
                                        <div class="product_sub_price">原價NT$ <span>6900</span></div>
                                    </div>
                                </a>
                                <a href="#" class="slider_item">
                                    <div class="slider_item_img">
                                        <img src="test_img/12528489_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_name">黑豬肉香腸</div>
                                    <div class="product_price_block">
                                        <div class="product_main_price">NT$ <span>6000</span></div>
                                        <div class="product_sub_price">原價NT$ <span>6900</span></div>
                                    </div>
                                </a>
                                <a href="#" class="slider_item">
                                    <div class="slider_item_img">
                                        <img src="test_img/12528489_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_name">黑豬肉香腸</div>
                                    <div class="product_price_block">
                                        <div class="product_main_price">NT$ <span>6000</span></div>
                                        <div class="product_sub_price">原價NT$ <span>6900</span></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <script>
                        $('.slider_block').slick({
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3,
                        slidesPerRow:3,
                        responsive: [
                            {
                            breakpoint: 1200,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 2
                            }
                            },
                            {
                            breakpoint: 768,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 1
                            }
                            }
                        ]
                        });
                        
                    </script>
                    <script>
                        $(window).load(function(){
                            var slider_item_width = $(".slider_item_img").width();
                            $(".slider_item_img").height(slider_item_width);
                        })
                        $(window).resize(function(){
                            var slider_item_width = $(".slider_item_img").width();
                            $(".slider_item_img").height(slider_item_width);
                        })
                    </script>
                </div>
                <img src="img/desk_prodcut_bottom.png" alt="">
            </div>
            <div class="desk_product_flower1"><img src="img/flower.png" alt=""></div>
            <div class="desk_product_flower2"><img src="img/flower.png" alt=""></div>
            <div class="desk_welcome_product_basket"><img src="img/basket.png" alt=""></div>
            <div class="desk_product_grass3"><img src="img/grass3.png" alt=""></div>
            <a href="#" class="desk_more_button"><img src="img/more_button.png" alt=""></a>
        </div>
    </div>
    <!-- 最後一個區塊 -->
    <div class="last_block">
        <div class="desk_last_block">
            <div class="desk_advantage_block">
                <img class="desk_advantage_bottom" src="img/advantage_backgroud.png" alt="">
                <img class="desk_advantage_black" src="img/advantage_black.png" alt="">
                <img class="desk_advantage" src="img/advantage.png" alt="">
                <img class="desk_advantage_flower" src="img/flower.png" alt="">
                <img class="desk_advantage_onion" src="img/onion.png" alt="">
                <img class="desk_advantage_taro" src="img/taro.png" alt="">
            </div>
        </div>
        <div class="desk_last_block_after">
            <img class="desk_last_contack_bottom" src="img/desk_contack_bottom.png" alt="">
            <img class="shop_decoration1"  src="img/shop_decoration.png" alt="">
            <div class="desk_last_contact_phone">
                <div class="phone_icon"><i class="fak fa-phone-in-talk"></i></div>
                <div class="contact_phone_text">0937656788</div>
            </div>
            <div class="desk_last_contact_address">
                <div class="address_icon"><i class="fai fa-pl1"></i></div>
                <div class="contact_adress_text">台北市大安區復興南路二段
                    一五一巷八號五樓之三</div>
            </div>
        </div>
        <div class="advantage_block">
            <div class="container">
                <div class="row">
                    <div class="advantage_slider">
                        <div class="advantage_slider_item">
                            <img src="img/slider_img1.png" alt="">
                        </div>
                        <div class="advantage_slider_item">
                            <img src="img/slider_img2.png" alt="">
                        </div>
                        <div class="advantage_slider_item">
                            <img src="img/slider_img3.png" alt="">
                        </div>
                        <div class="advantage_slider_item">
                            <img src="img/slider_img4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $('.advantage_slider').slick({
                arrows:false,
            });
        </script>
        <div class="contact_block">
            <div class="container">
                <div class="row">
                    <div class="contact_content">
                        <div class="decoration_contact">
                            <img src="img/contact_title.png" alt="">
                        </div>
                        <form action="" class="form_style">
                            <div class="contact_form_top">
                                <div class="form_item_block">
                                    <div class="form_item">
                                        <div class="form_icon_block">	
                                            <i class="fap fa-user"></i>
                                            姓名
                                        </div>
                                        <input class="input_style" type="text" name="visitor_name" id="visitor_name">
                                    </div>
                                    <div class="form_item">
                                        <div class="form_icon_block">	
                                            <i class="fap fa-phone-bts"></i>
                                            手機
                                        </div>
                                        <input class="input_style" type="text" name="visitor_phone" id="visitor_phone">
                                    </div>
                                    <div class="form_item">
                                        <div class="form_icon_block">	
                                            <i class="fap fa-line02"></i>
                                            Line ID
                                        </div>
                                        <input class="input_style" type="text" name="visitor_line" id="visitor_line">
                                    </div>
                                    <div class="form_item">
                                        <div class="form_icon_block">	
                                            <i class="fag fa-flag"></i>
                                            詢問產品
                                        </div>
                                        <input class="input_style" type="text" name="ask_product" id="ask_product">
                                    </div>
                                </div>
                                <div class="form_textarea_block">
                                    
                                    <label for=""><i class="fap fa-question"></i>詢問內容</label>
    
                                    <textarea  name="ask_content" id="ask_content" class="textarea_style" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div class="form_bottom">
                                <div class="form_bottom_content">
                                    <div class="prompt_block">↓↓↓請勾選『我不是機器人』↓↓↓</div>
                                    <div class="verificationBlock">
                                        <div class="g-recaptcha" data-sitekey="AIzaSyA1pjEmAoe0XG4iW6x1qQ8ZnEcDQdvhHBc"></div>
                                    </div>
                                    <div class="sent_button">送出表單</div>
                                </div>
                            </div>
                            
                            
                        </form>
                        <script>
                            var chineseNameCheck = /^[\u4E00-\u9FA5]+$/;
                            var phoneCheck = /^[0][9]\d{8}$/
                            var emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                            // 點擊驗證表單
                            $(".sent_button").click(function(){
                                if($("#visitor_name").val() =="" || chineseNameCheck.test($("#visitor_name").val()) == false){
                                    alert("請輸入中文姓名")
                                    return false;
                                }
                                if($("#visitor_phone").val() =="" || phoneCheck.test($("#visitor_phone").val()) == false){
                                    alert("請輸入手機,不可以空白或格式錯誤")
                                    return false;
                                }
                                if($("#visitor_line").val() ==""){
                                    alert("請輸入lineID,不可以空白或格式錯誤")
                                    return false;
                                }
                                if($("#ask_product").val() ==""){
                                    alert("請輸入詢問產品,不可以空白")
                                    return false;
                                }
                                if(!$.trim($("#ask_content").val())){
                                    alert("請輸入詢問內容,不可以空白")
                                    return false;
                                }
                                else {
                                    $(".form_style").submit();
                                }
                            })
                        </script>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

<?php include_once("foot.php"); ?>
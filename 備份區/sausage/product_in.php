<?php include_once("head.php");  ?>

<!-- 頁面主內容 -->
<section>
        <div class="desk_page_block">
            <div class="desk_page_background">
                <img src="img/black_head_01.png" alt="">
                <div class="des_page_item">
                    <img src="img/product_title_1.png" alt="">
                </div>
            </div>
            <div class="des_page_item_RWD">
                <img src="img/product_title_1.png" alt="">
            </div>
        </div>
        <div class="product_in_page">
            <div class="container">
                <div class="product_in_page_content">
                    <div class="product_in_sort_block">
                        <div class="sort_title">
                            <div class="chinese_title">產品專區</div>
                            <div class="english_title">product zone</div>
                        </div>
                        <div class="deck_line"></div>
                        <div class="sort_item_block">
                            <a href="#" class="sort_item">
                                原嘗系列
                            </a>
                            <a href="#" class="sort_item">
                                竹居系列
                            </a>
                            <a href="#" class="sort_item">
                                饌糧系列
                            </a>
                        </div>
                        <div class="sort_item_block_RWD">選擇系列</div>
                        <div class="sort_item_group_RWD">
                            <a href="https://www.youtube.com/premium" class="sort_item_RWD">
                                原嘗系列
                            </a>
                            <a href="#" class="sort_item_RWD">
                                竹居系列
                            </a>
                            <a href="#" class="sort_item_RWD">
                                饌糧系列
                            </a>
                        </div>
                        <script>
                            $(".sort_item_block_RWD").click(function(){
                                $(".sort_item_group_RWD").slideToggle()
                            })
                        </script>
                    </div>
                    <div class="product_thing">
                        <div class="product_thing_top">
                            <div class="product_thing_img_block">
                                <div class="product_thing_big_img">
                                    <div class="product_thing_big_img_item">
                                        <img src="img/test1.png" alt="">
                                    </div>
                                    <div class="product_thing_big_img_item">
                                        <img src="test_img/12563649_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_thing_big_img_item">
                                        <img src="test_img/12528489_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_thing_big_img_item">
                                        <img src="img/test1.png" alt="">
                                    </div>
                                </div>
                                <div class="product_thing_slider">
                                    <div class="product_thing_slider_item">
                                        <img src="img/test1.png" alt="">
                                    </div>
                                    <div class="product_thing_slider_item">
                                        <img src="test_img/12563649_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_thing_slider_item">
                                        <img src="test_img/12528489_xxl.jpg" alt="">
                                    </div>
                                    <div class="product_thing_slider_item">
                                        <img src="img/test1.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <script>
                                $('.product_thing_big_img').slick({
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows:false,
                                    fade: true,
                                    asNavFor: '.product_thing_slider'
                                    });
                                    $('.product_thing_slider').slick({
                                    centerPadding:"0px",
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    asNavFor: '.product_thing_big_img',
                                    dots: false,
                                    centerMode: true,
                                    focusOnSelect: true
                                });
                                $(document).ready(function(){
                                    var product_width = $(".product_thing_big_img_item").width()
                                    $(".product_thing_big_img_item").height(product_width)
                                    var product_width = $(".product_thing_slider_item").width()
                                    $(".product_thing_slider_item").height(product_width)
                                })
                                $(window).resize(function(){
                                    var product_width = $(".product_thing_big_img_item").width()
                                    $(".product_thing_big_img_item").height(product_width)
                                    var product_width = $(".product_thing_slider_item").width()
                                    $(".product_thing_slider_item").height(product_width)
                                })
                            </script>
                            <div class="product_thing_content_block">
                                <div class="product_thing_name">
                                    <div class="icon_love">
                                        <i class="fak fa-heart-outline no_love"></i>
                                        <i class="fak fa-heart-fi add_love"></i>
                                    </div>
                                    商品名稱</div>
                                <div class="produc_thing_price">
                                    <div class="special_price">NT$ <span>6000</span></div>
                                    <div class="original_price">NT$ <span>6900</span></div>
                                
                                </div>
                                <div class="product_thing_summary">
                                    編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器編輯器
                                </div>
                                <form action="" class="product_thing_form">
                                    <div class="product_thing_form_item">
                                        <label for="product_norm">規格</label>
                                        <select name="product_norm" id="product_norm">
                                            <option value="0">請選擇規格</option>
                                            <option value="1">xl</option>
                                            <option value="2">ml</option>
                                        </select>
                                    </div>
                                    <div class="product_thing_form_item">
                                        <label for="">數量</label>
                                        <div class="amount_block">
                                            <div class="lesson">
                                                <i class="fak fa-minus-btm"></i>
                                            </div>
                                            <input type="text" class="amount" name="product_amount" value="1" readonly="readonly">
                                            <div class="add">
                                                <i class="fak fa-plus-btm"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <script>
                                        $(".amount")
                                        $(".lesson").click(function(){
                                            var input_number =$(this).siblings("input")
                                            if(input_number.val()>1){
                                            input_number.val(parseInt(input_number.val()) - 1)
                                            }
                                        })
                                        $(".add").click(function(){
                                            var input_number =$(this).siblings("input")
                                            input_number.val(parseInt(input_number.val()) + 1)
                                        })
                                    </script>
                                    <div class="product_thing_button">
                                        <a href="#" class="sent_shop_cart_button">加入購物車</a>
                                        <a href="#" class="snet_buy_button">立即購買</a>
                                    </div>
                                </form>
                                <script>
                                    // 加入購物車
                                    $(".sent_shop_cart_button").click(function(){
                                        if($("#product_norm").val() =="0"){
                                            alert("請選擇規格")
                                            return false;
                                        }
                                        else{
                                            $(".product_thing_form").submit();
                                        }
                                    })
                                    // 立即購買
                                    $(".snet_buy_button").click(function(){
                                        if($("#product_norm").val() =="0"){
                                            alert("請選擇規格")
                                            return false;
                                        }
                                        else{
                                            $(".product_thing_form").submit();
                                        }
                                    })
                                </script>
                            </div>
                        </div>
                        <div class="product_thing_bottom">
                            <div class="product_thimg_description">
                                <div class="product_thimg_description_title">商品描述</div>
                                <div class="product_thimg_description_content">
                                    ※商品描述與商品規格區為自由編輯器，可自由上圖+輸入文字等。
                                    <br>
                                    ※商品描述與商品規格區為自由編輯器，可自由上圖+輸入文字等。
                                    <br>
                                    ※商品描述與商品規格區為自由編輯器，可自由上圖+輸入文字等。
                                    <br>
                                    <br>
                                    <img style="width: 100%;" src="img/test1.png" alt="">
                                </div>
                            </div>
                            <a href="#" class="back_buttom">回上頁</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="desk_product_page">
            <div class="desk_product_in_bottom">
                <img src="img/desk_product_in_bottom.png" alt="">
                <div class="desk_product_in_grass">
                    <img src="img/desk_product_in_grass.png" alt="">
                </div>
                <div class="desk_product_in_spoon">
                    <img src="img/Spoon1.png" alt="">
                </div>
                <div class="desk_product_in_fork">
                    <img src="img/fork2.png" alt="">
                </div>
                
            </div>
            <div class="desk_product_page_knife_RWD">
                <img src="img/knife.png" alt="">
            </div>
            <div class="desk_product_in_fork_RWD">
                <img src="img/fork.png" alt="">
            </div>
            <div class="desk_product_basket">
                <img src="img/basket.png" alt="">
            </div>
        </div>
        <div class="desk_product_page_RWD">
            <div class="desk_product_page_flower1_RWD">
                <img src="img/flower.png" alt="">
            </div>
            <div class="desk_product_page_basket_RWD">
                <img src="img/basket.png" alt="">
            </div>
        </div>
    </section>

<?php include_once("foot.php"); ?>
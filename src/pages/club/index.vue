<style scoped>
    .banner-left {
        float: left;
        margin: 20px 0;
    }

    .banner-right {
        float: right;
        margin: 20px 0;
    }

    .product-box {
        margin-left: -37px;
        overflow: hidden;
        clear: both;
    }

    .product {
        width: 186.3px;
        margin-top: 30px;
        margin-left: 36px;
        text-align: center;
        background: #ffffff;
        float: left;
        padding: 6px;
        position: relative;
    }

    .product--active{

    }

    .product__text {
        font-family: AppleColorEmoji;
        font-size: 12px;
        color: #000000;
        text-align: left;
        margin:0 10px;
    }

    .product__image-box {
        overflow: hidden;
    }

    .product__image {
        width: 30%;
        float: left;
        margin-left: 3%;
    }

    .product__title {
        font-family: PingFangHK-Light;
        font-size: 12px;
        color: #000000;
        line-height: 24px;
        text-align: center;
    }

    .product__base {
        /*height: 45px;*/
        position: relative;
        overflow: hidden;
    }

    .product__base:after {
        content: '';
        display: block;
        border: 1px solid #ECEDEF;
        position: absolute;
        left: 5px;
        right: 5px;;
    }

    .product__base:before {
        content: '';
        display: block;
        border: 1px solid #ECEDEF;
        position: absolute;
        bottom: 0;
        left: 5px;
        right: 5px;;
    }

    .product__base--item {
        width: 33%;
        float: left;
        font-size: 10px;
        padding: 10px 0;
        position: relative;
    }

    .product__base--item:after {
        content: '';
        display: block;
        border: 1px solid #ECEDEF;
        position: absolute;
        right: 0;
        top: 14px;
        bottom: 14px;
    }

    .product__base--item:nth-last-child(1):after {
        border: 0;
    }

    .product__base-title--sub {
        font-family: PingFangHK-Regular;
        font-size: 10px;
        color: #000000;
        display: block;
    }

    .product__base-title--symbol {
        color: #000000;
        font-size: 10px;
    }

    .product__base-title--num {
        color: #ff7474;
        font-size: 16px;
    }

    .product__other {
        padding: 10.5px 5.5px;
        overflow: hidden;
        font-size: 12px;
    }

    .product__ticket {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        border: 1px solid #66D3E2;
        border-radius: 3px;
        float: left;
    }

    .product__ticket--bg {
        width: 14px;
        text-align: center;
        background: #66D3E2;
        float: left;
        color: #ffffff;
    }

    .product__ticket-num {
        padding: 0 2px;
        text-align: center;
        font-size: 12px;
        color: #66D3E2;
        float: left;
    }

    .product__count {
        display: inline-block;
        margin-left: 5px;
        font-size: 12px;
        line-height: 20px;
        color: #7D8995;
        float: left;
    }

    .product__count--num {
        color: #ff7474;
    }

    .product__platform {
        float: right;
        margin-top: 4px;
    }

    .product__time{
        font-size: 12px;
        line-height: 12px;
        text-align: left;
        margin: 0;
        margin-left: 7px;
        margin-bottom: 12px;
    }

    .product__from{
        height: 30px;
        font-size: 12px;
        line-height: 30px;
        text-align: left;
        box-sizing: border-box;
        padding-top: 5px;
        padding-left: 7px;
        position: relative;
    }
    .product__from--error{
        float: right;
        cursor: pointer;
        margin-right: 5px;
    }
    .product__from--error img{
        margin-right: 3px;
    }
    .product__from:before{
        content: '';
        display: block;
        border: 1px solid #ECEDEF;
        position: absolute;
        top: 0;
        left: 5px;
        right: 5px;;
    }
    .product:hover{
        box-shadow:0 0 5px #66D3E2,0 0 5px #66D3E2 inset;
        opacity: 0.9;
    }
    .product__float{
        display: none;
        opacity: 0.9;
        background: #66D3E2;
        position: absolute;
        left: 0;
        right: 0;
        top: 287px;
        font-size: 12px;
        line-height: 31px;
        color: #000000;
        z-index: 10;
        cursor: pointer;
    }
    .product:hover .product__float{
        display: block;
    }


    .pagination-box {
        clear: both;
        padding: 220px 0 36px 230px;
    }

</style>
<template>
    <div class="container">
        <img src="../assets/images/banner.png" alt="" class="banner-left">
        <img src="../assets/images/banner.png" alt="" class="banner-right">

        <div class="product-box" clear>
            <div class="product">
                <p class="product__text">🌈🌈蓝瘦，香菇，我的香菇脆被吃光了
                    那可是不一样的香菇脆，有机西峡香菇🍄
                    富含多种维生素蛋~给孩子当零食吃
                    鲜香酥脆，营养不上火！
                    16斤有机鲜香菇才能做出1斤香菇脆喔🙈
                    ㊙￥28.9元3盒！沃尔玛各大商超都有‼</p>
                <p class="product__text"> ---复制本段信息打开『手机TAO宝』 即可享受超值超低下单价￥vI4F0NqTY6w￥</p>

                <div class="product__image-box">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                </div>


                <h3 class="product__title">秋冬季加绒加厚保暖豆豆鞋</h3>
                <div class="product__base">
                    <div class="product__base--item">
                        <span class="product__base-title--sub">券后价</span>
                        <span class="product__base-title--num">19<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">佣金</span>
                        <span class="product__base-title--num">9.8<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">营销</span>
                        <span class="product__base-title--num">40<span class="product__base-title--symbol">%</span></span>
                    </div>
                </div>
                <div class="product__other">
                    <div class="product__ticket">
                        <span class="product__ticket--bg">券</span>
                        <span class="product__ticket-num">￥20</span>
                    </div>
                    <div class="product__count">
                        销量
                        <spam class="product__count--num">12332</spam>
                    </div>
                    <img src="../assets/images/platform.png" class="product__platform" alt="">
                </div>

                <p class="product__time">活动日期：01.20-01.30</p>

                <div class="product__float">生成朋友圈文案</div>
            </div>
            <div class="product">
                <p class="product__text">🌈🌈蓝瘦，香菇，我的香菇脆被吃光了
                    那可是不一样的香菇脆，有机西峡香菇🍄
                    富含多种维生素蛋~给孩子当零食吃
                    鲜香酥脆，营养不上火！
                    16斤有机鲜香菇才能做出1斤香菇脆喔🙈
                    ㊙￥28.9元3盒！沃尔玛各大商超都有‼</p>
                <p class="product__text"> ---复制本段信息打开『手机TAO宝』 即可享受超值超低下单价￥vI4F0NqTY6w￥</p>

                <div class="product__image-box">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                </div>


                <h3 class="product__title">秋冬季加绒加厚保暖豆豆鞋</h3>
                <div class="product__base">
                    <div class="product__base--item">
                        <span class="product__base-title--sub">券后价</span>
                        <span class="product__base-title--num">19<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">佣金</span>
                        <span class="product__base-title--num">9.8<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">营销</span>
                        <span class="product__base-title--num">40<span class="product__base-title--symbol">%</span></span>
                    </div>
                </div>
                <div class="product__other">
                    <div class="product__ticket">
                        <span class="product__ticket--bg">券</span>
                        <span class="product__ticket-num">￥20</span>
                    </div>
                    <div class="product__count">
                        销量
                        <spam class="product__count--num">12332</spam>
                    </div>
                    <img src="../assets/images/platform.png" class="product__platform" alt="">
                </div>

                <p class="product__time">活动日期：01.20-01.30</p>

                <div class="product__float">生成朋友圈文案</div>
            </div>
            <div class="product product--active">
                <p class="product__text">🌈🌈蓝瘦，香菇，我的香菇脆被吃光了
                    那可是不一样的香菇脆，有机西峡香菇🍄
                    富含多种维生素蛋~给孩子当零食吃
                    鲜香酥脆，营养不上火！
                    16斤有机鲜香菇才能做出1斤香菇脆喔🙈
                    ㊙￥28.9元3盒！沃尔玛各大商超都有‼</p>
                <p class="product__text"> ---复制本段信息打开『手机TAO宝』 即可享受超值超低下单价￥vI4F0NqTY6w￥</p>

                <div class="product__image-box">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                </div>


                <h3 class="product__title">秋冬季加绒加厚保暖豆豆鞋</h3>
                <div class="product__base">
                    <div class="product__base--item">
                        <span class="product__base-title--sub">券后价</span>
                        <span class="product__base-title--num">19<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">佣金</span>
                        <span class="product__base-title--num">9.8<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">营销</span>
                        <span class="product__base-title--num">40<span class="product__base-title--symbol">%</span></span>
                    </div>
                </div>
                <div class="product__other">
                    <div class="product__ticket">
                        <span class="product__ticket--bg">券</span>
                        <span class="product__ticket-num">￥20</span>
                    </div>
                    <div class="product__count">
                        销量
                        <spam class="product__count--num">12332</spam>
                    </div>
                    <img src="../assets/images/platform.png" class="product__platform" alt="">
                </div>

                <p class="product__time">活动日期：01.20-01.30</p>

                <div class="product__from">来源：摩登特战队 <span class="product__from--error"><img src="../assets/images/icon_hammer.png" alt="">纠错</span></div>

                <div class="product__float">生成朋友圈文案</div>
            </div>
            <div class="product">
                <p class="product__text">🌈🌈蓝瘦，香菇，我的香菇脆被吃光了
                    那可是不一样的香菇脆，有机西峡香菇🍄
                    富含多种维生素蛋~给孩子当零食吃
                    鲜香酥脆，营养不上火！
                    16斤有机鲜香菇才能做出1斤香菇脆喔🙈
                    ㊙￥28.9元3盒！沃尔玛各大商超都有‼</p>
                <p class="product__text"> ---复制本段信息打开『手机TAO宝』 即可享受超值超低下单价￥vI4F0NqTY6w￥</p>

                <div class="product__image-box">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                </div>


                <h3 class="product__title">秋冬季加绒加厚保暖豆豆鞋</h3>
                <div class="product__base">
                    <div class="product__base--item">
                        <span class="product__base-title--sub">券后价</span>
                        <span class="product__base-title--num">19<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">佣金</span>
                        <span class="product__base-title--num">9.8<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">营销</span>
                        <span class="product__base-title--num">40<span class="product__base-title--symbol">%</span></span>
                    </div>
                </div>
                <div class="product__other">
                    <div class="product__ticket">
                        <span class="product__ticket--bg">券</span>
                        <span class="product__ticket-num">￥20</span>
                    </div>
                    <div class="product__count">
                        销量
                        <spam class="product__count--num">12332</spam>
                    </div>
                    <img src="../assets/images/platform.png" class="product__platform" alt="">
                </div>

                <p class="product__time">活动日期：01.20-01.30</p>

                <div class="product__float">生成朋友圈文案</div>
            </div>
            <div class="product">
                <p class="product__text">🌈🌈蓝瘦，香菇，我的香菇脆被吃光了
                    那可是不一样的香菇脆，有机西峡香菇🍄
                    富含多种维生素蛋~给孩子当零食吃
                    鲜香酥脆，营养不上火！
                    16斤有机鲜香菇才能做出1斤香菇脆喔🙈
                    ㊙￥28.9元3盒！沃尔玛各大商超都有‼</p>
                <p class="product__text"> ---复制本段信息打开『手机TAO宝』 即可享受超值超低下单价￥vI4F0NqTY6w￥</p>

                <div class="product__image-box">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                    <img class="product__image" src="../assets/images/product_small.png" alt="">
                </div>


                <h3 class="product__title">秋冬季加绒加厚保暖豆豆鞋</h3>
                <div class="product__base">
                    <div class="product__base--item">
                        <span class="product__base-title--sub">券后价</span>
                        <span class="product__base-title--num">19<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">佣金</span>
                        <span class="product__base-title--num">9.8<span class="product__base-title--symbol">元</span></span>
                    </div>
                    <div class="product__base--item">
                        <span class="product__base-title--sub">营销</span>
                        <span class="product__base-title--num">40<span class="product__base-title--symbol">%</span></span>
                    </div>
                </div>
                <div class="product__other">
                    <div class="product__ticket">
                        <span class="product__ticket--bg">券</span>
                        <span class="product__ticket-num">￥20</span>
                    </div>
                    <div class="product__count">
                        销量
                        <spam class="product__count--num">12332</spam>
                    </div>
                    <img src="../assets/images/platform.png" class="product__platform" alt="">
                </div>

                <p class="product__time">活动日期：01.20-01.30</p>

                <div class="product__float">生成朋友圈文案</div>
            </div>
            <div class="pagination-box">
                <pagination></pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import pagination from 'components/pagination'
    export default {
        data(){
            return {}
        },
        computed: {},
        methods: {},
        mounted(){
        },
        components: {
            pagination
        },
        filters: {}
    }
</script>
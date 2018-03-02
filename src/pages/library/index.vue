<style scoped>
    .search-box {
        height: 80px;
        padding: 20px;
        box-sizing: border-box;
        background: #ffffff;
        font-size: 14px;
        text-align: center;
    }

    .search-box__logo {
        float: left;
    }

    .search-box__input {
        display: inline-block;
        height: 36px;
        float: left;
        margin-left: 210px;
    }

    .search-box__input--type {
        width: 95px;
        height: 36px;
        line-height: 36px;
        background: #5dcdde;
        text-align: center;
        float: left;
    }

    .search-box__input input {
        width: 270px;
        height: 36px;
        float: left;
        padding: 0 20px;
        margin: 0;
        box-sizing: border-box;
        font-size: 14px;
    }

    .search-box__input input:focus {
        outline: 0;
    }

    .search-box__input--button {
        width: 36px;
        height: 36px;
        float: left;
        background: #5dcdde;
        background-image: url("../assets/images/icon_search.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 19px 19px;
    }


    .box {
        overflow: hidden;
    }

    .banner-left {
        float: left;
        margin: 20px 0;
    }

    .banner-right {
        float: right;
        margin: 20px 0;
    }

    .tabs {
        width: 100%;
        height: 50px;
        background: #34495E;
        overflow: hidden;
    }

    .tabs__item {
        width: 25%;
        float: left;
        line-height: 50px;
        text-align: center;
        font-family: PingFangHK-Regular;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0;
        cursor: pointer;
    }

    .tabs__item--active {
        background: #66D3E2;
        border-radius: 3px;
    }

    .query {
        background: #ffffff;
        padding: 24px 46.5px;
        position: relative;
    }

    .category {
        overflow: hidden;
        padding: 5px 0;
    }

    .category__caption {
        width: 80px;
        display: block;
        font-family: PingFangHK-Regular;
        font-size: 12px;
        line-height: 22px;
        color: #000000;
        letter-spacing: 0;
        float: left;
        padding-bottom: 999px;
        margin-bottom: -999px;
    }

    .category__list {
        list-style: none;
        display: block;
        padding: 0;
        margin: 0;
        float: left;
        width: 905px;
        padding-bottom: 999px;
        margin-bottom: -999px;
        margin-left: -20px;
        font-size: 12px;

    }

    .category__item {
        display: inline-block;
        font-family: PingFangHK-Regular;
        font-size: 12px;
        line-height: 20px;
        color: #000000;
        letter-spacing: 0;
        margin: 0 10px;
    }

    .category__item--check {
        width: 16px;
        height: 16px;
        background: #DEE2E5;
        border-radius: 3px;
        padding: 0;
        margin: 0;
        position: relative;
        top: 3px;
    }

    .query__other {
        font-size: 12px;
        position: absolute;
        right: 40px;
        bottom: 29px;
    }

    .query__other label {
        margin-left: 20px;
    }

    .query__input-box {
        height: 24px;
        border: 1px solid #D2D6D9;
        border-radius: 3px;
        overflow: hidden;
        font-size: 12px;

    }

    .query__input-box input {
        border: 0;
        outline: 0;
        width: 35px;
        padding: 0;
        margin: 0;
    }

    .query__button {
        background: #66D3E2;
        border: 1px solid #66D3E2;
        border-radius: 3px;
        width: 38px;
        height: 24px;
        padding: 0;
        outline: 0;
    }

    .sort-box {
        height: 37px;
        background: #EAEEF1;
        margin-top: 13px;
    }

    .sort-box__item {
        width: 123px;
        line-height: 37px;
        text-align: center;
        display: inline-block;
        margin: 0;
        cursor: pointer;
    }

    .sort-box__item--active {
        background: #66D3E2;
        border-radius: 3px;
    }

    .product-box {
        margin-left: -37px;
        overflow: hidden;
    }

    .product {
        width: 186.3px;
        margin-top: 30px;
        margin-left: 36px;
        text-align: center;
        background: #ffffff;
        float: left;
    }

    .product__image {
        width: 186px;
    }

    .product__time {
        width: 156px;
        line-height: 25px;
        font-size: 12px;
        opacity: 0.8;
        background: #34495E;
        border-radius: 100px;
        text-align: center;
        margin: 20px auto 14px auto;
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
    }

    .product__base:before {
        content: '';
        width: 100%;
        display: block;
        border: 1px solid #ECEDEF;
        position: absolute;
        bottom: 0;
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
        font-size: 10px;
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


    .pagination-box {
        clear: both;
        padding: 50px 130px;
    }
</style>
<template>
    <div>
        <div class="search-box">
            <div class="container">
                <img src="../assets/images/logo.png" alt="" class="search-box__logo">
                <div class="search-box__input">
                    <div class="search-box__input--type">标题</div>
                    <input type="text" placeholder="请输入搜索内容">
                    <div class="search-box__input--button"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <img src="../assets/images/banner.png" alt="" class="banner-left">
            <img src="../assets/images/banner.png" alt="" class="banner-right">
            <div class="tabs">
                <div class="tabs__item">实时上新</div>
                <div class="tabs__item">实时销量榜</div>
                <div class="tabs__item tabs__item--active">全天销量榜</div>
                <div class="tabs__item">预告汇总</div>
            </div>
            <div class="query">
                <div class="category">
                    <span class="category__caption">商品分类：</span>
                    <ul class="category__list">
                        <li class="category__item">全部（47480）</li>
                        <li class="category__item">女装（4320）</li>
                        <li class="category__item">男装（3243）</li>
                        <li class="category__item">内衣（3232）</li>
                        <li class="category__item">化妆品（322）</li>
                        <li class="category__item">居家（323）</li>
                        <li class="category__item">鞋包配饰（4343）</li>
                        <li class="category__item">美食（3222）</li>
                        <li class="category__item">文体车品（432）</li>
                        <li class="category__item">数码家电（123123）</li>
                    </ul>
                </div>
                <div class="category">
                    <span class="category__caption">高级筛选：</span>
                    <ul class="category__list">
                        <li class="category__item">
                            <label>
                                <input type="checkbox" class="category__item--check">淘抢购
                            </label>
                        </li>
                        <li class="category__item">
                            <label>
                                <input type="checkbox" class="category__item--check">聚划算
                            </label>
                        </li>
                        <li class="category__item">
                            <label>
                                <input type="checkbox" class="category__item--check">金牌卖
                            </label>
                        </li>
                        <li class="category__item">
                            <label>
                                <input type="checkbox" class="category__item--check">海掏家
                            </label>
                        </li>
                        <li class="category__item">
                            <label>
                                <input type="checkbox" class="category__item--check">视频
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="query__other">
                    <label for="">价格</label>
                    <span class="query__input-box">￥<input type="text" min="0"></span> —
                    <span class="query__input-box">￥<input type="text" min="0"></span>


                    <label for="">佣金比例 ≥</label>
                    <span class="query__input-box">&nbsp;%&nbsp;<input type="text" min="0" maxlength="2"></span>

                    <label for="">销量 ≥</label>
                    <span class="query__input-box"><input type="text" min="0"></span>

                    <button class="query__button">筛选</button>
                </div>
            </div>
            <div class="sort-box">
                <div class="sort-box__item sort-box__item--active">综合</div>
                <div class="sort-box__item">最新</div>
                <div class="sort-box__item">销量</div>
                <div class="sort-box__item">领券量</div>
                <div class="sort-box__item">佣金比例</div>
                <div class="sort-box__item">价格</div>
            </div>
            <div class="product-box">
                <div class="product" v-for="item in vo.productList">
                    <img class="product__image" src="../assets/images/product1.png" alt="">
                    <div class="product__time">01-20 15:00开始</div>
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
                </div>
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
            return {
                vo: {
                    productList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]
                }
            }
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
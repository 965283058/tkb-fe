<style scoped>
    .top {
        background: #ffffff;
    }

    .top__item {
        line-height: 40px;
        margin-right: 50px;
    }

    .top__item--right {
        float: right;
        line-height: 40px;
    }

    .nav {
        height: 80px;
        background: #34495E;
        line-height: 80px;
        color: #000000;
    }

    .nav__item {
        display: inline-block;
        float: left;
        margin-right: 60px;
        cursor: pointer;
    }

    .nav__item--menu {
        position: relative;
    }

    .nav__item--menu:after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border: 2px solid #ffffff;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(135deg);
        position: absolute;
        top: 32px;
        right: -20px;
        cursor: pointer;
    }

    .nav__menu {
        position: absolute;
        width: 190px;
        background: #FFFFFF;
        box-shadow: 0 2px 0 0 #EAEEF1;
        border-radius: 3px;
        display: none;
        top: 87px;
        z-index: 10;
        overflow: hidden;
    }

    .nav__menu-item {
        width: 100%;
        height: 54px;
        line-height: 54px;
        text-align: center;
        border-bottom: 1px solid #E9EFF7;
    }

    .nav__menu-item:hover {
        background: #66D3E2;
    }

    .nav__menu-item--active {
        background: #66D3E2;
    }

    .menber {
        height: 80px;
        box-sizing: border-box;
        display: table-cell;
        float: right;
        vertical-align: middle;
    }

    .menber:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .menber__head-img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }

    .menber__name {
        display: inline-block;
        position: relative;
        line-height: 80px;
        margin-right: 50px;
    }

    .menber__name:after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border: 2px solid #ffffff;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(135deg);
        position: absolute;
        top: 30px;
        right: -30px;
        cursor: pointer;
    }

    .menber__button {
        min-width: 93px;
        box-sizing: border-box;
        background: #66D3E2;
        border: 2px solid #66D3E2;
        border-radius: 3px;
        line-height: 40px;
        padding: 0 19px;
        cursor: pointer;
    }

    .menber__button--reg {
        background: transparent;
        border: 2px solid #66D3E2;
        border-radius: 3px;
        line-height: 40px;
        padding: 0 19px;
        margin-right: 20px;
    }
</style>
<template>
    <div>
        <div class="top">
            <div class="container">
                <span class="top__item">淘客邦交流群：88997762</span>
                <span class="top__item">商家合作</span>
                <span class="top__item--right">开放API接口</span>
            </div>
        </div>
        <div class="nav">
            <div class="container" style="height: 80px;">
                <div class="nav__item">精选库</div>
                <div class="nav__item">朋友圈</div>
                <div class="nav__item">精选文章</div>
                <div class="nav__item">淘客邦APP</div>
                <div class="nav__item nav__item--menu">
                    <span>帮助中心</span>
                    <div class="nav__menu">
                        <div class="nav__menu-item nav__menu-item--active">新手入门</div>
                        <div class="nav__menu-item">入驻须知</div>
                        <div class="nav__menu-item">放单规则</div>
                        <div class="nav__menu-item">放单流程</div>
                    </div>
                </div>
                <div class="nav__item">关于我们</div>
                <div class="menber">
                    <!--  <img src="http://imgtu.5011.net/uploads/content/20170330/3866631490864851.jpg" alt="" class="menber__head-img">
                      <span class="menber__name">月影传说</span>
                      <button class="menber__button">放单中心</button>-->

                    <button class="menber__button menber__button--reg">注册</button>
                    <button class="menber__button">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        methods: {},
        mounted(){
        },
        components: {},
        filters: {}
    }
</script>
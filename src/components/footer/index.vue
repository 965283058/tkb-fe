<style scoped>
    .footer {
        width: 100%;
        background: #34495E;
        clear: both;

    }

    .footer .container {
        padding: 36px 135px 14px 135px;
    }

    .footer-block {
        display: inline-block;
        color: #000000;
        font-size: 12px;
        line-height: 20px;
        margin-right: 120px;
    }

    .footer-block--last {
        margin-left: 150px;
        margin-right: 0;
    }

    .footer-block__title {
        opacity: 0.4;
        font-size: 14px;
        line-height: 24px;
        margin: 0;
    }

    .footer-block__item {
        margin: 0;
    }

    .footer-block__item--btn {
        margin: 5px 0;
    }

    .footer-block__btn {
        border: 1px solid rgba(228, 231, 231, 0.5);
        border-radius: 2px;
        line-height: 24px;
        padding: 0 5px;
        margin-left: 5px;
        cursor: pointer;
    }
    .footer__text {
        display: block;
        text-align: center;
        opacity: 0.4;
        font-size: 12px;
        line-height: 50px;
        margin: 0;
    }
</style>
<template>
    <div class="footer">
        <div class="container">
            <dl class="footer-block">
                <dt class="footer-block__title">淘客邦</dt>
                <dd class="footer-block__item">公司简介</dd>
                <dd class="footer-block__item">企业文化</dd>
                <dd class="footer-block__item">合作关系</dd>
                <dd class="footer-block__item">加入我们</dd>
            </dl>
            <dl class="footer-block">
                <dt class="footer-block__title">淘客邦</dt>
                <dd class="footer-block__item">CMS网站</dd>
                <dd class="footer-block__item">导购APP</dd>
                <dd class="footer-block__item">9块9包邮</dd>
                <dd class="footer-block__item">每日精选</dd>
            </dl>
            <dl class="footer-block">
                <dt class="footer-block__title">淘客邦</dt>
                <dd class="footer-block__item">新手入门</dd>
                <dd class="footer-block__item">常见问题</dd>
                <dd class="footer-block__item">CMS教程</dd>
                <dd class="footer-block__item">常见教程</dd>
            </dl>

            <dl class="footer-block footer-block--last">
                <dt class="footer-block__title">在线咨询</dt>
                <dd class="footer-block__item footer-block__item--btn">售前咨询: <span class="footer-block__btn">QQ交谈</span>
                </dd>
                <dd class="footer-block__item footer-block__item--btn">售后咨询: <span class="footer-block__btn">QQ交谈</span>
                </dd>
                <dd class="footer-block__item">周一到周日：9:00到18:00</dd>
            </dl>
            <p class="footer__text">© CopyRight 2011-2018 | 大淘客联盟 dataoke.com | 蜀ICP备15025833号 |
                增值电信业务经营许可证：川B2-20170282</p>
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
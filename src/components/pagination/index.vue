<style scoped>
    .pagination {
        font-size: 12px;
        overflow: hidden;
    }

    .pagination__item {
        display: inline-block;
        height: 22px;
        border: 1px solid #E4E7E7;
        border-radius: 2px;
        padding: 0 8px;
        line-height: 22px;
        cursor: pointer;
        float: left;
        margin-left: 3px;
    }

    .pagination__item--disabled {
        cursor: not-allowed;
    }

    .pagination__item--active {
        background: #66D3E2;
    }

    .pagination__pre {
        position: relative;
        padding: 0 10px 0 20px;
    }

    .pagination__pre:before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border: 1px solid #70838D;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(-135deg);
        position: absolute;
        left: 10px;
        top: 7px;
        z-index: 1;
    }

    .pagination__next {
        position: relative;
        padding: 0 20px 0 10px;
    }

    .pagination__next:after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border: 1px solid #70838D;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(45deg);
        position: absolute;
        right: 10px;
        top: 7px;
        z-index: 1;
    }

    .pagination__current {
        line-height: 24px;
        border: 0;
        margin-left: 40px;
        float: left;
    }

    .pagination__input {
        width: 60px;
        height: 22px;
        border: 1px solid #D2D6D9;
        border-radius: 11px;
        display: inline-block;
        overflow: hidden;
        float: left;
        position: relative;
        margin-left: 36px;
    }

    .pagination__input--typing {
        width: 39px;
        height: 22px;
        padding-left: 7px;
        border: 0;
        box-sizing: border-box;
        outline: 0;
    }

    .pagination__input--btn {
        width: 22px;
        height: 11px;
        background: #66D3E2;
        position: absolute;
        right: 0;
        top: 0;
    }

    .pagination__input--btn:active {
        opacity: 0.7;
    }

    .pagination__input--btn:after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border: 1px solid #f0f2f5;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(-45deg);
        position: absolute;
        right: 10px;
        top: 5px;
        z-index: 1;
    }

    .pagination__input--btn-last {
        top: 11px;
    }

    .pagination__input--btn-last:after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border: 1px solid #ffffff;
        border-left: 0;
        border-bottom: 0;
        transform: rotate(135deg);
        position: absolute;
        right: 10px;
        top: 0px;
        z-index: 1;
    }
</style>
<template>
    <div class="pagination">
        <span class="pagination__item pagination__pre pagination__item--disabled">首页</span>
        <span class="pagination__item pagination__pre">上一页</span>
        <span class="pagination__item pagination__num">1</span>
        <span class="pagination__item pagination__num pagination__item--active">2</span>
        <span class="pagination__item pagination__num">3</span>
        <span class="pagination__item pagination__num">4</span>
        <span class="pagination__item pagination__num">...</span>
        <span class="pagination__item pagination__num">5</span>
        <span class="pagination__item pagination__next">下一页</span>
        <span class="pagination__item pagination__next">尾页</span>

        <label class="pagination__item pagination__current">页次：2/342页</label>
        <span class="pagination__input">
                <input type="text" class="pagination__input--typing">
                <span class="pagination__input--btn"></span>
                <span class="pagination__input--btn pagination__input--btn-last"></span>
            </span>
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
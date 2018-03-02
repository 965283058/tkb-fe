<style>
    html {
        height: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        margin: 0;
        height: 100%;
        font-size: 14px;
        /*overflow: hidden;*/
        font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
        display: block;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    progress {
        vertical-align: baseline;
    }
    template, [hidden] {
        display: none;
    }
    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        text-decoration: none;
    }
    a:active, a:hover {
        outline-width: 0;
    }
    abbr[title] {
        text-decoration: underline;
        text-decoration: underline dotted;
    }
    b, strong {
        font-weight: bolder;
    }
    dfn {
        font-style: italic;
    }
    small {
        font-size: 80%;
    }
    sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    img {
        border-style: none;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    code, kbd, pre, samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    pre {
        overflow: auto;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
        vertical-align: middle;
        outline: none;
    }
    button, input,
    input {
        overflow: visible;
    }
    button, select {
        text-transform: none;
    }
    button, html [type="button"],
    [type="reset"], [type="submit"] {
        -webkit-appearance: button;
    }
    [disabled] {
        cursor: default;
    }
    [type="checkbox"], [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    textarea {
        overflow: auto;
        resize: none;
        vertical-align: top;
    }
    optgroup {
        font-weight: bold;
    }
    input, select, textarea {
        outline: 0;
    }
    textarea, input {
        -webkit-user-modify: read-write-plaintext-only;
    }
    input::-ms-clear, input::-ms-reveal {
        display: none;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    td, th {
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6, p, figure, form, blockquote {
        margin: 0;
    }
    ul, ol, li, dl, dd {
        margin: 0;
        padding: 0;
    }
    ul, ol {
        list-style: none outside none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: normal;
        line-height: 1.5;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #F3F3F3;
    }
    input,
    select{
        padding: 0;
        border: 0 none;
        -webkit-appearance: none;
        background-color: transparent;
    }
    .vt-cell {
        height: 100px;
        padding: 0 0 0 40px;
    }
    .vt-cell:before {
        border-color: #DEDEDE;
    }
    .vt-cell:after {
        border-color: #DEDEDE;
    }
    .vt-cell__icon {
        margin-right: 30px;
    }
    .vt-cell--link .vt-cell__label:after {
        right: 40px;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        border-top: 2px solid #B1B1B1; /*no*/
        border-right: 2px solid #B1B1B1; /*no*/
        transform: rotate(45deg);
    }
    .vt-cell--access {
        background-color: #fff;
    }
    .vt-alert__container {
        width: 510px;
        min-width: 510px;
        padding-top: 60px;
        border-radius: 14px;
    }
    .vt-alert__title {
        color: #4d4d4d;
        font-size: 40px;
        line-height: 50px;
        padding: 0 30px;
    }
    .vt-alert__title > * {
        margin-bottom: 20px;
    }
    .vt-alert__info {
        color: #4d4d4d;
        font-size: 30px;
        line-height: 40px;
    }
    .vt-alert__info > * {
        display: inline-block;
        text-align: left;
    }
    .vt-alert__button{
        margin-top: 55px;
        color: #fff;
        height: 80px;
        font-size: 40px;
        line-height: 80px;
        background-image: linear-gradient(225deg, #4AC3FD 0%, #1A9FDE 100%);
    }
    .text-overflow {
        display: -webkit-box;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .filter {
        filter: blur(15px);
        transition: filter .3s;
    }
    .slideInRight-enter {
        transform: translateX(100%);
    }
    .slideOutRight-enter-active,
    .slideInRight-enter-active {
        width: 100%;
        transition: transform .4s ease;
    }
    .slideInRight-leave-active {
        transform: translateX(-100%);
        transition: transform .4s ease;
    }
    .slideOutRight-enter {
        transform: translateX(-100%);
    }
    .slideOutRight-leave-active {
        transform: translateX(100%);
        transition: transform .4s ease;
    }
    .vt-main{
        height: auto;
    }
    .vt-wrap{
        position: static;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
    }
</style>

<template>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</template>

<script>
    let urls = []

    export default {
        data() {
            return {
                transitionName: ''
            }
        },
        watch: {
            '$route' (to, from) {
                if(urls[urls.length - 2] === to.path) {
                    this.transitionName = 'slideOutRight'
                    urls.splice(urls.lastIndexOf(to.path), 1)
                    urls.splice(urls.lastIndexOf(from.path), 1)
                }else {
                    if(urls.length > 0) {
                        this.transitionName = 'slideInRight'
                    }
                }

                urls.push(this.$route.path)
            }
        },
        mounted() {
            // stopBouncingScroll()
        }
    }

    function stopBouncingScroll(){
        if(supportScrolling()){
            let startY, startX, curY, curX

            window.addEventListener('touchstart', (evt) => {
                startX = evt.touches ? evt.touches[0].screenX : evt.screenX
                startY = evt.touches ? evt.touches[0].screenY : evt.screenY
            }, false)

            window.addEventListener('touchmove', (evt) => {
                let el = evt.target

                while(el !== document.body){
                    let style, canScroll, overflowY, height, scrolling, isScrollable

                    if(!(style = window.getComputedStyle(el))){
                        break
                    }

                    canScroll = el.scrollHeight > el.offsetHeight
                    overflowY = style.getPropertyValue('overflow-y')
                    height = parseInt(style.getPropertyValue('height'), 10)
                    scrolling = style.getPropertyValue('-webkit-overflow-scrolling')
                    isScrollable = scrolling === 'touch' && (overflowY === 'auto' || overflowY === 'scroll')

                    if(isScrollable && canScroll){
                        let isAtTop, isAtBottom

                        curX = evt.touches ? evt.touches[0].screenX : evt.screenX
                        curY = evt.touches ? evt.touches[0].screenY : evt.screenY

                        isAtTop = (startY <= curY && el.scrollTop === 0)
                        isAtBottom = (startY >= curY && Math.abs(curY - startY) > Math.abs(curX - startX) && (el.scrollHeight - el.scrollTop) <= (height + 5))

                        if (isAtTop || isAtBottom) {
                            evt.preventDefault()
                        }
                        return
                    }

                    el = el.parentNode
                }

                curX = evt.touches ? evt.touches[0].screenX : evt.screenX
                curY = evt.touches ? evt.touches[0].screenY : evt.screenY

                if(Math.abs(curY - startY) > Math.abs(curX - startX)){
                    evt.preventDefault()
                }
            }, false)
        }
    }

    function supportScrolling() {
        let scrollSupport, element

        element = document.createElement('div')
        document.documentElement.appendChild(element)
        element.style.WebkitOverflowScrolling = 'touch'
        scrollSupport = 'getComputedStyle' in window && window.getComputedStyle(element)['-webkit-overflow-scrolling'] === 'touch'
        document.documentElement.removeChild(element)

        return scrollSupport
    }
</script>

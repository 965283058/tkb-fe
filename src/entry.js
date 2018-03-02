import Vue from 'vue'
import App from './App'
import router from './router'
import http from 'vue-http'
import Loading from 'vt-loading'
import Confirm from 'vt-confirm'
import Alert from 'vt-alert'
import Validator from 'vt-validator'
import Cell from 'vt-cell'
import Layout from 'components/layout'
Vue.use(http, {
    duration:1,
    root: process.env.API_ROOT,
    timeout: 150000,
    loading: (bool) => {
        Vue.loading(bool)
    },
    error: (text) => Vue.alert({ title:"错误",text })
})
Vue.component('Layout', Layout)
Vue.component('Loading', Loading)
Vue.component('Confirm', Confirm)
Vue.component('Alert', Alert)
Vue.component('Validator', Validator)
Vue.component('Loading', Loading)
Vue.component('Cell', Cell)

Validator.addRule('phone', (val, element, rule, ctx) => {
    return /^(13|14|15|17|18)\d{9}$/g.test(val.toLowerCase())
}, '{{name}}格式错误')


new Vue({
    router,
    ...App
}).$mount('#app')
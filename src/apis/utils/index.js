import Vue from 'vue'
import router from '../../router'
export const post = function (url, params, opts = {}) {
    return Vue.http.post(url, JSON.stringify(params), opts).then(result, err)
}

export const get = function (url, params, opts = {}) {
    return Vue.http.get(url, Object.assign({}, {params: params}, opts)).then(result, err)
}


let result = response => {
    // 10000 = session失效
    if (response.code == '10000') {
        router.push({
            path: '/transit',
            query: JSON.parse(localStorage.getItem('kaniuParams'))
        })
        return Promise.reject(null)
    } else if (response.code != '20000') {
        return Promise.reject(response)
    } else {
        return Promise.resolve(response.data)
    }
}

let err = response => {
    // 处理http状态码
    if (`${response.status}`.charAt(0) === '4') {
        return Promise.reject({message: '请求资源不存在'})
    } else if (`${response.status}`.charAt(0) === '5') {
        return Promise.reject({message: '服务器繁忙，请稍后再试'})
    }
}
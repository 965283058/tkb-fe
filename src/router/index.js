import Vue from 'vue'
import routes from './map'
import Router from 'vue-router'

Vue.use(Router)
let router = new Router({
	base: process.env.ROUTER_ROOT,
	mode: 'history',
	routes: Object.keys(routes).reduce((previous, current) => {
		return (previous.push({path: current, ...routes[current]}), previous)
	}, []).concat({
		path: '*',
		meta: {
			title: '404 - Not Found'
		},
		component: {
			render(h){
				return h('h3', '404 - Not Found')
			}
		}
	}),
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0}
	}
})

router.beforeEach(({matched}, from, next) => {
	matched.filter(({meta}) => meta.title).map(({meta}) => changeTitle(meta.title))
	next()
})

function changeTitle(title) {
    document.title = title
    let id = '__iframe__'
    let iframe = document.getElementById(id)
    if (!iframe) {
        iframe = document.createElement('iframe')
        iframe.src = 'https://www.baidu.com/favicon.ico' // 这个界面比较小
		iframe.width = 0
        iframe.height = 0
        iframe.frameborder = 0
        iframe.style.border = 0
        iframe.scolling = 'no'
        iframe.style.overflow = 'hidden'
        iframe.style.lineHeight = 0
        iframe.style.fontSize = 0
        iframe.style.margin = 0
		iframe.style.padding = 0
		iframe.style.position = 'fixed'
        iframe.id = id
        document.body.appendChild(iframe)
    } else {
        iframe.src = iframe.src
    }
}

export default router

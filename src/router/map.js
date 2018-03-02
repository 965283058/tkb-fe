export default {
    '/': {
        meta: {
            title: '产品详情'
        },
        component: (resolve) => {
            require(['pages/index.vue'], resolve)
        },
        children: [
            {
                meta: {
                    title: '选品库'
                },
                path: '/library',
                component: (resolve) => {
                    require(['pages/library'], resolve)
                }
            },
            {
                meta: {
                    title: '朋友圈'
                },
                path: '/club',
                component: (resolve) => {
                    require(['pages/club'], resolve)
                }
            }]
    },
}

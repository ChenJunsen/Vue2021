import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from '../view/index'

Vue.use(VueRouter)

const routes = [
    {
        name: 'pageA',
        path: '/',
        component: pageA
    },
    {
        name: 'pageB',
        path: '/pageB',
        component: () => import('../view/pageB')
    }
]

const router = new VueRouter({routes})

export default router


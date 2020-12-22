import Vue from 'vue'
import VueRouter from 'vue-router'
import pageC from '../view/index'

Vue.use(VueRouter)

const routes = [
    {
        name: 'pageC',
        path: '/',
        component: pageC
    },
    {
        name: 'pageD',
        path: '/pageD',
        component: () => import('../view/pageD')
    }
]

const router = new VueRouter({routes})

export default router


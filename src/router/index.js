import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)
const routes = [
    {
        name: 'DashBoard',
        path: '/',
        icon: 'mdi-view-dashboard',
        component: Dashboard
    },
    {
        name: 'Email',
        path: '/email',
        icon: 'mdi-email',
        component: () => import(/* webpackChunkName: "email" */ '../views/Email.vue'),

        children: [
            {
                name: 'Inbox',
                path: 'inbox',
                icon: 'mdi-inbox-full',
                component: () => import(/* webpackChunkName: "inbox" */ '../views/Inbox.vue')
            },
            {
                name: 'EmailCompose',
                path: 'email-compose',
                icon: 'mdi-email-edit',
                component: () => import(/* webpackChunkName: "email-compose" */ '../views/EmailCompose.vue')
            }]
    },
    {
        name: 'Page',
        path: '/page',
        icon: 'mdi-page-layout-body',
        component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue'),
        children: [
            {
                name: 'Pricing',
                path: 'pricing',
                icon: 'mdi-receipt-text',
                component: () => import(/* webpackChunkName: "invoice" */ '../views/Pricing.vue')
            },
            {
                name: 'Chart',
                path: 'chart',
                icon: 'mdi-chart-pie',
                component: () => import(/* webpackChunkName: "chart" */ '../views/Chart.vue')
            },
            {
                name: 'Receipet',
                path: 'receipt',
                icon: 'mdi-receipt-text-plus-outline',
                component: () => import(/* webpackChunkName: "receipet" */ '../views/Receipet.vue')
            },
        ]
    },
    {
        name: 'Calender',
        path: '/calender',
        icon: 'mdi-calendar-month',
        component: () => import(/* webpackChunkName: "calender" */ '../views/Calender.vue')
    },
    {
        name: 'Forms',
        path: '/forms',
        icon: 'mdi-page-layout-body',
        component: () => import(/* webpackChunkName: "forms" */ '../views/Forms.vue'),
        children: [
            {
                name: 'LoginForm',
                path: 'loginform',
                icon: 'mdi-receipt-text',
                component: () => import(/* webpackChunkName: "loginform" */ '../views/LoginForm.vue')
            },
            {
                name: 'RegisterForm',
                path: 'registerform',
                icon: 'mdi-chart-pie',
                component: () => import(/* webpackChunkName: "registerform" */ '../views/RegisterForm.vue')
            },
            {
                name: 'UploadForm',
                path: 'uploadform',
                icon: 'mdi-receipt-text-plus-outline',
                component: () => import(/* webpackChunkName: "uploadform" */ '../views/UploadForm.vue')
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

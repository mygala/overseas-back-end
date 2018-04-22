import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [

        // 登陆
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },

        // 仪表盘
        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },

        // 默认路由
        {
            path: '/',
            redirect: 'Login'
        },

        // 错误路径跳转登陆
        {
            path: "*",
            redirect: 'Login'
        }
    ]
});

export default router;
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next();

    //获取浏览器中的Token
    const tokenStr = window.sessionStorage.getItem('token')

    if (!tokenStr) return next('/login')

    next()

})

export default router
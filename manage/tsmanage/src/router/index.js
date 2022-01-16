import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/Login/Login.vue")
    },
    {
        path: '/password',
        name: 'password',
        component: () => import('@/views/Login/Password.vue')
    },
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    const tstoken = localStorage.tsToken ? true : false;
    if (tstoken)
        next();
    else {
        if (to.path === '/login' || to.path === '/password') {
            next();
        }
        else {
            next({ path: '/login' });
        }
    }
});
export default router;
//# sourceMappingURL=index.js.map
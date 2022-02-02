"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncRouterMap = void 0;
const vue_1 = __importDefault(require("vue"));
const vue_router_1 = __importDefault(require("vue-router"));
const Index_vue_1 = __importDefault(require("../views/Layout/Index.vue"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
vue_1.default.use(vue_router_1.default);
/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
* name:'router-name'             路由名称，必须填写
* meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
  }
**/
exports.asyncRouterMap = [
    {
        path: '/',
        name: 'dashboard',
        component: Index_vue_1.default,
        hidden: true,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: { title: '首页', icon: 'fa fa-home' },
                component: () => Promise.resolve().then(() => __importStar(require('@/views/Home.vue')))
            }
        ]
    },
    {
        path: '/dataManage',
        name: 'dataManage',
        hidden: true,
        meta: { title: '数据管理', icon: 'fa fa-database' },
        component: Index_vue_1.default,
        redirect: '/tableData',
        children: [
            {
                path: '/tableData',
                name: 'tableData',
                meta: { title: '表格管理', icon: 'fa fa-table' },
                component: () => Promise.resolve().then(() => __importStar(require('@/views/DataManage/TableData.vue')))
            },
            {
                path: '/chartsData',
                name: 'chartsData',
                meta: { title: '图表管理', icon: 'fa fa-bar-chart' },
                component: () => Promise.resolve().then(() => __importStar(require('@/views/DataManage/ChartsData.vue')))
            },
            {
                path: '/formData',
                name: 'formData',
                meta: {
                    title: '表单管理',
                    icon: 'fa fa-file-text-o',
                    roles: ['admin', 'editor']
                },
                component: () => Promise.resolve().then(() => __importStar(require('@/views/DataManage/FormData.vue')))
            }
        ]
    },
    {
        path: '/userManage',
        name: 'userManage',
        component: Index_vue_1.default,
        hidden: true,
        redirect: '/accountData',
        children: [
            {
                path: '/accountData',
                name: 'accountData',
                meta: { title: '账户管理', icon: 'fa fa-user-plus', roles: ['admin'] },
                component: () => Promise.resolve().then(() => __importStar(require('@/views/UserManage/AccountData.vue')))
            }
        ]
    },
    {
        path: '/user',
        component: Index_vue_1.default,
        redirect: '/userInfo',
        hidden: false,
        children: [
            {
                path: '/userInfo',
                name: 'userInfo',
                meta: { title: '个人中心' },
                component: () => Promise.resolve().then(() => __importStar(require('@/views/UserManage/UserInfo.vue')))
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        hidden: false,
        meta: { title: '404' },
        component: () => Promise.resolve().then(() => __importStar(require('@/views/404.vue')))
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/login',
        name: 'login',
        hidden: false,
        meta: { title: '系统登录' },
        component: () => Promise.resolve().then(() => __importStar(require('@/views/Login/Login.vue')))
    },
    {
        path: '/password',
        name: 'password',
        hidden: false,
        meta: { title: '找回密码' },
        component: () => Promise.resolve().then(() => __importStar(require('@/views/Login/Password.vue')))
    }
];
const router = new vue_router_1.default({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: exports.asyncRouterMap
});
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.tsToken ? true : false;
    if (to.path == '/login' || to.path == '/password') {
        next();
    }
    else {
        if (isLogin) {
            const decoded = (0, jwt_decode_1.default)(localStorage.tsToken);
            const { key } = decoded;
            // 权限判断
            if (hasPermission(key, to)) {
                next();
            }
            else {
                next('/404'); // 没有权限进入
            }
        }
        else {
            next('/login');
        }
    }
});
/**
 * 判断是否有权限
 * @param roles 当前角色
 * @param route 当前路由对象
 * */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        // 如果meta.roles是否包含角色的key值,如果包含那么就是有权限,否则无权限
        return route.meta.roles.some((role) => role.indexOf(roles) >= 0);
    }
    else {
        // 默认不设置有权限
        return true;
    }
}
exports.default = router;

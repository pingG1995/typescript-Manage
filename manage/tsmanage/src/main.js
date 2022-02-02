"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const App_vue_1 = __importDefault(require("./App.vue"));
const router_1 = __importDefault(require("./router"));
const store_1 = __importDefault(require("./store"));
const element_ui_1 = __importDefault(require("element-ui"));
require("element-ui/lib/theme-chalk/index.css");
const http_1 = __importDefault(require("./utils/http")); // default 可以选取任意名称
vue_1.default.use(element_ui_1.default);
vue_1.default.config.productionTip = false;
vue_1.default.prototype.$axios = http_1.default;
new vue_1.default({
    router: router_1.default,
    store: store_1.default,
    render: h => h(App_vue_1.default)
}).$mount('#app');

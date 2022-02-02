"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const vuex_1 = __importDefault(require("vuex"));
const state_1 = __importDefault(require("./state"));
const actions_1 = __importDefault(require("./actions"));
const getters_1 = __importDefault(require("./getters"));
const mutations_1 = __importDefault(require("./mutations"));
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: state_1.default,
    getters: getters_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default,
    // modules,
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ROUTERS(state, routers) {
        state.routers = routers;
    }
};
exports.default = mutations;

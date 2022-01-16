import jwt_decode from 'jwt-decode';
const actions = {
    async setUser({ state, commit }, user) {
        const decoded = jwt_decode(user);
        commit('SET_USER', decoded);
    }
};
export default actions;
//# sourceMappingURL=actions.js.map
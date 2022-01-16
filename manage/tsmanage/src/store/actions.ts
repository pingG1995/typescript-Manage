import {ActionTree} from 'vuex';
import jwt_decode from 'jwt-decode';
const actions:ActionTree<any,any>={
   async setUser({state,commit},user:any) {
    const decoded: any = jwt_decode(user);
       commit('SET_USER',decoded);
   }
}

export default actions;
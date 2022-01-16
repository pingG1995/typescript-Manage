import { GetterTree } from 'vuex'; 

const getters:GetterTree<any,any>={
    user(state:any):any{
        return state.user;
    },
    router(state:any):any {
        return state.router;
    }
}

export default getters;
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        msg:"hello vuex"
    },
    getters:{
        upMsg:state=>state.msg.toUpperCase()
    },
    mutations:{
        changeMsg(state,newMsg){
            state.msg = newMsg;
        }
    },
    actions:{
        
    }
})
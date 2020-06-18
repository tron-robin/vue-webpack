import Vue from 'vue';
import App from "./App";
import store from "./store";
import axios from "axios";
import router from "./router";

Vue.prototype.$http = axios;
new Vue({
    el:"#app",
    store,
    router,
    components:{ App },
    template:"<App/>"
})
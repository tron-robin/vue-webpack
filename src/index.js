import Vue from 'vue/dist/vue.js';
import Router from "vue-router";
import router from "./router/index.js"
import App from './App.vue';


Vue.use(Router);
new Vue({
    el:'#app',
    router,
    components: { App },
    template: '<App/>',
    mounted() {
        console.log(this)   
    }
})
import Router from "vue-router";

import Login from "../components/Login.vue"
let route = new Router({
    mode:"hash",
    routes:[
        {
            path:"/",
            name:'Login',
            component:Login
        }
    ]
})

export default route
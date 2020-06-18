import Vue from 'vue';
import Router from "vue-router";
import A from "../pages/A";
import B from "../pages/B";

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/',
            component:A
        },
        {
            path:'/A',
            component:A
        },
        {
            path:'/B',
            component:B
        }
    ]
});
router.beforeEach((to, from ,next)=>{
    if(to === from || (from === '/' && to === '/A')){
        return
    }else{
        next();
    }
})
export default router;
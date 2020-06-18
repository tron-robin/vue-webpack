<template>
    <div>
        <p>{{msg}}</p>
        <p>{{upMsg}}</p>
        <button @click="changeMsg('newMsg')">changeMsg</button>
        <p></p>
        <button @click="getData">getData</button>
        <router-view/>
        <p></p>
        <button @click="go('A')">切换到A</button>
        <button @click="go('B')">切换到B</button>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex"
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState(['msg']),
        ...mapGetters(['upMsg'])
    },
    methods:{
        ...mapMutations(['changeMsg']),
        getData(){
            this.$http('http://jsonplaceholder.typicode.com/users').then(res=>{
                console.log(res)
            })
        },
        go(path){
            this.$router.push(path);
        }
    }
}
</script>
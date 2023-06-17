<template>
    <div>
        <input type="text" ref="username" placeholder="UserName">
        <input type="text" ref="password" placeholder="Password">
        <button @click="login">LOG IN</button>
    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";
    export default {
        methods: {
            login() {
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login`,   
                    method:`POST`,
                    data:{
                        username:this.$refs("username"),
                        password:this.$refs("password")
                    }
                    }).then((response)=>{
                    console.log(response);
                    cookies.set("token")
                    }).catch((error)=>{
                    console.log(error);
                    });
            }
        },
    }
</script>

<style scoped>

</style>
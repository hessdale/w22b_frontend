<template>
    <div>
        <input type="text" ref="username" placeholder="UserName">
        <input type="text" ref="email" placeholder="Email">
        <input type="text" ref="password" placeholder="Password">
        <input type="text" ref="image_url" placeholder="Image URL">
        <input type="text" ref="bio" placeholder="Bio">
        <button @click="create_account">Create Account</button>
    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";
    export default {
        methods: {
            create_account() {
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login`,   
                    method:`POST`,
                    data:{
                        username:this.$refs("username"),
                        email:this.$refs("email"),
                        password:this.$refs("password"),
                        image_url:this.$refs("image_url"),
                        bio:this.$refs("bio")
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
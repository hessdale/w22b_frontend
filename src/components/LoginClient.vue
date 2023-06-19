<template>
    <div>
        <!--form for returning users with login button that has event listener that calls login function-->
        <h3>Returning Users</h3>
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
                //axios request that calls login procedure in db using values from form
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login`,   
                    method:`POST`,
                    data:{
                        username:this.$refs["username"].value,
                        password:this.$refs["password"].value
                    }
                    }).then((response)=>{
                    console.log(response);
                    cookies.set("token",response.data[0].token)
                    }).catch((error)=>{
                    console.log(error);
                    });
            }
        },
    }
</script>

<style scoped>

</style>
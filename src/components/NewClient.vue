<template>
    <div>
        <!--form for client to create account and button with event listener that calls function to create account in db-->
        <h3>Create Account</h3>
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
    export default {
        methods: {
            create_account() {
                //axios request that calls procedure to insert new client into db
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/client`,   
                    method:`POST`,
                    data:{
                        username:this.$refs["username"].value,
                        email:this.$refs["email"].value,
                        password:this.$refs["password"].value,
                        image_url:this.$refs["image_url"].value,
                        bio:this.$refs["bio"].value
                    }
                    }).then((response)=>{
                    console.log(response);
                    
                    }).catch((error)=>{
                    console.log(error);
                    });             
            }
        },
    }
</script>

<style scoped>

</style>
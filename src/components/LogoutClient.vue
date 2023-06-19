<template>
    <div>
        <!--button with event listener that calls function to log client out-->
<button @click="log_out">LOG OUT</button>
    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";
    export default {
        methods: {
            log_out() {
                //axios request that deletes token in db and stored token cookie
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login`,   
                    method:`DELETE`,
                    data:{
                        token:cookies.get("token")
                    }
                    }).then((response)=>{
                    cookies.set("token",undefined)
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
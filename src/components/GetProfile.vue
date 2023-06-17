<template>
    <div>

    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";

    export default {
        data() {
            return {
                profile: undefined
            }
        },
        mounted () {
            axios.request({
            url:`INSERT URL`,
            method:`GET`,
            data:{
                token:cookies.get("token")
            }
            }).then((response)=>{
            console.log(response);
            this.profile = response.data
            }).catch((error)=>{
            console.log(error);
            });
        },
    }
</script>

<style scoped>

</style>
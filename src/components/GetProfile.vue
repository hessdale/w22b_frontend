<template>
    <div>
    <article>
        <h3>{{ profile.username }}</h3>
        <p>{{ profile.email }}</p>
        <img :src="profile.image_url" alt="client profile picture" width="250px">
        <p>{{ profile.bio }}</p>
    </article>

    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";

    export default {
        data() {
            return {
                profile: undefined,
            }
        },
        mounted () {
            axios.request({
            url:`${process.env.VUE_APP_BASE_DOMAIN}/api/client`,
            method:`GET`,
            params:{token:cookies.get("token")}
            }).then((response)=>{
            console.log(response);
            this.profile = response.data[0]
            }).catch((error)=>{
            console.log(error);
            });
        },
    }
</script>

<style scoped>

</style>
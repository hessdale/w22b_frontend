<template>
    <div>
        <logout-client></logout-client>
        <login-client></login-client>
        <new-client></new-client>
    </div>
</template>

<script>

import LoginClient from '@/components/LoginClient.vue';
import NewClient from '@/components/NewClient.vue';
import LogoutClient from '@/components/LogoutClient.vue';
    export default {
        components: {
            LoginClient,LogoutClient,NewClient
        },
    }
</script>

<style scoped>

</style>
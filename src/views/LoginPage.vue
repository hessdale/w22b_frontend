<template>
    <div>
<login-client></login-client>
<logout-client></logout-client>
    </div>
</template>

<script>

import LoginClient from '@/components/LoginClient.vue';

import LogoutClient from '@/components/LogoutClient.vue';
    export default {
        components: {
            LoginClient,LogoutClient
        },
    }
</script>

<style scoped>

</style>
<template>
    <div>
<get-profile></get-profile>
<logout-client></logout-client>
    </div>
</template>

<script>

import GetProfile from '@/components/GetProfile.vue';
import LogoutClient from '@/components/LogoutClient.vue';
    export default {
        components: {
            GetProfile,LogoutClient
        },
    }
</script>

<style scoped>

</style>
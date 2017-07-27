<template>
    <v-app id="app" standalone>
        <mainFrame v-if="loggedIn"></mainFrame>
        <authForm v-else></authForm>
    </v-app>
</template>

<script>
    import mainFrame from './Frame.vue'
    import authForm from './AuthForm.vue'
    import store from '../vuex/index';
    import router from '../router/index';

    export default {
        beforeCreate(){
            store.dispatch('getUser');
        },
        components: {
            mainFrame,
            authForm
        },
        computed: {
            loggedIn() {
                return store.getters.authUser;
            }
        },
        name: 'app'
    }
</script>
<template>
    <div>
        <router-link v-if="!me" class="login" to="login">Login</router-link>
        <div v-else>
            <span>{{me.name}}</span>
            <button @click="logout()">Logout</button>
        </div>
    </div>
</template>

<script>
    import store from '../vuex/index';
    import router from '../router';

    export default {
        name: 'home',
        beforeCreate(){
            store.dispatch('getUser');
        },
        data(){
            return {
            };
        },
        computed: {
            me() {
                return store.getters.authUser;
            }
        },
        methods: {
            logout(){
                store.dispatch('logout')
                    .then(() => router.push("login"));
            }
        }
    }
</script>
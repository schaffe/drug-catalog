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

    export default {
        name: 'home',
        beforeCreate(next){
            store.dispatch('getUser').then(() => next());
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
                store.dispatch('logout');
            }
        }
    }
</script>
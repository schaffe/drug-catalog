<template>
    <div id="app">
        <router-link v-if="!me" class="login" to="login">Login</router-link>
        <div v-else>
            <span>{{me.name}}</span>
            <button @click="logout()">Logout</button>
        </div>
        <drugs-list v-if="me"/>
    </div>
</template>

<script>
import drugsList from '../components/DrugsList.vue';
import store from '../vuex/index';

export default {
    name: 'home',
    components: {
        drugsList
    },
    beforeRouteEnter(to, from, next){
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

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .login {
        color: blue;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

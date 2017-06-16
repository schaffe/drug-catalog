<template>
    <div id="app">
        <router-link class="login" to="login">Login</router-link>
        <drugs-list/>
    </div>
</template>

<script>
    import drugsList from '../components/DrugsList.vue';
    import auth from '../components/AuthForm.vue';
    export default {
        name: 'home',
        components: {
            auth,
            drugsList
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

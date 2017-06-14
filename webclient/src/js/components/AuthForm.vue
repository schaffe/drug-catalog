<template>
    <form @submit.prevent="auth({ login, password })">
        <input type="text" placeholder="login" v-model="login">
        <input type="password" placeholder="password" v-model="password">
        <button type="submit">Login</button>
    </form>
</template>
<script>
    import store from '../vuex/index';

    export default {
        data() {
            return {
                login: "admin",
                password: "admin"
            }
        },
        methods: {
            auth() {
                store.dispatch("login", {
                    login: this.login,
                    password: this.password
                })
//                    .then(() => {
//                    this.$router.push("/")
//                });
            }
        },
    };
</script>
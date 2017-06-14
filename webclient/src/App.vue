<template>
    <div id="app">
        <auth/>
        <hr>
        <drugs-list></drugs-list>
    </div>
</template>

<script>
    import drugsList from './assets/js/components/DrugsList.vue';
    import auth from './assets/js/components/AuthForm.vue';
    export default {
        name: 'app',
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
        margin-top: 60px;
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

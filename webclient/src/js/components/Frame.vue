<!--suppress ALL -->
<template>
    <div>
        <navigation/>
        <v-toolbar class="indigo" dark>
            <v-toolbar-title>Medicine</v-toolbar-title>
            <v-spacer></v-spacer>
            <active-user></active-user>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
    </div>
</template>

<script>
    import activeUser from '../components/ActiveUserHeader.vue'
    import navigation from './Navigation.vue'

    export default {
        components: {
            activeUser,
            navigation
        },
        name: 'app'
    }
</script>
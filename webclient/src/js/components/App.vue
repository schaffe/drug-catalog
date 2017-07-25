<template>
    <v-app id="app" standalone>
        <v-navigation-drawer permanent clipped light>
            <v-list dense class="pt-0">
                <v-list-tile v-for="item in items" :key="item.title">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
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
    </v-app>
</template>

<script>
    import activeUser from '../components/ActiveUserHeader.vue'
    import navigation from './Navigation.vue'

    export default {
        components: {
            activeUser,
            navigation
        },
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'All items', icon: 'dashboard' },
                ],
                mini: false,
                right: null
            }
        },
        name: 'app'
    }
</script>
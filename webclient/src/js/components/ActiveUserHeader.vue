<template>
    <div>
        <router-link v-if="!me" class="login" to="login">Login</router-link>
        <v-toolbar v-else flat class="transparent">
            <v-list class="pa-0 transparent">
                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/86.jpg"/>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{me.name}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon @click="logout">
                <v-icon>fingerprint</v-icon>
            </v-btn>
        </v-toolbar>
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
            return {};
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
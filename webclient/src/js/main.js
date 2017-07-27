import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import App from './components/App.vue'
import router from './router'
import store from './vuex'

sync(store, router);

Vue.use(Vuetify);

const app = new Vue({
    router,
    store,
    ...App
}).$mount('#app');
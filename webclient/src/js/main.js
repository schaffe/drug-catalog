import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import router from './router'
import store from './vuex'

sync(store, router);

const app = new Vue({
    router,
    store,
    ...App
}).$mount('#app');
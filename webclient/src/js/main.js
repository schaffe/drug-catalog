import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './vuex'

sync(store, router);

window.moment = require('moment/moment');

const app = new Vue({
    router,
    store,
    ...App
}).$mount('#app');
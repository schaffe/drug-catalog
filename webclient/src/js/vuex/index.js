import Vue from 'vue';
import Vuex from 'vuex';

import drugsStore from  './modules/drugsStore';
import authStore from  './modules/authStore';
Vue.use(Vuex);

let debug = true;
const store = new Vuex.Store({
    modules: {
        drugsStore,
        authStore
    },
    strict: debug,
    state: {
    },
    getters:{},
    mutations:{
    },
    actions:{
    }
});

export default store;
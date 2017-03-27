import Vue from 'vue';
import Vuex from 'vuex';

import drugsStore from  './modules/drugsStore';
Vue.use(Vuex);

let debug = true;
const store = new Vuex.Store({
    modules: {
        drugsStore,
    },
    strict: debug,
    state: {
        // drugs: []
    },
    getters:{},
    mutations:{
        // 'SAVE': (state, data) => state.drugs = data
    },
    actions:{
        // fetchDrugs(store) {
        //     store.commit('SAVE', [
        //         {
        //             title: 'Festal',
        //             category: 'stomach',
        //             date: '01-11-2017',
        //             number: 1,
        //             action: 'not required'
        //         },
        //         {
        //             title: 'Noshpa',
        //             category: 'ache',
        //             date: '',
        //             number: 0,
        //             action: 'buy one pack'
        //         }
        //     ]);
        // }
    }
});

// module.exports = store;
export default store;
import Vue from 'vue';
import store from './assets/js/vuex/index';

import App from './App.vue';
Vue.use(store);

new Vue({
  el: '#app',
  render: h => h(App)
});


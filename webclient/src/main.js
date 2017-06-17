import Vue from 'vue';
import store from './js/vuex/index';

import App from './App.vue';
Vue.use(store);
window.moment = require('moment/moment');
new Vue({
  el: '#app',
  render: h => h(App)
});


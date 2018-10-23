import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import store from './vuex/store';
import i18n from './services/I18nService';

import App from './app/App.vue';
import router from './app/AppRouter';

import '@/services/RegisterServiceWorker';

import $ from 'jquery';

import 'popper.js/dist/umd/popper.min.js';
import 'hammerjs/hammer.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  i18n,
  render: (h) => {
    (window as any).$ = $;

    return h(App);
  }
}).$mount('#app');

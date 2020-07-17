import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import Vuex from "vuex";

Vue.config.productionTip = false;

// window.Vue = require("vue");

require("./bootstrap");

import ApiService from "./services/api.service";
ApiService.init();

import config from "./config";
Vue.prototype.$app_url = config.app_url;
Vue.prototype.$base_name = config.base_name;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

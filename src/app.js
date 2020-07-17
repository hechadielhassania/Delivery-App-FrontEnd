import Vue from "vue";

window.Vue = require("vue");

require("./bootstrap");

import ApiService from "./services/api.service";
ApiService.init();

import config from "./config";
Vue.prototype.$app_url = config.app_url;
Vue.prototype.$base_name = config.base_name;

import store from "./store";
import router from "./routes";

// Vue.config.silent = false;
// eslint-disable-next-line no-unused-vars
import Vuex from "vuex";

new Vue({
  router,
  store,
  el: "#app"
});

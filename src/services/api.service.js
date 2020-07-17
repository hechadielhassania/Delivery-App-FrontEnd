import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import JwtService from "./jwt.service";
// import config from "../config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = this.$app_url;
  },

  setHeader() {
    Vue.axios.defaults.headers.common = {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${JwtService.getToken()}`,
      "Content-Type": "multipart/form-data"
    };
  },

  get(resource, slug = "") {
    if (slug != "") {
      return Vue.axios.get(`${resource}/${slug}`).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    } else {
      return Vue.axios.get(`${resource}`).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    }
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  }
};

export default ApiService;

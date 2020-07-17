/* eslint-disable no-unused-vars */
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import ApiService from "../services/api.service";
import JwtService from "../services/jwt.service";
import createMutationsSharer from "vuex-shared-mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: JwtService.getToken() || "",
    user: null,
    pre_loader: false
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    // auth_request(state){
    //     state.status = 'loading'
    // },
    auth_success(state, { token, user }) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = null;
    },
    reset_auth(state) {
      JwtService.unsetToken();
      state.status = "";
      state.token = "";
      state.user = null;
    },
    loader(state) {
      state.pre_loader = !state.pre_loader;
    }
  },
  actions: {
    login_dashboard({ commit }, userData) {
      return new Promise((resolve, reject) => {
        commit("auth_request");

        ApiService.post(Vue.prototype.$app_url + "/dashboard/login", userData)
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            JwtService.setToken(token);
            ApiService.setHeader();
            commit("auth_success", { token, user });
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            JwtService.unsetToken();
            reject(err);
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    login({ commit }, userData) {
      console.log("intred action login!!!", Vue.prototype.$app_url);
      return new Promise((resolve, reject) => {
        commit("auth_request");
        ApiService.post(Vue.prototype.$app_url + "/api/login", userData)
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            JwtService.setToken(token);
            ApiService.setHeader();
            commit("auth_success", { token, user });
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            JwtService.unsetToken();
            reject(err);
          });
      });
    },
    register({ commit }, userData) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        ApiService.post(Vue.prototype.$app_url + "/api/register", userData)
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            JwtService.setToken(token);
            ApiService.setHeader();
            commit("auth_success", { token, user });
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            JwtService.unsetToken();
            reject(err);
          });
      });
    },
    all_cities({ commit }, userData) {
      return new Promise((resolve, reject) => {
        ApiService.post(Vue.prototype.$app_url + "/api/all_cities", userData)
          .then(resp => {
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        JwtService.unsetToken();
        resolve();
      });
    },
    check_auth({ commit }) {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get(Vue.prototype.$app_url + "/api/token/validate").catch(
          err => {
            commit("reset_auth");
          }
        );
      } else {
        commit("reset_auth");
      }
    },
    loader({ commit }) {
      commit("loader");
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getPreLoader: state => state.pre_loader
  },
  plugins: [
    createPersistedState(),
    createMutationsSharer({ predicate: ["logout", "auth_success"] })
  ]
});

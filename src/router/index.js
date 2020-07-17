/* eslint-disable no-unused-vars */
// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

// export default router;

import Vue from "vue";
import Router from "vue-router";
import store from "../store";

// Import componenets
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
import AboutDeliverer from "../components/AboutDeliverer.vue";

Vue.use(Router);
import config from "../config";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    props: true,
    component: Register
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/about/:deliverer",
    name: "AboutDeliverer",
    component: AboutDeliverer
    // meta: { requiresAuth: true }
  }
];

let router = new Router({
  mode: "history",
  base: config.base_name,
  routes,
  linkExactActiveClass: "active",
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (
      store.getters.isLoggedIn &&
      to.meta.authName == store.state.user.authName
    ) {
      next();
      return;
    }
    store.dispatch("logout");
    window.location.replace(config.app_url + "/" + to.meta.authName + "/login");
    // next('/dashboard/login')
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch("loader");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Promise.all([store.dispatch("check_auth")]).then(next);
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  setTimeout(() => {
    store.dispatch("loader");
  }, 500);
});

export default router;

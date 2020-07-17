/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.css";
import lodash from "lodash";
import Popper from "popper.js";
import axios from "axios";
import jQuery from "jquery";
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = Popper.default;
  window._ = lodash;
  window.$ = window.jQuery = jQuery;

// eslint-disable-next-line no-empty
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// window.axios = require("axios");

// window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

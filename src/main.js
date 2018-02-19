import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import router from "./routes";
Vue.use(BootstrapVue);

new Vue({
    el: "#app",
    router
});

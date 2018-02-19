import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Layout from "./components/Layout.vue";

import store from "./store";
import router from "./routes";
Vue.use(BootstrapVue);

new Vue({
    el: "#app",
    render: h => h(Layout),
    router,
    store
});

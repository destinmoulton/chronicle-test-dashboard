import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueToasted from "vue-toasted"; // https://github.com/shakee93/vue-toasted
import Layout from "./components/Layout.vue";

import store from "./store";
import router from "./routes";

Vue.use(BootstrapVue);
Vue.use(VueToasted);

new Vue({
    el: "#app",
    render: h => h(Layout),
    router,
    store
});

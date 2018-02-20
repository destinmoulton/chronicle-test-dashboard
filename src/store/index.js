import Vue from "vue";
import Vuex from "vuex";

import api from "./modules/api";
import settings from "./modules/settings";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        api,
        settings
    },
    strict: false
});

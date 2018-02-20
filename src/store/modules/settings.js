// Initial state
const state = {
    server: localStorage.getItem("server") || "",
    app: localStorage.getItem("app") || "",
    isChronicleInitialized: false
};

// getters
const getters = {
    getServer: state => state.server,
    getApp: state => state.app,
    getIsChronicleInitialized: state => state.isChronicleInitialized
};

const actions = {
    saveSettings({ state, commit }, data) {
        commit("setServerAndApp", data);
    },

    clearSettings({ commit }, data) {
        commit("clearServerAndAp");
    }
};

const mutations = {
    setServerAndApp(state, data) {
        state.server = data.server;
        state.app = data.app;
        state.isChronicleInitialized = true;

        localStorage.setItem("server", data.server);
        localStorage.setItem("app", data.app);
    },

    clearServerAndAp() {
        state.server = "";
        state.app = "";
        localStorage.removeItem("server");
        localStorage.removeItem("app");
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

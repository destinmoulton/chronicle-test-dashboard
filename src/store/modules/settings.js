// Initial state
const state = {
    server: "",
    app: ""
};

// getters
const getters = {
    getServer: state => state.server,
    getApp: state => state.app
};

const actions = {
    saveSettings({ state, commit }, data) {
        commit("setServerAndApp", data);
    }
};

const mutations = {
    setServerAndApp(state, data) {
        state.server = data.server;
        state.app = data.app;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

const localData = localStorage.getItem("settings");

// Initial state
const state = {
    server: localData.server || "",
    app: localData.app || "",
    isChronicleInitialized: false,
    methodsToLog: localData.methodsToLog || ["action", "error", "warn", "trace"]
};

// getters
const getters = {
    getServer: state => state.server,
    getApp: state => state.app,
    getIsChronicleInitialized: state => state.isChronicleInitialized,
    getMethodsToLog: state => state.methodsToLog
};

const actions = {
    saveSettings({ state, commit }, data) {
        commit("mutateSettings", data);
    },

    clearSettings({ commit }, data) {
        commit("clearServerAndAp");
    }
};

const mutations = {
    mutateSettings(state, data) {
        state.server = data.server;
        state.app = data.app;
        state.methodsToLog = data.methodsToLog;

        state.isChronicleInitialized = true;

        localStorage.setItem("settings", state);
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

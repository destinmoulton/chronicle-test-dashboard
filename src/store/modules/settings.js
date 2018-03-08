import _ from "lodash";

const storageString = localStorage.getItem("settings");
const storedData = storageString !== null ? JSON.parse(storageString) : null;

const INITIAL_STATE = {
    server: "",
    app: "",
    isChronicleInitialized: false,
    methodsToLog: ["action", "assert", "error", "warn"]
};

const prepareState = (storage, initialState) => {
    let state = { ...initialState };

    if (storage === null) return state;

    _.keys(initialState).forEach(key => {
        if (_.has(storage, key)) {
            state[key] = storage[key];
        }
    });
    return state;
};

// Initial state
const state = prepareState(storedData, INITIAL_STATE);

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
        commit("resetSettings");
    }
};

const mutations = {
    mutateSettings(state, data) {
        state.server = _.clone(data.server);
        state.app = _.clone(data.app);
        state.methodsToLog = _.clone(data.methodsToLog);

        state.isChronicleInitialized = true;

        localStorage.setItem("settings", JSON.stringify(state));
    },

    resetSettings() {
        _.keys(INITIAL_STATE).forEach(key => {
            state[key] = INITIAL_STATE[key];
        });

        localStorage.removeItem("settings");
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

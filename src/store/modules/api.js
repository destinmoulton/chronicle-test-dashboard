import _ from "lodash";
import { getAllSwapiData } from "../api/swapi";

const state = {
    data: {
        swapi: []
    }
};

const getters = {
    getAPIData: state => state.data
};

const actions = {
    downloadAPIData({ commit }) {
        getAllSwapiData().then(data => {
            commit("setAPIData", { apiName: "swapi", data });
        });
    }
};

const mutations = {
    setAPIData(state, { apiName, data }) {
        state.data[apiName] = _.clone(data);
    }
};

export default { actions, getters, mutations, state };

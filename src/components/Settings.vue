<template>
<div>
<b-container fluid id="cht-form-container">
    <b-row>
        <b-col cols="6">
            <b-card>
                <b-form-group 
                        label="Server API URL:"
                        label-for="input-server-address"
                        description="The URL of the Chronicle API.">
                    <b-form-input id="input-server-address"
                            type="text"
                            v-model="server"
                            required
                            placeholder="https://..."
                            >
                    </b-form-input>
                </b-form-group>
                <b-form-group 
                        label="App Name:"
                        label-for="input-app-name"
                        description="The name to use for the App logging.">
                    <b-form-input id="input-app-name"
                            type="text"
                            v-model="app"
                            required
                            placeholder=""
                            >
                    </b-form-input>
                </b-form-group>
            </b-card>
        </b-col>
        <b-col cols="6">
            <b-card>
                <b-form-group label="Methods to Log to API">
                    <b-form-checkbox-group 
                        stacked
                        v-model="selectedMethodsToLog"
                        v-bind:options="methodsAvailableToLog"
                    ></b-form-checkbox-group>
                </b-form-group>
            </b-card>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            
        </b-col>
    </b-row>
</b-container>
<b-navbar fixed="bottom">
    <b-card id="cht-button-card">
        <b-button class="float-left" variant="info" @click="clear()">Clear Settings</b-button>
        <b-button class="float-right" variant="primary" @click="save(server, app)">Initialize</b-button>
    </b-card>
</b-navbar>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ChronicleConsole from "../../../chronicle-console/index";

import METHODS from "../constants/methods.constants";

export default {
    name: "settings",
    components: {},
    data: function() {
        return {
            server: this.$store.getters.getServer,
            app: this.$store.getters.getApp,
            selectedMethodsToLog: this.$store.getters.getMethodsToLog,
            methodsAvailableToLog: METHODS
        };
    },
    methods: {
        save() {
            if (this.server !== "" && this.app !== "") {
                this.$store.dispatch("saveSettings", {
                    server: this.server,
                    app: this.app,
                    methodsToLog: this.selectedMethodsToLog
                });

                this.$router.push("/dashboard");

                // Initialize ChronicleConsole
                ChronicleConsole.init({
                    server: this.server,
                    app: this.app,
                    globalize: true,
                    toConsole: true,
                    methodsToLog: this.selectedMethodsToLog
                });
            }
        },
        clear() {
            this.server = "";
            this.app = "";
            this.$store.dispatch("clearSettings");
        }
    }
};
</script>

<style>
#cht-form-container {
    margin-top: 10px;
}

#cht-button-card {
    width: 100%;
}
</style>

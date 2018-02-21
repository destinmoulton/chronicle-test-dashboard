<template>
<b-container fluid id="cht-form-container">
    <b-row>
        <b-col cols="6" offset="3">
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
                <b-button class="float-left" variant="info" @click="clear()">Clear Settings</b-button>
                <b-button class="float-right" variant="primary" @click="save(server, app)">Initialize</b-button>
            </b-card>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ChronicleConsole from "../../../chronicle-console/index";

export default {
    name: "settings",
    components: {},
    data: function() {
        return {
            server: this.$store.getters.getServer,
            app: this.$store.getters.getApp
        };
    },
    methods: {
        save() {
            if (this.server !== "" && this.app !== "") {
                this.$store.dispatch("saveSettings", {
                    server: this.server,
                    app: this.app
                });

                this.$router.push("/dashboard");

                // Initialize ChronicleConsole
                ChronicleConsole.init({
                    server: this.server,
                    app: this.app,
                    globalize: true,
                    toConsole: true
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
</style>

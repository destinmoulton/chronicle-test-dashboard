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
                <b-button class="float-right" variant="primary" @click="save(server, app)">Initialize</b-button>
            </b-card>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "settings",
    components: {},
    computed: mapGetters({
        storeServer: "getServer",
        storeApp: "getApp"
    }),
    data: () => {
        return {
            server: this.storeServer,
            app: this.storeApp
        };
    },
    methods: {
        save() {
            this.$store.dispatch("saveSettings", {
                server: this.server,
                app: this.app
            });
        }
    }
};
</script>

<style>
#cht-form-container {
    margin-top: 10px;
}
</style>

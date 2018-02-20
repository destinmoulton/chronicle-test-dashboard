<template>
<b-container>
    <b-row >
        <b-col>
            <b-card class="cht-dash-box">
                <h3>Dashboard</h3>
            </b-card>
        </b-col>
    </b-row>
    <b-row >
        <b-col>
            <b-card class="cht-dash-box">
                <website-navigation></website-navigation>
            </b-card>
        </b-col>
    </b-row>
    <b-row >
        <b-col>
            <b-card class="cht-dash-box">
                <auth-actions></auth-actions>
            </b-card>
        </b-col>
        <b-col>
            <b-card class="cht-dash-box">
                <console></console>
            </b-card>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import AuthActions from "./Dashboard/AuthActions";
import Console from "./Dashboard/Console";
import WebsiteNavigation from "./Dashboard/WebsiteNavigation";

export default {
    name: "dashboard",
    created() {
        if (!this.$store.getters.getIsChronicleInitialized) {
            this.$router.push("/");
        }
    },
    components: {
        "auth-actions": AuthActions,
        console: Console,
        "website-navigation": WebsiteNavigation
    }
};
</script>

<style>
.cht-dash-box {
    margin-top: 5px;
}
</style>


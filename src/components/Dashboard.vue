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
                <h3>Auth Actions</h3>
                <b-button>Login ("auth:login")</b-button>
                <b-button>Logout ("auth:logout")</b-button>
            </b-card>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import WebsiteNavigation from "./Dashboard/WebsiteNavigation";
export default {
    name: "dashboard",
    components: {
        "website-navigation": WebsiteNavigation
    }
};
</script>

<style>
.cht-dash-box {
    margin-top: 5px;
}
</style>


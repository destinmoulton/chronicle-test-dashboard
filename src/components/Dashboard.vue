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
    </b-row>
</b-container>
</template>

<script>
import AuthActions from "./Dashboard/AuthActions";
import WebsiteNavigation from "./Dashboard/WebsiteNavigation";

export default {
    name: "dashboard",
    components: {
        "auth-actions": AuthActions,
        "website-navigation": WebsiteNavigation
    }
};
</script>

<style>
.cht-dash-box {
    margin-top: 5px;
}
</style>


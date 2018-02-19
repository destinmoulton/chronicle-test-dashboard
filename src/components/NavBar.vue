<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Chronicle Test Dashboard</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#/">Settings</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        <div class="cht-navbar-settings">{{app}}</div>
        <div class="cht-navbar-settings">{{server}}</div>
        
    </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "navbar",
    computed: mapGetters({
        server: "getServer",
        app: "getApp"
    })
};
</script>

<style>
div.cht-navbar-settings {
    color: white;
    float: right;
    font-size: 1.2em;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 4px;
    padding: 5px;
    margin-left: 5px;
}
</style>

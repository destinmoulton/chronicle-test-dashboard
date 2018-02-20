<template>
<div>
    <h4>Site Navigation</h4>
    <b-navbar toggleable="md" type="dark" variant="secondary">
        <b-navbar-brand >Acme Inc.</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item v-for="(page, index) in pages" v-bind:key="page.id" v-on:click="changePage(index)">
                {{page.name}}
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <div id="cht-dashboard-testsite-navigation-content">{{ content }}</div>
</div>
</template>

<script>
import TEST_SITE from "../../constants/testsite.constants";
import EventBus from "../../eventbus";

export default {
    name: "website-navigation",
    data: () => {
        return {
            pages: TEST_SITE,
            content: TEST_SITE[0].content
        };
    },
    methods: {
        changePage(pageIndex) {
            const data = TEST_SITE[pageIndex];
            this.content = data.content;
            EventBus.$emit("notification", {
                type: "action",
                message: "nav:" + data.id
            });
        }
    }
};
</script>

<style>
#cht-dashboard-testsite-navigation-content {
    border: 4px solid #6c757d;
    padding: 5px;
}
</style>

<template>
<div>
    <h4>Site Navigation</h4>
    <b-navbar toggleable="md" type="dark" variant="secondary">
        <b-navbar-brand >Acme Inc.</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item v-for="page in pages" v-bind:key="page.id" v-on:click="changePage(page.id)">
                {{page.name}}
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <div>{{ content }}</div>
</div>
</template>

<script>
import TEST_SITE from "../../constants/testsite.constants";
export default {
    name: "website-navigation",
    data: () => {
        return {
            pages: TEST_SITE,
            content: TEST_SITE[0].content
        };
    },
    methods: {
        changePage(newPage) {
            console.log(newPage);
        }
    }
};
</script>


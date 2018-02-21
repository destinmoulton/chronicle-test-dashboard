<template>
<div>
    <h4>API Data</h4>
    <template v-if="apiData.swapi.length > 0">
    <b-card no-body >
        <b-tabs card >
            <b-tab v-for="swapi in apiData.swapi" v-bind:key="swapi.name" v-bind:title="swapi.name" >
            <ul>
                <li v-for="item in swapi.data" v-bind:key="item.name">{{item.name}}</li>
            </ul>
            </b-tab>
        </b-tabs>
    </b-card>
    </template>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: mapGetters({
        apiData: "getAPIData"
    }),

    created() {
        this.$store.dispatch("downloadAPIData");
    }
};
</script>

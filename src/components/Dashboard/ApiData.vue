<template>
<div>
    <h4>API Data</h4>
    <b-container>
        <b-row>
            <b-col>
                <template v-if="apiData.swapi.length > 0">
                <b-card no-body >
                    <b-tabs pills card vertical>
                        <b-tab v-for="(swapi, sectionIndex) in apiData.swapi" v-bind:key="swapi.name" v-bind:title="swapi.name" >
                        <ul class="cht-list">
                            <li v-for="(item, itemIndex) in swapi.data" v-bind:key="item.name"
                                v-on:click="activateData('swapi', sectionIndex, itemIndex)">
                                {{item.name}}
                            </li>
                        </ul>
                        </b-tab>
                    </b-tabs>
                </b-card>
                </template>
            </b-col>
            <b-col>
                <b-card>
                    <vue-json-pretty v-bind:data="activeData"></vue-json-pretty>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import VueJsonPretty from "vue-json-pretty";
export default {
    components: {
        VueJsonPretty
    },
    created() {
        this.$store.dispatch("downloadAPIData");
    },
    data: function() {
        return {
            activeData: ""
        };
    },
    computed: mapGetters({
        apiData: "getAPIData"
    }),
    methods: {
        activateData(type, sectionIndex, elementIndex) {
            this.activeData = this.$store.getters.getAPIData[type][
                sectionIndex
            ].data[elementIndex];
        }
    }
};
</script>

<style>
#cht-dashboard-data-display {
    height: 100%;
}

ul.cht-list {
    list-style-type: none;
    padding: 0;
}

ul.cht-list > li {
    cursor: pointer;
    color: #007bff;
}
</style>

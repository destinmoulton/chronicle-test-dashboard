<template>
<div>
    <h4>API Data</h4>
    <template v-if="apiData.swapi.length > 0">
    <b-card no-body >
        <b-tabs card >
            <b-tab v-for="(swapi, sectionIndex) in apiData.swapi" v-bind:key="swapi.name" v-bind:title="swapi.name" >
            <ul>
                <li v-for="(item, itemIndex) in swapi.data" v-bind:key="item.name"><b-button size="sm" v-on:click="activateData('swapi', sectionIndex, itemIndex)">&gt;</b-button>{{item.name}}</li>
            </ul>
            </b-tab>
        </b-tabs>
    </b-card>
    </template>
    <textarea disabled v-model="activeData"></textarea>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
            this.activeData = JSON.stringify(
                this.$store.getters.getAPIData[type][sectionIndex].data[
                    elementIndex
                ]
            );
            console.log(this.activeData);
        }
    }
};
</script>

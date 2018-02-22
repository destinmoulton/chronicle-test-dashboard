<template>
<div>
    <div
        class="cht-dashboard-activemethods"
        v-bind:methods="methods"
        v-for="method in methods"
        v-bind:key="method">
            <i v-if="selectedMethods.indexOf(method) > -1" class="fa fa-check"></i>&nbsp;{{ method }}()</div>
</div>
</template>

<script>
import METHODS from "../../constants/methods.constants.js";

export default {
    data: function() {
        return {
            methods: METHODS,
            selectedMethods: this.$store.getters.getMethodsToLog
        };
    }
};
</script>

<style>
div.cht-dashboard-activemethods {
    float: left;
    padding: 1px 4px 1px 4px;
    margin: 2px 0px 0px 2px;
    border-radius: 2px;
    border: 1px solid black;
}

div.cht-dashboard-activemethods > i {
    color: green;
}
</style>

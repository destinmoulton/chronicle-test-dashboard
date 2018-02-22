<template>
<div>
    <span v-bind="methods"
        v-for="method in methods"
        v-bind:key="method">{{ method }}()</span>
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


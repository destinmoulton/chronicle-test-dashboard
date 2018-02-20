<template>
<div>
    <h4>API Data</h4>
    <div v-for="swapi in apiData.swapi" v-bind:key="swapi">
        <strong>{{swapi.name}}</strong>
        <ul>
            <li v-for="item in swapi.data" v-bind:key="item.name">{{item.name}}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data: () => {
        return {
            apiData: this.$state.getters.getAPIData
        };
    },
    created() {
        this.$store.dispatch("downloadAPIData");
    }
};
</script>

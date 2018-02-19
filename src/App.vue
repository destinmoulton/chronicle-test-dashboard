<template>
<div>
  <navbar></navbar>
  <div>{{msg}}</div>
  </div>
</template>

<script>
import navbar from "./components/NavBar";

export default {
    name: "app",
    components: {
        navbar
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<style>

</style>

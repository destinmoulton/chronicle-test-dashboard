<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
    components: {
        NavBar
    }
};
</script>

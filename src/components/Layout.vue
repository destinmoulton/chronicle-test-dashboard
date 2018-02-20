<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
        <notifications></notifications>
    </div>
</template>

<script>
import Notifications from "./Notifications";
import NavBar from "./NavBar";
import EventBus from "../eventbus";
export default {
    components: {
        navbar: NavBar,
        notifications: Notifications
    }
};
</script>

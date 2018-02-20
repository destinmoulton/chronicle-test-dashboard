<template>
<div>
    <h4>Auth Actions</h4>
    <b-button v-on:click="login()" variant="success">Login</b-button>
    <b-button v-on:click="logout()" variant="warning">Logout</b-button>
    <div v-show="isLoggedIn" >
        <br/>
        <h5>Signed In Actions</h5>
        <b-button v-on:click="action('click:profile')" variant="primary">Profile</b-button>
        <b-button v-on:click="action('click:change-password')"  variant="primary">Change Password</b-button>
    </div>
</div>
</template>

<script>
import { EventBus } from "../../eventbus";
export default {
    data: () => {
        return {
            isLoggedIn: false
        };
    },
    methods: {
        action(message) {
            EventBus.$emit("notification", {
                type: "action",
                message
            });
        },
        login() {
            EventBus.$emit("notification", {
                type: "action",
                message: "auth:login"
            });
            this.isLoggedIn = true;
        },
        logout() {
            EventBus.$emit("notification", {
                type: "action",
                message: "auth:logout"
            });
            this.isLoggedIn = false;
        }
    }
};
</script>

<style>

</style>
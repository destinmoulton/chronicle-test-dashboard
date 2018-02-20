<template>
<div>
    <h3>Auth Actions</h3>
    <b-button v-on:click="login()">Login</b-button>
    <b-button v-on:click="logout()">Logout</b-button>
</div>
</template>

<script>
import { EventBus } from "../../eventbus";
export default {
    methods: {
        login() {
            EventBus.$emit("notification", {
                type: "action",
                message: "auth:login"
            });
        },
        logout() {
            EventBus.$emit("notification", {
                type: "action",
                message: "auth:logout"
            });
        }
    }
};
</script>


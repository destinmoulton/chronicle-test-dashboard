<template>
<div>
    <h4>Console Tests</h4>
    <b-button v-on:click="info()" variant="primary">Info</b-button>
    <b-button v-on:click="warn()" variant="warning">Warn</b-button>
    <b-button v-on:click="error()" variant="danger">Error</b-button>
    <b-button v-on:click="assert()" variant="danger">Assert</b-button>
</div>
</template>

<script>
import { EventBus } from "../../eventbus";
export default {
    methods: {
        error() {
            EventBus.$emit("notification", {
                type: "error",
                message: "ERROR :: Error button pressed."
            });
        },
        info() {
            EventBus.$emit("notification", {
                type: "info",
                message: "INFO :: Info button pressed."
            });
        },
        warn() {
            EventBus.$emit("notification", {
                type: "warn",
                message: "WARN :: Warn button pressed."
            });
        },
        assert() {
            EventBus.$emit("notification", {
                type: "assert",
                message: "Assertion failed."
            });
        }
    }
};
</script>


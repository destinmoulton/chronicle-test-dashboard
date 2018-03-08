<template>
<div>
    <h4>Console Tests</h4>
    <b-button v-on:click="info()" variant="primary">.info()</b-button>
    <b-button v-on:click="warn()" variant="warning">.warn()</b-button>
    <b-button v-on:click="error()" variant="danger">.error()</b-button>
    <b-button v-on:click="assert()" variant="danger">.assert()</b-button>

    <br/><br/>
    <fieldset>
        <legend>Groups</legend>
        <b-button v-on:click="group()" variant="success">.group()</b-button>
        <b-button v-on:click="groupCollapsed()" variant="success">.groupCollapsed()</b-button>
        <b-button v-on:click="groupEnd()" variant="warning">.groupEnd()</b-button>
    </fieldset>
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
        },
        group() {
            EventBus.$emit("notification", {
                type: "group"
            });
        },
        groupCollapsed() {
            EventBus.$emit("notification", {
                type: "groupCollapsed"
            });
        },
        groupEnd() {
            EventBus.$emit("notification", {
                type: "groupEnd"
            });
        }
    }
};
</script>


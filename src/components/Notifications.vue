<template>
  
</template>

<script>
import { EventBus } from "../eventbus";
import { NOTIFICATION_CONFIG } from "../constants/notifications.constants.js";
export default {
    created() {
        EventBus.$on(
            "notification",
            function(packet = { type: "info", message: "" }) {
                const message = `console.${packet.type}(${packet.message})`;
                switch (packet.type) {
                    case "action":
                        this.$toasted.info(message, NOTIFICATION_CONFIG);
                        break;
                    case "info":
                        this.$toasted.info(message, NOTIFICATION_CONFIG);
                        break;
                    case "error":
                        this.$toasted.error(message, NOTIFICATION_CONFIG);
                        break;
                    case "warn":
                        this.$toasted.info(message, NOTIFICATION_CONFIG);
                        break;
                }
            }.bind(this)
        );
    },
    destroyed() {
        //EventBus.$off("notification", this.setMessage);
    }
};
</script>

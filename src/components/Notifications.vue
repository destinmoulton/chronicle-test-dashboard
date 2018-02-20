<template>
  
</template>

<script>
import { EventBus } from "../eventbus";
import { NOTIFICATION_CONFIG } from "../constants/notifications.constants.js";
export default {
    created() {
        EventBus.$on(
            "notification",
            function(packet = { type: "info", message: "", data: {} }) {
                const notificationMessage = `console.${packet.type}(${
                    packet.message
                })`;
                const consoleMessage = packet.message;
                const data = packet.data || {};
                switch (packet.type) {
                    case "action":
                        this.$toasted.info(
                            notificationMessage,
                            NOTIFICATION_CONFIG
                        );
                        console.action(consoleMessage, data);
                        break;
                    case "error":
                        this.$toasted.error(
                            notificationMessage,
                            NOTIFICATION_CONFIG
                        );
                        console.error(consoleMessage, data);
                        break;
                    case "info":
                        this.$toasted.info(
                            notificationMessage,
                            NOTIFICATION_CONFIG
                        );
                        console.info(consoleMessage, data);
                        break;
                    case "warn":
                        this.$toasted.info(
                            notificationMessage,
                            NOTIFICATION_CONFIG
                        );
                        console.warn(consoleMessage, data);
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

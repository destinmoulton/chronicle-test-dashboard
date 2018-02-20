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
                switch (packet.type) {
                    case "action":
                        this.$toasted.info(packet.message, NOTIFICATION_CONFIG);
                        break;
                    case "info":
                        this.$toasted.info(packet.message, NOTIFICATION_CONFIG);
                        break;
                    case "error":
                        this.$toasted.error(
                            packet.message,
                            NOTIFICATION_CONFIG
                        );
                        break;
                    case "warn":
                        this.$toasted.info(packet.message, NOTIFICATION_CONFIG);
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

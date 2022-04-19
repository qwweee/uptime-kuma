<template>
    <div class="mb-3">
        <label for="u-messenger-token" class="form-label">{{ $t("Bot Token") }}</label>
        <HiddenInput id="u-messenger-token" v-model="$parent.notification.UMessengerToken" :required="true" autocomplete="one-time-code"></HiddenInput>
    </div>

    <div class="mb-3">
        <label for="u-messenger-u-id" class="form-label">{{ $t("U ID") }}</label>
        <div class="input-group mb-3">
            <input id="u-messenger-u-id" v-model="$parent.notification.UMessengerUID" type="text" class="form-control" required>
        </div>
    </div>
    <div class="mb-3">
        <label for="u-messenger-u-group" class="form-label">{{ $t("U Group") }}</label>
        <div class="input-group mb-3">
            <input id="u-messenger-u-group" v-model="$parent.notification.UMessengerUGroup" type="text" class="form-control" required>
        </div>
    </div>
    <div>
     this is a test!!!
    </div>
</template>

<script>
import HiddenInput from "../HiddenInput.vue";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
    components: {
        HiddenInput,
    },
    methods: {
    }
};
</script>

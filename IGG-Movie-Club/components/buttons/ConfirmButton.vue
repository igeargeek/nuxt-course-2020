<template>
  <span>
    <v-btn
      @click="dialog = true"
      :disabled="btLoading"
      :loading="btLoading"
      color="primary"
      type="button"
    >
      <slot />
    </v-btn>

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title>Confirm</v-card-title>

          <v-card-text>Are you sure ?</v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" outlined @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" @click="confirm">Sure</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    btLoading() {
      return this.loading;
    }
  },
  methods: {
    confirm() {
      this.dialog = false;
      this.$emit("click");
    }
  }
};
</script>
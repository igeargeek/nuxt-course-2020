<template>
  <v-btn :disabled="btLoading" :loading="btLoading" color="primary" type="submit">
    <slot />
  </v-btn>
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
      btLoading: this.loading
    };
  },
  watch: {
    loading(val) {
      this.btLoading = val;
    }
  }
};
</script>
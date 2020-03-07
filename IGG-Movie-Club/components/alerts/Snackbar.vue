<template>
  <v-snackbar v-model="show" top :color="color">
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      text: "",
      color: ""
    };
  },
  beforeMount() {
    this.$bus.$on("alert", (color = "success", text = "ทำรายการสำเร็จ") => {
      this.show = true;
      this.color = color;
      this.text = text;
    });
  },
  beforeDestroy() {
    this.$bus.$off("alert");
  }
};
</script>
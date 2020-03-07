<template>
  <v-app dark>
    <Snackbar />
    <nuxt />
  </v-app>
</template>

<script>
import { Snackbar } from "~/components/alerts";

export default {
  components: {
    Snackbar
  }
};
</script>

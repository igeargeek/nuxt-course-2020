<template>
  <v-app dark>
    <Snackbar />
    <HeaderBar />
    <nuxt />
  </v-app>
</template>

<script>
import { Snackbar } from "~/components/alerts";
import { HeaderBar } from "~/components/headers";

export default {
  components: {
    Snackbar,
    HeaderBar
  },
  mounted() {
    if (localStorage.getItem("accessToken")) {
      this.getUserInfo();
    }
  },
  methods: {
    getUserInfo() {
      this.$api
        .get("/users/payload")
        .then(res => {
          this.$store.commit("user", res.data.data);
        })
        .catch(() => {
          localStorage.setItem("accessToken", "");
        });
    }
  }
};
</script>

<template>
  <v-btn color="primary" type="submit" @click="logout">Logout</v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.setItem("accessToken", "");
      this.$router.push("/login");
    }
  }
};
</script>
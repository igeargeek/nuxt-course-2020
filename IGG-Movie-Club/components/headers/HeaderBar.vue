<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        <nuxt-link to="/">
          <a style="color: white;">IGG Movie Club</a>
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />

      <span class="pr-5">{{ $store.state.name }}</span>

      <span class="pr-5">
        <nuxt-link to="/history">
          <v-btn color="primary">My reservation list</v-btn>
        </nuxt-link>
      </span>

      <template v-if="$store.state.name">
        <LogoutButton />
      </template>
      <template v-else>
        <nuxt-link to="/login">
          <v-btn color="primary">Login</v-btn>
        </nuxt-link>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { LogoutButton } from "~/components/buttons";

export default {
  components: {
    LogoutButton
  }
};
</script>
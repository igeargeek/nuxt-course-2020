<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>IGG Movie Club</v-toolbar-title>

      <v-spacer />

      <span class="pr-5">{{ $store.state.name }}</span>

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
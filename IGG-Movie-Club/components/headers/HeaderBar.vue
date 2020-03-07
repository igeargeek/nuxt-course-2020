<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>IGG Movie Club</v-toolbar-title>

      <v-spacer />

      <span class="pr-5">{{ $store.state.name }}</span>

      <template v-if="$store.state.name">
        <v-btn color="primary">Logout</v-btn>
      </template>
      <template v-else>
        <v-btn color="primary" @click="$router.push('/login')">Login</v-btn>
      </template>
    </v-app-bar>
  </div>
</template>
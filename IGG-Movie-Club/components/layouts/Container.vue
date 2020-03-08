<template>
  <v-container>
    <v-row class="text-center" v-if="title">
      <v-col cols="12">
        <h1>{{title}}</h1>
      </v-col>
      <v-col cols="12">
        <hr />
      </v-col>
    </v-row>
    <slot />
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
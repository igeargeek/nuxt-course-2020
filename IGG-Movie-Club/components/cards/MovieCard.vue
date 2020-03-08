<template>
  <v-card class="mx-auto" max-width="344">
    <v-img v-if="imageUrl" :src="imageUrl" height="410px"></v-img>

    <v-card-title>{{name}}</v-card-title>

    <v-card-actions>
      <v-spacer />
      <nuxt-link :to="`/movies/${id}/reserve`">
        <v-btn>Reserve</v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: ""
    }
  }
};
</script>
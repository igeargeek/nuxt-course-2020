<template>
  <div>
    <v-row>
      <v-col>
        <h4>Name: {{ profile.fullname }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h4>Email: {{ profile.email }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h4>Description: {{ profile.description }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn class="mt-4" variant="outline-primary" @click="onBackEvent">Back</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: 'formDisplay',
    props: {
      profile: {
        Type: Array,
        default: {}
      }
    },
    methods: {
      onBackEvent() {
        this.$emit('onBack')
      }
    }
  }

</script>

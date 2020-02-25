<template>
  <div>
    <b-row>
      <b-col>
        <h4>Name: {{ profile.fullname }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Email: {{ profile.email }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Description: {{ profile.description }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button class="mt-4" variant="outline-primary" @click="onBackEvent">Back</b-button>
      </b-col>
    </b-row>
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

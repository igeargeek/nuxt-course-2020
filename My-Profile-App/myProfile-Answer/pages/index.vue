<template>
  <b-container class="container">
    <b-card v-if="!displayValue" class="card-container">
      <h1 class="title">My profile</h1>
       <h2 class="subtitle">This is a simple application</h2>
      <formInput  @submitForm="submitForm"/>
    </b-card>
    <b-card  v-else >
      <formDisplay :profile="profile" @onBack="onBack" />
    </b-card>
    
  </b-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import formInput from '~/components/formInput'
import formDisplay from '~/components/formDisplay'

export default {
  components: {
    Logo,
    formInput,
    formDisplay
  },
  data() {
    return {
      displayValue: false,
      profile: {}
    }
  },
  methods: {
    submitForm(value) {
      this.displayValue = !this.displayValue 
      this.profile = value
    },
    onBack() {
      this.displayValue = !this.displayValue 
    }
  }

}
</script>

<style>
body {
  background-color: #35495e
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.card-container {
  min-width: 500px;
}
</style>

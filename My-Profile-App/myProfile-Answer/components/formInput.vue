<template>
  <div>
    <b-row>
      <b-col>
        <b-form-input class="mt-4" v-model="fullName" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input class="mt-4" v-model="email" placeholder="Enter your email"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-textarea class="mt-4" v-model="description" placeholder="Enter description"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button class="mt-4" variant="outline-primary" @click="onSubmit">Submit</b-button>
        <b-button class="mt-4" variant="outline-warning" @click="onClear">Clear</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'formInput',
  data() {
    return {
      fullName: '',
      email: '',
      description: ''
    }
  },
  methods: {
    onClear() {
      this.fullName = ''
      this.email = ''
      this.description = ''
    },
    onSubmit() {
      this.$emit('submitForm', {
        fullname: this.fullName,
        email: this.email,
        description: this.description
      }) 
    }
  }
}
</script>
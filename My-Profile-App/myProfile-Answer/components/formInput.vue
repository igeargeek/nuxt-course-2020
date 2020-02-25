<template>
  <div>
    <b-form @submit="onSubmit">
    <b-row>
      <b-col>
        <b-form-input class="mt-4" type="text" v-model="fullName" placeholder="Enter your name" required></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input class="mt-4" type="email" v-model="email" placeholder="Enter your email" required></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-textarea class="mt-4" type="text" v-model="description" placeholder="Enter description" required/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button class="mt-4" type="submit" variant="outline-primary">Submit</b-button>
        <b-button class="mt-4" type="reset" variant="outline-danger" @click="onClear">Clear</b-button>
      </b-col>
    </b-row>
    </b-form>
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
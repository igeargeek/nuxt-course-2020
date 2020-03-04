<template>
  <div>
    <v-form>
    <v-row>
      <v-col>
        <inputComponent v-model="fullName" placeholder="Enter your name" isRequired></inputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <inputComponent v-model="email" placeholder="Enter your email" isRequired></inputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <inputComponent v-model="description" placeholder="Enter description" isRequired></inputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <buttonComponent @onClick="onSubmit" text="Submit" color="btn-primary"></buttonComponent>
        <buttonComponent  @onClick="onClear" text="Clear" color="btn-error"></buttonComponent>
      </v-col>
    </v-row>
    </v-form>
  </div>
</template>
<script>
import buttonComponent from './buttonComponent'
import inputComponent from './inputComponent'

export default {
  name: 'formInput',
  components: {
    buttonComponent,
    inputComponent
  },
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
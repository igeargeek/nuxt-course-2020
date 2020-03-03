<template>
  <ValidationProvider v-slot="{ errors, valid, touched }" :name="name" :rules="rules">
    {{errors.length}}
    <label :for="name">{{label}}</label>
    <b-form-input
      :id="name"
      v-model="innerValue"
      :state="touched ? valid : null"
      :placeholder="placeholder"
      trim
    ></b-form-input>
    <b-form-invalid-feedback v-if="errors.length > 0">{{errors[0]}}</b-form-invalid-feedback>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  props: {
    rules: {
      type: [Object, String],
      default: ""
    },
    value: {
      type: null,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      innerValue: this.value
    };
  },
  watch: {
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    value(newVal) {
      this.innerValue = newVal;
    }
  }
};
</script>
<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <v-text-field
      v-model="innerValue"
      :label="label"
      :error-messages="errors"
      :type="type"
    ></v-text-field>
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
    type: {
      type: String,
      default: "input"
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
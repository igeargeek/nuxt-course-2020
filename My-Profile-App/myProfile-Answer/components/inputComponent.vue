<template>
    <v-text-field :value="value" :placeholder="placeholder" :required="isRequired" @input="updateValue" ></v-text-field>
</template>
<script>
export default {
    name: 'buttonComponent',
    props: {
        placeholder: {
            type: String,
            default: 'Placeholder'
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        },
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
}
</script>
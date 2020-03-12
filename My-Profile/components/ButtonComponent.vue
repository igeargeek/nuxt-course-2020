<template>
    <v-btn large :class="color" @click="() => $emit('onClick')">{{text}}</v-btn>
</template>
<script>
export default {
    name: 'buttonComponent',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        text: {
            type: String,
            default: 'Button'
        }
    }
}
</script>
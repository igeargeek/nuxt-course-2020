<template>
  <div>
    <!-- class="text-center bg-red" -->
    <v-container class="text-center"> 
      <v-row>
        <v-col>
          <Logo />
          <VuetifyLogo/>
        </v-col>
      </v-row>
      <h1>My profile</h1>
      <v-card v-if="showInputForm">
        <FormInput class="px-4" @submitForm="submitForm" />
      </v-card>
      <v-card v-else>
        <FormDisplay :profile="profile" @onBack="onBack" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import FormInput from '~/components/FormInput.vue'
import FormDisplay from '~/components/FormDisplay.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    FormInput,
    FormDisplay
  },
  data() {
    return {
      showInputForm: true,
      profile: {}
    }
  },
  methods: {
    submitForm(value) {
      this.showInputForm = !this.showInputForm 
      this.profile = value
    },
    onBack() {
      this.showInputForm = !this.showInputForm 
    }
  },
}
</script>

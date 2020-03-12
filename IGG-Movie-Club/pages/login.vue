<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <ValidationObserver v-slot="{ validate }">
            <form @submit.prevent="onSubmit(validate)">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <TextInputWithValidate
                    v-model="username"
                    name="username"
                    label="Username"
                    rules="required"
                  />
                  <TextInputWithValidate
                    v-model="password"
                    name="password"
                    label="Password"
                    rules="required"
                    type="password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-col cols="6" class="text-sm-left">
                    <nuxt-link to="/register">
                      <v-btn color="primary" outlined>Register</v-btn>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="6" class="text-sm-right">
                    <SaveButton :loading="loading.submit">Login</SaveButton>
                  </v-col>
                </v-card-actions>
              </v-card>
            </form>
          </ValidationObserver>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { TextInputWithValidate } from "~/components/inputs";
import { SaveButton } from "~/components/buttons";

export default {
  layout: "blank",
  components: {
    TextInputWithValidate,
    ValidationObserver,
    SaveButton
  },
  head() {
    return {
      title: "Login",
      meta: [{ name: "description", content: "Login page" }]
    };
  },
  data() {
    return {
      loading: { submit: false },
      name: "",
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(validate) {
      validate().then(success => {
        if (success) {
          this.loading.submit = true;
          const body = {
            username: this.username,
            password: this.password
          };
          this.$api
            .post("/users/login", body)
            .then(res => {
              const { data } = res;
              localStorage.setItem("accessToken", data.access_token);
              this.$router.push("/");
            })
            .catch(error => {
              this.$bus.$emit("alert", "error", "username or password invalid");
              console.log("error", error);
            })
            .finally(() => {
              this.loading.submit = false;
            });
        }
      });
    }
  }
};
</script>
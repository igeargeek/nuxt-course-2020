<template>
  <b-container fluid class="register-page">
    <b-row class="content">
      <b-col cols="12" sm="8">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img src="/images/logo-igg.png" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  <TextInputWithValidate
                    v-model="password"
                    name="รหัสผ่าน"
                    label="รหัสผ่าน"
                    rules="required|password"
                  />
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { TextInputWithValidate } from "~/components/inputs";

export default {
  // layout: "blank",
  components: {
    TextInputWithValidate
  },
  data() {
    return {
      password: ""
    };
  }
};
</script>
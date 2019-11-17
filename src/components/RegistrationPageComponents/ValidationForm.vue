<template>
  <div id="validationForm">
    <v-card width="30em" class="mx-auto mt-12" raised>
      <v-card-text>
        <v-card-title
          primary-title
          class="text-uppercase blue--text font-weight-bold justify-center"
        >Registration Form</v-card-title>

        <v-form class="px-3" v-model="valid">
          <v-text-field color="blue" prepend-icon="mail" label="E-mail" v-model="email"></v-text-field>

          <v-text-field
            color="blue"
            prepend-icon="fas fa-lock fa-1x"
            label="Password"
            v-model="password"
          ></v-text-field>

          <v-text-field
            color="blue"
            prepend-icon="fas fa-lock"
            label="Confirm password"
            v-model="confirmPassword"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
            class="my-5"
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" class="mr-4 px-10" @click="submit">Submit</v-btn>

          <v-btn color="error" class="mr-4" @click="resetRorm">Reset Form</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submit() {},
    resetForm() {
      console.log(this.email, this.password);
    }
  }
};
</script>
<template>
<div id="validationForm">

<div>
   <v-alert
     v-if="$v.email.$error"
     type="error"
     class="mt-1"
     dense
     >
      Input Email is not correct!
    </v-alert>
  
 <v-alert
     v-if="$v.password.$error"
     type="error"
     class="mt-1"
     dense
     >
      Input Password not correct!
  </v-alert>




 <v-alert
 class="mt-1"
 text
      dense
      icon="check_circle"
      type="success"
    >
      I'm a dense alert with the <strong>text</strong> prop and a <strong>type</strong> of success
    </v-alert>


</div>


    <v-card width="30em" class="mx-auto mt-12" raised>
      <v-card-text>
        <v-card-title
          primary-title
          class="text-uppercase blue--text font-weight-bold justify-center"
        >Registration Form</v-card-title>
<!-- v-model="valid"  -->
        <v-form class="px-3" @click.prevent="submit">
          <v-text-field
              color='colorErrorFild' 
              prepend-icon="mail"
              label="E-mail"
              v-model.lazy.trim="$v.email.$model"
          ></v-text-field>
          <!-- <span v-if="$v.email.$error" class="error" > Error </span> -->

          <v-text-field
            color="blue"
            prepend-icon="fas fa-lock fa-1x"
            label="Password"
            v-model.lazy.trim="$v.password.$model"
          ></v-text-field>

          <v-text-field
            color="blue"
            prepend-icon="fas fa-lock"
            label="Confirm password"
            v-model="confirmPassword"
          ></v-text-field>

          <!-- <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
            class="my-5"
          ></v-checkbox> -->

          <!-- <v-btn :disabled="!valid" color="success" class="mr-4 px-10" @click="submit">Submit</v-btn> -->

          <v-btn color="error" class="mr-4" @click="resetForm">Reset Form</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
import { required, email, minLength, maxLength, between } from 'vuelidate/lib/validators'




export default {
  data() {
    return {
      colorErrorFild:"blue",
      email: "",
      password: "",
      confirmPassword: "",
    }
  },
  validations:{
      email:{
        required,
        email,
      },
      password:{
        required,
        minLength:minLength(6),
        maxLength:maxLength(20)
      },
       confirmPassword:{
       required,
        minLength:minLength(6),
        maxLength:maxLength(20)

       }

  },


  methods: {
    submit(e) {
       console.log(e);
       

    },
  
    resetForm() {
       console.log(this.email);
    
       
      this.email = ""
      this.password = ""
      this.confirmPassword = ""

     
      
    }
  }
};
</script>
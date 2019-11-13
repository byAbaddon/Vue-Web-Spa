<template>
  <div id="validationForm">


 <v-card width="30em" class=" mx-auto  mt-12">
   

<v-card-text >
<v-card-title
 primary-title
 class="text-uppercase blue--text  font-weight-bold  justify-center ">
 Registration Form 
</v-card-title>

   <v-form class="px-3">

     <v-text-field
       prepend-icon="mail"
       label="E-mail"
       v-model="email">
     </v-text-field>

     <v-text-field
       prepend-icon="fas fa-lock"
       label="Password"
       v-model="password">
     </v-text-field>

     <v-text-field
       prepend-icon="fas fa-lock"
       label="Confirm password"
       v-model="confirmPassword">
     </v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        class="my-5"
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 px-10"
        @click="submit"
      > Submit
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="resetRorm"
      > Reset Form
      </v-btn> 
     

   </v-form>
</v-card-text>
 </v-card>

  </div>
</template>


<script>
export default {
  data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
}
},
methods: {
  submit(){


  },
  resetForm(){
console.log(this.email , this.password);
  }
},

  
}
</script>
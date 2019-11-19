<template>
  <div id="loginForm">
    <v-app>
                

     <v-content  v-show="closeForm" >   
        
         
   <v-layout row wrap  justify-end class="my-3 mx-6">
            <v-card  raised  width="18em"   >
              <v-card-text>
                <v-card-title
                  primary-title
                  class="text-uppercase blue--text font-weight-bold"
                  >Login
    <!--colse chip button -->               
              <v-layout row wrap justify-end >                                 
                <v-chip outlined
                        close
                        x-small
                        class="red--text"
                        @click="closeLoginForm"
                        
                        >close</v-chip> 
                       
              </v-layout>
                
                 </v-card-title>

                <v-form class="px-3" v-model="valid">
                  <v-text-field color="blue" prepend-icon="mail" label="E-mail" v-model="email"></v-text-field>

                  <v-text-field
                    color="blue"
                    prepend-icon="fas fa-lock fa-1x"
                    label="Password"
                    v-model="password"
                  ></v-text-field>

                  <v-btn
                     max-width="1"
                    :disabled="!valid"
                    color="success"
                    class="mr-4 px-10"
                    @click="submit"
                  >Login</v-btn>

                  <v-btn 
                   max-width="120"
                   color="grey"
                   class="mr-4"
                   @click="routeToRegistrationPage"
                  >Registration</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
            </v-layout> 

           
     </v-content>

 <!-- <v-layout row wrap  justify-end>
     <v-btn  :elevation="selected" block color="success" class="ma-1">text</v-btn>
  </v-layout> -->

    </v-app>
  </div>
</template>

<script>
export default {
  data(){
    return{
     closeForm: true
     
    }
  },methods: {
    routeToRegistrationPage() {
     this.$router.push('/registration')
    },
    closeLoginForm() {
      this.closeForm = false
      this.$router.push('/')
    },



  

  },
}
</script>


<template>
  <div id="loginForm">
    <v-app>
                

     <v-content  >
        
         
   <v-layout row wrap  justify-end class="my-3 mx-6">
            <v-card  raised  width="18em">
              <v-card-text>
                <v-card-title
                  primary-title
                  class="text-uppercase blue--text font-weight-bold"
                >Login Form</v-card-title>

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
                   color="error"
                   class="mr-4"
                   @click="resetRorm"
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
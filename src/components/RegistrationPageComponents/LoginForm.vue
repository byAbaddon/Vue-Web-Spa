<template>
  <div id="loginForm">
    <v-app>
      <v-content>
        <!--   - контейнер на съдържанието -->
        <v-layout row wrap>
          <!--  - обвивка -->
          <v-flex xs12 md6 lg8>
            <!-- - свойства на гъвкавост при обпределен екран -->

            <v-card width="24em" height="16em" raised>
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
                    :disabled="!valid"
                    color="success"
                    class="mr-4 px-10"
                    @click="submit"
                  >Submit</v-btn>

                  <v-btn color="error" class="mr-4" @click="resetRorm">Reset Form</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-content>
    </v-app>
  </div>
</template>
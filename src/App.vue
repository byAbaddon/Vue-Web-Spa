<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-layout row wrap>
          <v-flex xs12 md6 lg12>
            <!-- <home-page/>      -->
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>-->

            <router-view />
          </v-flex>
        </v-layout>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import HomePage from "@/views/HomePage";
import RegistrationPage from "@/views/RegistrationPage";
import About from "@/views/About";

export default {
  components: {
    HomePage,
    RegistrationPage,
    About,
  }
};
</script>



<style lang="scss">
</style>

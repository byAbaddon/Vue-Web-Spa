<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-layout row wrap>
          <v-flex xs12 md6 lg12>

            <header-bar />

               <main>
                 <v-container>
                    <router-view />
                 </v-container>
               </main>

            <footer-bar />

          </v-flex>
        </v-layout>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

export default {
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>



<style lang="scss">
</style>

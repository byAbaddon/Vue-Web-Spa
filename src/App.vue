<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-layout row wrap>
          <v-flex xs12 md12  lg12 xl12>

          <header-bar > </header-bar> 
               <main>
                   <router-view />
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




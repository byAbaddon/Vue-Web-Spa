<template>

  <v-app-bar dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>
    
   
 
    <v-btn icon  rounded router-link to="/">
      <v-icon>mdi-dots-vertical</v-icon>
   </v-btn>

       <v-btn class=" green--text" rounded router-link to="/about">  
      <span>sign in</span>
      <v-icon  color="red" right > mdi-menu </v-icon>
     </v-btn>

     <v-btn class=" green--text" rounded router-link to="/registration">  
      <span>join</span>
      <v-icon  color="red" right   medium >mdi-heart</v-icon>
     </v-btn>

 <!-- <v-btn> Link One</v-btn> -->
      

  </v-app-bar>
</template>


<script>
export default {};
</script>

<style>
</style>
<template>
  <div>
    <!-- <nav>
    <v-app-bar dark>
    <v-toolbar-side-icon>
      
    </v-toolbar-side-icon>
      <v-btn>menu</v-btn>
      <v-spacer></v-spacer>
      <v-icon>mdi-anchor</v-icon>&nbsp;
      <v-toolbar-title>VUE-SPA WEB PROJECT</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router-link to="/" fab text class="red--text font-weight-bold">Home</v-btn>
      <v-btn router-link to="/about" fab text class="red--text font-weight-bold">About</v-btn>
      <v-btn router-link to="/join" fab text class="red--text font-weight-bold">Join</v-btn>

      <v-btn class="ml-n4px">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
   
  </v-app-bar>



  <v-card
    height="400"
    width="200"
    class="mx-auto"
  >
    <v-navigation-drawer permanent app  v-model="drawer" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
         
          link :to="item.rout"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content  class="indigo">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

     </nav>
    <router-view /> -->


<template>

     <v-app-bar dark>
      
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
         
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>




  </v-app-bar>
</template>

<v-app> 
<v-content>

  <v-layout row wrap>
    <v-flex xs12 md6 lg8 >
     <v-btn   block color="success" class="ma-1">text</v-btn>
    </v-flex>
</v-layout>


  <v-layout row wrap justify-space-around>
 <v-flex xs12 md6 lg3 >
    <v-btn   block color="warning" >text</v-btn>
  </v-flex>

   <v-flex xs12 md6 lg3 >
    <v-btn outlined  block color="warning" class="ml-1">text</v-btn>
  </v-flex>
</v-layout>

<v-layout row wrap ma-2>
 <v-tooltip top>
    <template v-slot:activator="{ on }">
     <v-btn depressed small color="primary" v-on="on" >
       <v-icon color="warning" left >folder</v-icon>
       <span class="yellow--text">Project</span>
     </v-btn>
       </template>
    <span>This is tooltip text</span>
  </v-tooltip>

       &nbsp;
   <v-btn depressed small color="primary">
   <v-icon left >person</v-icon>
   <span color="red" class="yellow--text">Person</span>
   </v-btn>

  <v-tooltip bottom>
   <template v-slot:activator="{ on }">
      <v-icon color="primary" v-on="on" >mdi-home</v-icon>
    </template>
   <span>This is icont</span>
  </v-tooltip>

  <v-tooltip right>
    <template v-slot:activator="{ on }">
       <p v-on="on"  >This is text</p>  
    </template>
       <p>test</p>
  </v-tooltip>
</v-layout>


<v-card v-for="(item, index) in items" :key="index">
<v-layout row wrap class="ma-1" justify-center>
<v-flex xs12 md6 lg3>
  <div class="caption body--text">{{index}}</div>
  <v-divider></v-divider>
  <div class="caption body--text">{{'num ' + index}}</div>
</v-flex>
<v-flex xs12 md6 lg3>
  <div class="caption body--text">{{item.title}}</div>
</v-flex>

<v-flex xs12 md6 lg3>
 <v-chip small class='light-green'> chip</v-chip>
 <v-chip close>text</v-chip>
 
  </v-flex>
</v-layout>
</v-card>



<v-layout row wrap ma-1>
  <v-flex xs12 sm3   ma-1  v-for="(items, index) in n" :key="index">

    <v-card raised  dark   hover   height="13em" width="20em" > 
    
      <v-card-title primary-title>
        <h3 class="headline mb-0">headline</h3>

<v-responsive>
 <!-- <v-avatar size="48"color="red"  class="ml-12 right">
 <v-icon large>person</v-icon>
  </v-avatar> -->
<v-row justify="space-around">
 <v-avatar size="48"  color="red">
  <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="alt">
 </v-avatar>
</v-row>
</v-responsive>

      </v-card-title>

        <p class="subline ml-3">subline</p>
   

<div class="yellow--text" >ksdfsdfdffffhfsdflksjdfsjadklfasdk</div>
    <v-card-actions>
      <v-btn color="success">text</v-btn>
      <v-btn color="error">text</v-btn>
 </v-card-actions>

 </v-card>

</v-flex>
</v-layout>


 <v-layout row wrap>
  <v-flex  xs12 sm6   ma-1 >
   <v-expansion-panels>
    <v-expansion-panel  v-for="(item,i) in 5"  :key="i" >
      <v-expansion-panel-header>Item
        <template v-slot:actions>
            <v-icon color="error">mdi-alert-circle</v-icon>
         </template>
      </v-expansion-panel-header>
         <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </v-expansion-panel-content>
     </v-expansion-panel>
   </v-expansion-panels>

  </v-flex>  
</v-layout>


<v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="primary">
          Dropdown Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router-link :to="item.rout"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>








</v-content>
</v-app>

  </div>
</template>



      

<script>
  export default {
    data () {
      return {
        png: "../assets/logo.png",
        n: 3,
        drawer: true,
        items: [
          { title: 'Home' , icon: 'mdi-view-dashboard',rout:"/"},
          { title: 'About', icon: 'mdi-image'         ,rout:"/about"},
          { title: 'Join' , icon: 'mdi-help-box'      ,rout:"/join"},
        ],
        right: null,
      }
    },
  }
</script>


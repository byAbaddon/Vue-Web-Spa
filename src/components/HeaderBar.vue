<template>
  <nav>
    <v-app-bar 
    dark
    class="caption">
      <!-- <v-navigation-drawer class="indigo"   height="120em" >
      </v-navigation-drawer>-->

      <v-app-bar-nav-icon @click="hideDrawer = ! hideDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn icon large rounded router-link to="/" v-show="hiden">
            <v-icon color="warning" v-on="on">mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Back To Home Page</span>
      </v-tooltip>

      <!-- <v-spacer></v-spacer> -->

      <v-btn
        id="singButton"
        class="green--text font-weight-bold caption"
        rounded
        @click="isHidden = !isHidden"
      >
        <!-- @click="showForm = !showForm     link to='/'   -->
        <span>sign in</span>
        <v-icon color="white" right>mdi-face</v-icon>
      </v-btn>

      <pre class="yellow--text font-weight-bold overline">
         Time
       <span>{{localTime}}</span>
      </pre>

      <!-- &nbsp; -->
    </v-app-bar>

    <v-navigation-drawer 
      :app ="!hideDrawer"
       v-show="!hideDrawer"
       class=""
       dark
      :width="width"
      >
 
       <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">Jonathan Lee</div>
            <div class="body-1">heyfromjonathan@gmail.com</div>
          </v-col>
        </v-row>
      </v-img>


      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route" link > 
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
     

        <v-slider v-model="width" min="200" max="300" step="1"></v-slider>
        <v-divider class="red"></v-divider>

  </v-navigation-drawer>

   



  </nav>
</template>
 


<script>
const time = new Date();
const showTime = () =>
  time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
setInterval(() => {
  showTime;
}, 1000);

export default {
  data() {
    return {
  right: null,
      hideDrawer: true,
      width: 300,
      isHidden: false,
      hiden: false,
      localTime: showTime(),
   

      items: [
        { title: 'Home',  icon: 'home' ,route:'/' },
        { title: "Dashboard", icon: "mdi-view-dashboard",route:'/registration'  },
        { title: "Photos", icon: "mdi-image" },
        { title: "About",  icon: "mdi-help-box" },
        { title: 'Inbox',  icon: 'inbox' },
        { title: 'Starred',icon: 'star' },
        { title: 'Sent email',   icon: 'send' },
        { title: 'Drafts',   icon: 'drafts' },
        { title:"***************"},
        { title: 'All mail',  icon: 'mail' },
        { title: 'Trash',icon: 'delete' },

      ],
    
    };
  },
  components: {},
  methods: {},

  watch: {
    // $route (to, from){
    //   if (this.$route.path === "/registration") {
    //     this.hiden = true;
    //   } else{
    //      this.hiden = false;
    //   }
    // }
  }
};
</script>



<style lang="scss" scoped>
#singButton {
  margin: 0 auto;
  margin-right: 10em;
}

</style>
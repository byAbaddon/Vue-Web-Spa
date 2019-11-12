<template>

  <div class="home">  
    <header-bar/>
    <!-- <header-bar/> -->
    <footer-bar/>
 </div>
</template>

<script>
import HeaderBar from '@/components/HomePageComponents/HeaderBar'
import MainBox from '@/components/HomePageComponents/MainBox'
import FooterBar from '@/components/HomePageComponents/FooterBar'

export default {
  components:{
    HeaderBar,
    MainBox,
    FooterBar,
  }
}
</script>
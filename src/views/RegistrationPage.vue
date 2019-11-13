<template>

  <div class="registration">  
    <header-bar/>    
<h1 >Welcome to registration Page</h1>
    <validation-form/>
    <footer-bar/>
 </div>
</template>

<script>
import HeaderBar from '@/components/HomePageComponents/HeaderBar'
import ValidationForm from '@/components/RegistrationPageComponents/ValidationForm.vue'
import FooterBar from '@/components/HomePageComponents/FooterBar'

export default {
  components:{
    HeaderBar,
    ValidationForm,
    FooterBar,
  }
}
</script>
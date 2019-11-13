<template>

  <div class="registration">  
    <header-bar/>    
<h1 >Welcome to registration Page</h1>
    <validation-form/>
    <footer-bar/>
 </div>
</template>

<script>

import ValidationForm from '@/components/RegistrationPageComponents/ValidationForm.vue'


export default {
  components:{
   
    ValidationForm,
   
  }
}
</script>
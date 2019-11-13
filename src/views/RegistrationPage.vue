<template>
  <div class="registration">
    <h1>Welcome to registration Page</h1>
    <validation-form />
  </div>
</template>

<script>
import ValidationForm from "@/components/RegistrationPageComponents/ValidationForm.vue";

export default {
  components: {
    ValidationForm
  }
};
</script>

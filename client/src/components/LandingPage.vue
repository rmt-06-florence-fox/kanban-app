<template>
<div>
  <!-- <RegisterPage v-if=""></RegisterPage> -->
  <LoginPage :changeStatus="changeStatus"></LoginPage>
</div>
</template>

<script>
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

export default {
  name: "landingPage",
  props: ['changeStatus'],
  components: {
    LoginPage,
    RegisterPage
  }
};
</script>

<style>
</style>
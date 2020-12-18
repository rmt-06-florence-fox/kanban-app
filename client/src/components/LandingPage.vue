<template>
<div>
  <RegisterPage 
    v-if="!hasAccount"
    :hasAccount="hasAccount"
    :checkAcc="checkAcc"
  ></RegisterPage>
  <LoginPage 
    v-if="hasAccount"
    :changeStatus="changeStatus"
    :checkAcc="checkAcc"
    :getTasks="getTasks"
  ></LoginPage>
</div>
</template>

<script>
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

export default {
  name: "landingPage",
  props: ['changeStatus', 'hasAccount', 'checkAcc', 'getTasks'],
  data() {
    return {
      isShow: true
    }
  },
  components: {
    LoginPage,
    RegisterPage
  },
  methods: {
    
  }
};
</script>

<style>
</style>
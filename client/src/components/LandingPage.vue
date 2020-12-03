<template>
<div>
  <RegisterPage 
    v-if="!hasAccount"
    :hasAccount="hasAccount"
    :hasAcc="hasAcc"
  ></RegisterPage>
  <LoginPage 
    v-if="hasAccount"
    :changeStatus="changeStatus"
    :hasAcc="hasAcc"
  ></LoginPage>
</div>
</template>

<script>
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

export default {
  name: "landingPage",
  props: ['changeStatus', 'hasAccount', 'hasAcc'],
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
<template>
  <div>
    <SignIn v-if="haveAccount" :changeLogin="changeLogin"></SignIn>
    <SignUp v-if="!haveAccount" :signUpUser="signUpUser" :changeLogin="changeLogin"></SignUp>
  </div>

</template>

<script>
  import SignIn from './SignIn'
  import SignUp from './SignUp'
  export default {
    components: {
      SignIn,
      SignUp
    },
    props: ['changeLogin', 'haveAccount', 'signUpUser']
  }
</script>

<style>

</style>
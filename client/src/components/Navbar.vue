<template>
  <div>
    <nav class="custom-navbar">
      <div class="ml-4">
        <img id="logo-kanban" src="../../assets/han-kanban-logo.png" alt="logo" type="submit" onclick="return confirm('Are you sure?')">
      </div>
      <div class="mr-4">
        <div class="right-navbar">
          <a href="#" v-if="!isLogin" class="btn-color-navbar btn btn-signup text-color ml-5" @click.prevent="doSignUp"><strong>Sign Up</strong></a>
          <a href="#" v-if="isLogin" class="btn-color-navbar btn btn-signout text-color ml-5" @click.prevent="doSignOut"><strong>Sign Out</strong></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  props: ['changeLogin', 'isLogin', 'signUpUser'],
  methods: {
    doSignOut() {
      localStorage.clear()
      this.changeLogin(false)
      this.signUpUser(true)
      swal('Thank you. See ya!', {
        icon: 'success',
        buttons: false,
        timer: 2500
      })
    },
    doSignUp() {
      this.signUpUser(false)
    }
  }
}
</script>

<style>

</style>
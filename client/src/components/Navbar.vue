<template>
  <div>
    <nav class="custom-navbar">
      <div class="ml-4">
        <img id="logo-kanban" src="../../assets/han-kanban-logo.png" alt="logo" type="submit" @click.prevent="cheerUp">
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
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          console.log('User sign out!')
          swal('Thank you. See ya!', {
            icon: 'success',
            buttons: false,
            timer: 2500
          })
        })
      },
      doSignUp() {
        this.signUpUser(false)
      },
      cheerUp() {
        if (this.isLogin) {
          const name = localStorage.getItem('name')
          swal(`Hi, ${name}. This is a beautiful day. I think I love it when you put a smile on that face. Cheer up 😊`, {
            icon: 'info',
            buttons: false,
            timer: 5000
          })
        } else {
          swal('Hello, please sign in first 😊', {
            icon: 'info',
            buttons: false,
            timer: 3000
          })
        }
      }
    }
  }
</script>

<style>

</style>
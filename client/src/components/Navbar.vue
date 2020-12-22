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
          const quotes = [
            `This is a beautiful day. I think I'm in love when you put a smile on that face`,
            `Be yourself, everyone else is already taken`,
            `You only live once, but if you do it right, once is enough`,
            `Be the change that you wish to see in the world`,
            `Life is what happens to us while we are making other plans`,
            `That which does not kill us makes us stronger`,
            `It is never too late to be what you might have been`,
            `Everything you can imagine is real`,
            `If you only read the books that everyone else is reading, you can only think what everyone else is thinking`,
            `We don't see things as they are, we see them as we are`,
            `Sometimes the questions are complicated and the answers are simple`
          ]
          let random = Math.floor(Math.random() * quotes.length)
          let quote = quotes[random]
          swal(`Hi, ${name}. ${quote}. Have a good day 😊`, {
            icon: 'info',
            buttons: false,
            timer: 7000
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
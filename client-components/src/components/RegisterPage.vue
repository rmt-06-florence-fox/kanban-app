<template>
  <div class="form-login">
    <h1>INI REGISTER</h1>
    <form @submit.prevent="register">
      <label for="email-form">email :</label>
      <input v-model="user.email" type="email" id=email-form><br>
      <label for="password-form">Password :</label>
      <input v-model="user.password" type="password" id=password-form><br>
      <a @click="changePage" href="#">Login</a>
      <button class="btn btn-info">Register</button>
    </form> 
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {

    },
    changePage() {
      let payload = {
        pageName: 'loginPage'
      }
      this.$emit('changePage', payload)
    }
  }
}
</script>

<style>

</style>
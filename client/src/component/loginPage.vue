<template>
    <div class="container p-5">
        <legend>Login</legend>
        <form @submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="loginUser.email" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="loginUser.password" required> 
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <a href="" @click.prevent='register'>Register Here!</a><br><br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
</template>

<script>
export default {
    name: 'loginPage',
    data() {
        return {
          loginUser: {
            email: '',
            password: ''
          }
        }
    },
    methods: {
        login() {
            // localStorage.setItem('access_token', '12345')
            console.log(this.loginUser);
            this.$emit('dataLogin', this.loginUser)
        },
        register() {
          this.$emit('changePage', 'registerPage')
        }
    }
}
</script>

<style>

</style>
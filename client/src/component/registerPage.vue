<template>
    <div class="container p-5">
        <legend>Register</legend>
        <form @submit.prevent="register">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="registerUser.email" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="registerUser.password" required>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <a href="" @click.prevent='login'>Already have an account? login here</a><br><br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
</template>

<script>
export default {
    name: 'registerPage',
    data() {
        return {
          registerUser: {
            email: '',
            password: ''
          }
        }
    },
    methods: {
      register() {
        console.log(this.registerUser);
        this.$emit('dataRegister', this.registerUser)
        // this.registerUser.email = ''
        // this.password = ''
      },
      login(){
        this.$emit('changePage', 'loginPage')
      }
    }
}
</script>

<style>

</style>
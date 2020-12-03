<template>
  <div>
    <div class="login-container container col-4 shadow-lg p-5">
        <h1 class="text-center">login</h1>
        <div class="card bg-transparent">
          <form @submit.prevent="login" class="p-2">
            <div class="form-group">
              <label for="exampleInputEmail1"><strong>Email address</strong></label>
              <input v-model="loginUser.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"><strong>Password</strong></label>
              <input v-model="loginUser.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>  
        </div>
        <div class="card-footer"><a href="#" @click="changePage">Register</a></div>
      </div>
  </div>
</template>

<script>
export default {
  name : "login-form-component",
  methods:{
    changePage(){
      // console.log('login vue');
      this.$emit("halamanRegister","register page")
    },
    login(){
      this.$emit('loginUserData', this.loginUser)
    }
  },
  data(){
    return {
      loginUser :{
        email : '',
        password : ''
      }
    }
  },
}
</script>

<style>

</style>
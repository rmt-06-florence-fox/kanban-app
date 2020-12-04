<template>
  <section id="register-page" class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-4 mt-5">
        <h1 class="mb-5 text-center"><b>Register</b></h1>
        <form id="form-register" @submit.prevent='regist'>
          <div class=" form-group mt-1">
            <label for="regist-username">Username</label>
            <input type="text" v-model="registUser.name" class="form-control" id="regist-username" placeholder="Your username">
          </div>
          <div class="form-group mt-1">
            <label for="regist-email">Email address</label>
            <input type="email" v-model="registUser.email" class="form-control" id="regist-email" placeholder="Your email">
          </div>
          <div class="form-group mt-1">
            <label for="register-password">Password</label>
            <input type="password" v-model="registUser.password" class="form-control" id="register-password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-submit btn-block">Sign Up</button>
        </form>
      </div>
      <div class="col-6">
        <div class="mb-5 mt-5 ml-5">
          <img src="../img/regist.svg" alt="" class="img-fluid mt-5 img-regist">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Register',
    data(){
      return{
        registUser:{
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods:{
      regist(){
        console.log(this.registUser);
        this.$emit('dataRegist', this.registUser)
        // this.$emit('changePage', 'Login Page')
      }
    }
  }
</script>

<style>

</style>
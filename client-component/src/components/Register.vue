<template>
  <section class="container custom-bg">
        <div class="row justify-content-center mt-5">
            <div class="col-4">
                <div class="shadow-lg p-5 mb-5 bg-white rounded">
                    <div class="mb-5">
                        <img src="https://i1.wp.com/sbo2com.net/wp-content/uploads/2018/10/register-icon.png?ssl=1" alt="register" class="img-fluid">
                    </div>
                    <h4 class="mb-4"><b>Register</b></h4>
                    <form @submit.prevent="regist">
                        <div class="form-group">
                            <label for="register-email">Email address</label>
                            <input type="email" class="form-control" v-model="registUser.email" placeholder="Your email">
                        </div>
                        <div class="form-group">
                            <label for="register-password">Password</label>
                            <input type="password" class="form-control" v-model="registUser.password" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                    <br>
                    <button class="btn btn-secondary btn-block" @click="toLogin">already have an account?</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return{
        registUser: {
          email: '',
          password: ''
        }
      }
    },
    methods:{
        regist() {
            this.$emit('dataRegist', this.registUser)
        },
        toLogin() {
            this.$emit('changePage', 'Login Page')
        }
    }
  }
</script>

<style>
</style> 
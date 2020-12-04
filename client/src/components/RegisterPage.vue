<template>
   <div>
     <!-- Register -->
    <div class="box-register">
        <div class="row" style="height: 615px;">
            <div class="col-sm-3 col-md-6 col-lg-6" style="background-color: #e76f51; text-align: center;">
              <div>
                <img src="../ReadingSideDoodle (1).png" height="310px" width="420px " style="margin-top: 100px;">
                <h1 style="color: #f4a261;"><strong> KANBAN.</strong></h1>
                <P style="color: #264653;">
                <strong>Manage Your Task <br>
                Collaborate With Your Team</strong>
                </p>
              </div>
            </div>
            <div class="col-sm-9 col-md-6 col-lg-6" style="background-color: #e9c46a;">
              <div class="container" style="align-content: center; margin-top: 90px;">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#" style="color: grey;" @click.prevent="gotoLogin">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#" >Register</a>
                  </li>
                </ul>
                <div class="container" style="padding-right: 300px;">
                  <form style="padding-top: 20px" @submit.prevent="register">
                    <p v-if="errorMessage !== ''" style="color: red">{{errorMessage}}</p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-secondary">sign-up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "RegisterPage",
    data () {
      return {
        email : "",
        password: "",
        errorMessage: ""
      }
    },
    methods: {
      register () {
        axios ({
          method : 'POST',
          url : 'http://localhost:3000/register',
          data : {
            email : this.email,
            password : this.password
          }
        })
        .then (response => {
          console.log ('BERHASIL REGISTRASI')
          this.$emit("gotoLogin")
        })
        .catch (err => {
          console.log(err)
          this.errorMessage = 'Email and Password are required'
        })
        .finally(() => {
          this.email = ""
          this.password = ""
        })
      },
      gotoLogin () {
        this.$emit("gotoLogin")
      }
    }
}
</script>

<style>

</style>
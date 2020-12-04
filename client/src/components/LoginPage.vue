<template>
    <div>
        <div class="col col-sm-6 container" style="box-shadow: 0px 0px 10px; margin-top: 20px;">
            <div style="height: 80px;"></div>
            <h2 class="row justify-content-md-center">Login Account</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-6" style="margin: 7%">
        <form @submit.prevent="login">
        <div class="form-group">
            <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" required placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div><br>
        <button type="submit" class="btn btn-primary">Login</button><br>
            <br><span>
                <small> Don't have an account? </small>
            </span>
            <button class="btn btn-link" @click="regPage">Sign Up</button>
        </form>
        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
        <!-- <GoogleLogin :params="params" :renderParams="renderParams" :logoutButton=true>Logout</GoogleLogin> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id: "818110355134-h5ni01a0vb2dtni6oflsin3efmilahba.apps.googleusercontent.com"
        },
        renderParams: {
            width: 250,
            height: 50,
            longtitle: true
        }
    }
  },
  components: {
      GoogleLogin
  },
  methods: {
    login(data) {
        console.log(this.email, this.password);
        this.$api({
          method: 'POST',
          url: 'login',
          data: {
              email: this.email,
              password: this.password
            }
        })
        .then(Response => {
            localStorage.setItem('access_token', Response.data.token)
            localStorage.setItem('email', Response.data.email)
            localStorage.setItem('id', Response.data.id)
            this.$emit("nextPage")
            console.log(Response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() =>{
            this.email = '',
            this.password = ''
        })
    },
    regPage() {
        this.$emit("regPage")
        }
    },

    onSuccess(googleUser) {
        const user = googleUser.getBasicProfile()
        var google_token = googleUser.getAuthResponse().id_token
        this.$emit('loginGoogle', google_token)
    }
};
</script>

<style>
</style>
<template>
    <div class="container p-5">
        <legend>Login</legend>
        <form @submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Input Your email here" aria-describedby="emailHelp" v-model="loginUser.email" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Input Your password here" v-model="loginUser.password" required> 
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <a href="" @click.prevent='register'>Register Here!</a><br><br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <!-- <br><googleLogin @googleToken="googleToken"></googleLogin>  -->
          <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    </div>
</template>

<script>
  import GoogleLogin from 'vue-google-login';
  // import googleLogin from './loginGoogle'
export default {
    name: 'loginPage',
    data() {
        return {
          loginUser: {
            email: '',
            password: ''
          },
          params: {
              client_id: "319018481967-djr87oommhegmh2ksuqv4alnc80am47d.apps.googleusercontent.com"
          },
          renderParams: {
              width: 250,
              height: 50,
              longtitle: true
          },
        }
    },
    components: {
      GoogleLogin
    },
    methods: {
        login() {
            console.log(this.loginUser);
            this.$emit('dataLogin', this.loginUser)
        },
        register() {
          this.$emit('changePage', 'registerPage')
        },
        onSuccess(idToken) {
            // console.log(idToken);
            this.$emit('googleToken', idToken)
        },
        onFailure(err) {
            console.log(err);
        }
    }
}
</script>

<style>

</style>
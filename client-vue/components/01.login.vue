<template>
  <div>
    <div class="row" id="loginP">
      <div class="col-sm-12 col-md-6 d-flex justify-content-center d-flex align-items-center" style="height: 100vh;">
        <div class="row">
          <div class="col-md-12">
            <p>Manage your time with</p>
            <h3>The Kanban.co!</h3>
          </div>
          <div class="col-md-12 pt-4 bg-white rounded shadow">
            <h4>Login here</h4>
            <form @submit.prevent = "requestLogin">
              <div class="form-group">
                <label for="InputEmail">Email address</label>
                <input v-model = "email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="InputPassword">Password</label>
                <input v-model = "password" type="password" class="form-control" id="InputPassword">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
             <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" class="pt-3"></GoogleLogin>
            <p class="pt-2">If you're not registered yet, klik <a href = '' @click.prevent = "changePage('register page')">here!</a></p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 d-flex justify-content-center d-flex align-items-center" style="height: 100vh;">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
  data() {
    return {
      email : '',
      password : '',
      params: {
        client_id: "264142133984-f817pmd2s0nn4kmunngu3oh249gq0853.apps.googleusercontent.com"
        },
      renderParams: {
        width: 200,
        height: 40,
        longtitle: true
        }
    }
  },
  components: {
    GoogleLogin
    },
  methods : {
    requestLogin(){
      let obj = {
        email : this.email,
        password : this.password
      }
      this.$emit('requestLogin', obj)
    },
    changePage(value){
      this.$emit('requestChangePage', value)
    },
    onSuccess(googleUser) {
       this.$emit('loginGoogle', googleUser)
    }
  }
}
</script>

<style>

</style>
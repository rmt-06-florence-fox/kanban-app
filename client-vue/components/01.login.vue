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
            <form @submit.prevent = "requestLogin()">
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
export default {
  data() {
    return {
      email : '',
      password : ''
    }
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
    }
  }
}
</script>

<style>

</style>
<template>
    <div class="row" id="registerP">
      <div class="col-sm-12 col-md-6 d-flex justify-content-center d-flex align-items-center" style="height: 100vh;">
        <div class="row">
          <div class="col-md-12 pt-4 bg-white rounded shadow">
            <h4>Register here</h4>
            <form @submit.prevent = "requestCreate">
              <div class="form-row">
                <div class="col-md-6">
                  <label for="InputFirstName">First Name</label>
                  <input v-model = "firstName" type="text" class="form-control" id="InputFirstName" >
                </div>
                <div class="col-md-6">
                  <label for="InputLastName">Last Name</label>
                  <input v-model = "lastName" type="text" class="form-control" id="InputLastName" >
                </div>
              </div>
              <div class="form-group">
                <label for="InputEmailRegister">Email address</label>
                <input v-model = "email" type="email" class="form-control" id="InputEmailRegister" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="InputPasswordRegister">Password</label>
                <input v-model = "password" type="password" class="form-control" id="InputPasswordRegister">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <p class="pt-2">If you're already registered, klik <a href = '' @click.prevent = "changePage('login page')">here!</a></p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 d-flex justify-content-center d-flex align-items-center" style="height: 100vh;">
        <img src="" alt="">
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName : '',
      lastName : '',
      email : '',
      password : ''
    }
  },
  methods : {
    requestCreate(){
      let obj = {
        firstName : this.firstName,
        lastName : this.lastName,
        email : this.email,
        password : this.password
      }
      this.$emit('requestCreate', obj)
    },
    changePage(value){
      this.$emit('requestChangePage', value)
    }
  }
}
</script>

<style>

</style>
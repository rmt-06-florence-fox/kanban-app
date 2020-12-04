<template>
      <div id="register-page" class="form-content" >
        <section id="landing" >
          <div class="d-flex justify-content-center align-items-center" style="height: 100vh;"  >
            <div class="p-5 bg-light shadow" style="width: auto; height: auto; border-radius: 10px">
                  <form @submit.prevent="register">
                    <div class="form-group">
                      <h3>Create new Account</h3>
                      <label for="name">Name</label>
                      <input v-model="name"
                       type="name" name="name" id="regist-name" class="form-control">
                  </div>
                      <div class="form-group">
                          <label for="email">Email</label>
                          <input v-model="email" 
                          type="email" name="email" id="regist-email" class="form-control">
                      </div>
                      <div class="form-group">
                          <label for="password">Password</label>
                          <input v-model="password"
                           type="password" name="password" id="regist-password" class="form-control">
                      </div>
                      <button type="submit " class="btn btn-primary">Register</button>
                  </form>
                  <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
              </div>
          </div>
        </section>
      </div>

</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      name:"",
      email: "",
      password: ""
    }
  },
  methods: {
    register(){
     let userData = {
        name : this.name,
        email : this.email,
        password : this.password
      }
        this.$emit('userRegister', userData)
      

    }
     
  }

}
</script>

<style>

</style>
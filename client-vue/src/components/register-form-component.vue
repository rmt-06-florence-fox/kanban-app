<template>
  <div>
    <div class="register-container container col-4 shadow-lg p-5">
        <h1 class="text-center">register form</h1>
        <div class="card bg-transparent">
          <form @submit.prevent="register" class="p-2">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="registUser.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small class="form-text text-muted">put something later</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="registUser.password" type="password" class="form-control" id="exampleInputPassword1">
              <small class="form-text text-muted">put something later</small>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>  
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name : "register-form-component",
  data(){
    return {
      registUser : {
        email : '',
        password : ''
      }
    }
  },
  methods :{
    register(){
      // console.log(this.registUser, 'mashook');
      this.$emit("registUser", this.registUser)
    }
  }
}
</script>

<style>

</style>
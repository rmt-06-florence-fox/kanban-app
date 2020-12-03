<template>
  <!-- register Page -->
        <div  class="container w-50 mt-5 ml-1">
          <div class="card text-left shadow">
            <div class="card-header bg-primary">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a @click.prevent = "login" class="nav-link text-white" href="#">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Register</a>
                </li>
              </ul>
            </div>
            <form @submit.prevent = "registSubmit">
              <div  class="card-body">
                <label for="email-login" class="card-title">Email</label>
                <input v-model="email" id="email-login" class="form-control" type="text" placeholder="Sleketemb@mail.com">
                <label for="password-login" class="card-title mt-3">Password</label>
                <input v-model="password" id="password-login" class="form-control" type="password">
    
              </div>
              <div class="row container ml-2 mb-3">
                <button class="btn btn-lg btn-primary">Register</button>
              </div>
            </form>
    
          </div>
    
        </div>

</template>

<script>
export default {
    name: 'registerForm',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods :{
        login(){
            this.$emit('changePageName', 'login page')
        },
        registSubmit(){
            this.$emit('registSubmit',{
                email: this.email,
                password: this.password
            } ),
            this.email = ''
            this.password = ''
        }

    }

}
</script>

<style>

</style>
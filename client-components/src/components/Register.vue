<template>
  <section>
    <div class="container">
      <div class="row" style="min-height: 900px">
        <div class="col-sm d-flex justify-content-center align-items-center">
          <!-- register  -->
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link" href="#" @click="login">Log In</a>
                </li>
                <li class="nav-item text-black">
                  <a class="nav-link active" href="#">Register</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="form-group text-left">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group text-left">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group text-left">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                </div>
                <div class="text-left">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    name: "Register",
    data(){
        return{
            name: '',
            email: '',
            password:''
        }
    },
    methods:{
        login(){
            localStorage.clear()
            this.$emit('changePage', 'login')
        },
        register(){
            console.log(this.name);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            })
                .then(response=> {
                    this.$emit('changePage', 'login')
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(()=>{
                    this.name = ''
                    this.email = ''
                    this.password = ''
                })
        }
    }
};
</script>

<style>
</style>
<template>
<div>
    <div class="login-container">
        <div class="card bg-light mb-5" style="max-width: 18rem;">
            <div class="card-header">Register</div>
                <div class="card-body">
                    <h5 class="card-title">Register your account</h5>
                    <form @submit.prevent="registerNewUser">

                        <div class="form-group">

                            <label >Email adress</label>
                            <input v-model="email" type="email" class="form-control">
                            <small id="" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            
                        </div>

                        <div class="form-group">
                        <label >Password</label>
                        <input v-model="password" type="password" class="form-control"> 
                        </div>

                        <button  type="submit" class="btn btn-primary container-fluid mb-3">Register</button>

                        <button @click="changePage('loginPage')" class="btn  btn-danger container-fluid">cancel</button>
                    </form>   
                </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RegisterPage",
    data()  {
        return {
            email : "",
            password : ""
        }
    },
    methods : {
        registerNewUser(){
            const newUser = {
                email : this.email,
                password : this.password
            }
            this.$emit('register', newUser)
            this.email = ""
            this.password =""
        },
        changePage(page){
            this.$emit('changePage',page)
        }
    }
}
</script>

<style>

</style>
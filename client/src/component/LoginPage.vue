<template>
  <div>
    <div>
        <div class="card bg-light mb-5" >
            <div class="card-header">Login</div>
                <div class="card-body">
                    <h5 class="card-title">login to continue</h5>
                    <form @submit.prevent = "" >

                        <div class="form-group">
                            <label>Email address</label>
                            <input v-model="userData.email" type="email" class="form-control"  aria-describedby="">
                            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div class="form-group">
                            <label >Password</label>
                            <input v-model="userData.password" type="password" class="form-control" >
                        </div>

                        <button  @click="emitLoginFunc" class="btn btn-primary container-fluid mb-3">login</button>

                        <small id="" class="form-text text-muted">Login with google account</small>
                        <div class="g-signin2 google" data-onsuccess="onSignIn"></div>

                        <small id="" class="form-text text-muted">Dont have an account ? Please Register</small>
                        <button @click="changePage('registerPage')" class="btn  btn-success container-fluid">Register</button>
                    
                    </form>
                </div>   
        </div>
    </div>
  </div>

</template>

<script>
export default {
    name : "LoginPage",
    data() {
        return {
            userData : {
                email : "",
                password  : ""
            }
        }
    },
    methods : {
        emitLoginFunc(){
            this.$emit("login",this.userData)
        },
        changePage(page){
            // console.log('sss')
            this.$emit('changePage',page)
        }
    }
}
</script>

<style>

</style>
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
                         <GoogleLogin :params="params" :onSuccess="onSuccess" >Login</GoogleLogin>

                        <small id="" class="form-text text-muted">Dont have an account ? Please Register</small>
                        <button @click="changePage('registerPage')" class="btn  btn-success container-fluid">Register</button>
                    
                    </form>
                </div>   
        </div>
    </div>
  </div>

</template>

<script>
import GoogleLogin from 'vue-google-login'


export default {
    name : "LoginPage",
    data() {
        return {
            userData : {
                email : "",
                password  : ""
            },
            params : {
                client_id :'480994684506-tctr776rv41nj2oe70un3m7onit1cvle.apps.googleusercontent.com'
            },
            renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
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
        },
        onSuccess(googleUser) {
            console.log(googleUser);
            console.log(googleUser.xc.id_token);
            console.log(googleUser.getBasicProfile());
            const google_token = googleUser.getAuthResponse().id_token

            axios({
                url : 'https://kanban-server-p2.herokuapp.com/googlelogin',
                method : 'POST',
                data : {
                    google_token
                }
            }).done ( res =>{
                console.log('google login kirim ke server')
                localStorage.setItem('access_token',resp)
            }).fail(err =>[
                console.log(err)
            ])
        }
    },
    components : {
        GoogleLogin
    }
}
</script>

<style>

</style>
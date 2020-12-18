<template>
    <div class="container" id="login-form">
        <div class="row content">
            <div class="col-md-6 mb-3">
                <img src="https://www.netclipart.com/pp/m/274-2744818_login-svg-animation.png" class="img-fluid" alt="image">
            </div>
            <div class="col-md-6">
                <h3 class="signin-text mb-3">Sign In</h3>
                <form>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input v-model="email" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input v-model="password" type="password" class="form-control">
                    </div>
                    <button @click.prevent="login" class="btn btn-primary">Login</button>
                </form>
               <button class="btn btn-success mt-2" @click="toRegister">Register</button>
               <button v-google-signin-button="clientId" class="btn btn-dark mt-2"> Continue with Google</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data(){
        return{
            email: '',
            password: '',
            clientId: '34835216493-or0mom6ienh92v74csfvga2tbp9lnvd2.apps.googleusercontent.com'
        }
    },
    methods: {
        login () {
            this.$emit("login", this.email, this.password)
        },
        toRegister () {
            this.$emit("toRegister")
        },
        OnGoogleAuthSuccess (idToken) {
            console.log(idToken)
            this.$emit("googleToken", idToken)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }
}
</script>

<style>

</style>
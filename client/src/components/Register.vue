<template>
    <div class="container-fluid bg" id="registerPage" >
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <form class="form-container" id="registerForm" @submit.prevent="register">
                    <h1 class="formLRtitle">REGISTER</h1>
                    <div class="form-group">
                        <label for="emailRegisterForm">Email address</label>
                        <input type="email" class="form-control" id="emailRegister" aria-describedby="emailHelp" v-model="email" required>
                        <p class="text-kecil"><small>We'll never share your email with anyone else.</small></p>
                    </div>
                    <div class="form-group">
                        <label for="passwordRegisterForm">Password</label>
                        <input type="password" class="form-control" id="passwordRegister" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                    <button @click="changeThisPage" class="btn btn-primary btn-block" id="alreadyHaveAccount">Already Have Account?</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods: {
        register(){
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$emit("register", payload);
        },
        changeThisPage(){
            this.$emit("changeThisPage", "loginPage");
        }
    }
}
</script>

<style>

</style>
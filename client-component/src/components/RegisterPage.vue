<template>
    <section class="container" id="register-page">
        <div class="row justify-content-center mt-5 p-5">
            <div class="col-4 mt-1">
                <div class="shadow-lg p-5 mb-5 bg-white rounded">
                    <h5 class="mb-4 text-center"><strong>Register</strong></h5>
                    <form @submit.prevent="register">
                    <div class="form-group">
                        <input type="email" class="form-control rounded-pill" v-model="email" id="register-email" placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control rounded-pill" v-model="password" id="register-password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                    <p class="text-muted"> Have Account? <a href="#" @click.prevent="backToLogin">Login </a> </p>

                    </form>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RegisterPage',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        register(){
            this.$emit('registerSubmit', this.email, this.password)
            this.$emit('toLoginPage')
        },
        backToLogin(){
            this.$emit('toLoginPage')
        }
    }

}
</script>

<style>

</style>
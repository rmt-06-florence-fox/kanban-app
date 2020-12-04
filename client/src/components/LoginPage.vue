<template>
    <div class="container w-25 mt-5 px-5 py-5 rounded border border-dark">
        <div class="row justify-content-center">
            <img src="../../templates/assets/hacktiv8-logo.png" alt="hacktiv8-logo" class="w-50 h-50">
        </div>
        <div class="row justify-content-center">
            <h1>Kanban!</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm">
                <form class="mt-3 pt-3" @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" type="email" name="email" id="email"
                            placeholder="Type your email here" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" type="password" name="password" id="password"
                            placeholder="Type your password here" v-model="password">
                    </div>
                    <div class="form-group text-center">
                        <input class="btn btn-success form-control btn-block" type="submit" value="Login">
                        <input class="btn btn-primary form-control btn-block" type="button" value="Register" @click="register">
                    </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm">
                <GoogleLogin class="btn btn-info btn-block mt-0" 
                    :params="params" 
                    :onSuccess="onSuccess"
                >
                Google Sign-In
                </GoogleLogin>
            </div>
        </div>
    </div>
</template>

<script>
    import GoogleLogin from 'vue-google-login'

    export default {
        name: 'LoginPage',
        data() {
            return{
                params: {
                    client_id: '177968975168-pqc9g4co9d1q8u4193dkpufbdbsna4jm.apps.googleusercontent.com'
                },
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$emit('userLogin', this.email, this.password)
            },

            register() {
                this.$emit('movePage', 'registerPage')
            },

            onSuccess(googleUser) {
                const googleToken = googleUser.getAuthResponse().id_token
                this.$emit('passToken', googleToken)
            }
        },
        components: {
            GoogleLogin
        }
    }
</script>

<style>

</style>
<template>
    <div class="container w-25 mt-5 px-5 py-5 border border-dark rounded">
        <div class="row justify-content-center">
            <div class="col-md">
                <h3>Create your account</h3>
                <form class="mt-3 pt-3" @submit.prevent="register">
                    <div class="form-group">
                        <label for="register-username">Username</label>
                        <input class="form-control" type="text" name="register-username" id="register-username" v-model="username">
                    </div>
                    <div class="form-group">
                        <label for="register-email">Email</label>
                        <input class="form-control" type="email" name="register-email" id="register-email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="register-password">Password</label>
                        <input class="form-control" type="password" name="register-password" id="register-password" v-model="password">
                    </div>
                    <div class="form-group">
                        <label for="register-retype-password">Re-Type Password</label>
                        <input class="form-control" type="password" name="register-retype-password"
                            id="register-retype-password" v-model="rPassword">
                    </div>
                    <div class="form-group">
                        <input class="btn btn-success form-control btn-block" type="submit" value="Register">
                        <input class="btn btn-danger form-control btn-block" type="button" value="Cancel" @click="login">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'registerPage',
        data() {
            return {
                username: '',
                email: '',
                password: '',
                rPassword: ''
            }
        },
        methods: {
            register() {
                this.$emit('userRegister', this.username, this.email, this.password, this.rPassword)
            },

            login() {
                this.$emit('movePage', 'loginPage')
            }
        }
    }
</script>

<style>

</style>
<template>
    <div>
        <div class="col col-sm-6 container" style="box-shadow: 0px 0px 10px; margin-top: 20px;">
            <div style="height: 80px;"></div>
            <h2 class="row justify-content-md-center">Create Your Account</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-6" style="margin: 7%">
        <form @submit.prevent="register">
        <div class="form-group">
            <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div><br>
        <button type="submit" class="btn btn-success">Register</button>
        </form><br>
        <button class="btn btn-link text-dark row" @click="backLogin"><strong>Back to Login</strong></button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        backLogin() {
            this.$emit('backLogin')
        },
        register() {
            console.log(this.email, this.password);
            this.$api({
            method: 'POST',
            url: 'register',
            data: {
                email: this.email,
                password: this.password
                }
            })
            .then(Response => {
                this.$emit("nextPage")
                console.log(Response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                this.email = '',
                this.password = ''
            })
        },
    }
}
</script>

<style>

</style>
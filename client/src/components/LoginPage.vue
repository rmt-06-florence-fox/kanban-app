<template>
    <div>
        <div class="container-login-form">
            <h1 class="title-login-page child-container-login-form">Kanban It!!</h1>
            <div class="card child-container-login-form shadow card-login">
                <h5 class="child-card-login">Log in to Kanban It!!</h5>
                <form class="child-card-login" @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" required>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p class="child-card-login"><a @click.prevent="register" href="">Sign Up for an Account</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$emit("submitLogin", this.email, this.password)
            this.email = ""
            this.password = ""
        },
        register() {
            this.$emit("changePage", "Register Page")
        }
    },
    created() {
        this.email = ""
        this.password = ""
    }
}
</script>

<style>

</style>
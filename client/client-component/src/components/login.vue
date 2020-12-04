<template>
    <div>
        <div class="container mt-4">
                <div class="col-6">
        
                </div>
                <div class="col-6">
                    <h2>Login</h2>
                    <!-- Jangan lupa pakai v-on buat trigger si form, kalau form jangan lupa pakai submit, terus jangan lupa di prevent -->
                    <form @submit.prevent="loginData()">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <!-- Kalau mau dapet value dari input jangan lupa tambahin v-model -->
                          <input v-model="email" type="email" class="form-control" id="email-login" aria-describedby="emailHelp">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input v-model="password" type="password" class="form-control" id="password-email">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
            </div>
    </div>
</template>

<script>

export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        loginData() {
            this.$emit("changePage")
            this.$emit("login", this.email, this.password)
        }
    }
}
</script>

<style>

</style>
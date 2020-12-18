<template>
  <div class="container">
        <div class="row content">
            <div class="col-md-6 mb-3">
                <img src="https://image.freepik.com/free-vector/registration-online-concept_23-2147987277.jpg" class="img-fluid" alt="image">
            </div>
            <div class="col-md-6">
                <h3 class="signin-text mb-3">Register</h3>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input v-model="name" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input v-model="email" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input v-model="password" type="password" class="form-control">
                    </div>
                <button class="btn btn-success">Register</button>
                <button @click.prevent="backToLogin" class="btn btn-primary">Back to Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RegisterPage",
    data () {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register () {
            this.$emit("register", this.name, this.email, this.password)
        },
        backToLogin () {
            this.$emit("backToLogin")
        }
    }
}
</script>

<style>

</style>
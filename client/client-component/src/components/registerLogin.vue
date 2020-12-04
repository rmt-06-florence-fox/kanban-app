<template>
    <div>
        <div class="container mt-4">
            <div class="col-6">
    
            </div>
            <div class="col-6">
                <h2>Register</h2>
                <div class="mt-3">
                    <form @submit.prevent="registerData()">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputEmail4">First name</label>
                            <input v-model="firstName" type="text" class="form-control" id="firstName-register">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Last name</label>
                            <input v-model="lastName"  type="text" class="form-control" id="lastName-register">
                        </div>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail4">Email</label>
                            <input v-model="email" type="email" class="form-control" id="email-register">
                        </div>
                        <div class="form-group">
                        <label for="inputPassword4">Password</label>
                        <input v-model="password"  type="password" class="form-control" id="password-register">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterPage",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    },
    methods: {
        registerData() {
            this.$emit("changePage")
            this.$emit("register", this.firstName, this.lastName, this.email, this.password)
            
        }
    }
}
</script>

<style>

</style>
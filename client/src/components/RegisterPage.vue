<template>
    <div class="container-register-form">
        <h1 class="title-register-page child-container-register-form">Kanban It!!</h1>
        <div class="card child-container-register-form shadow card-register">
            <h5 class="child-card-register">Register to Kanban It!!</h5>
            <form class="child-card-register" @submit.prevent="submitRegister">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp" required>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" required>
                </div>
                <div class="form-group">
                    <label for="organization">Organization</label>
                    <input v-model="organization" type="text" class="form-control" id="organization">
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterPage",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            organization: ''
        }
    },
    methods: {
        submitRegister() {
            this.$emit("submitRegister", this.name, this.email, this.password, this.organization)
            this.name = ""
            this.email = ""
            this.password = ""
            this.organization = ""
        }
    },
    created() {
        
    }
}
</script>

<style>

</style>
<template>
        <div class="navbar" >
            <a href="#" class="navbar-brand text-decoration-none font-weight-bold" > KANBAN </a>
            <button class="navbar-item btn btn-outline-danger float-rigth" @click="logout">Logout</button>
        </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout(){
            this.$emit("logoutButton", "Login Page")
        }
    }
}
</script>

<style>

</style>
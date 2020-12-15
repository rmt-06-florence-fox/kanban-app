<template>
    <nav class="navbar navbar-expand-lg">
        <span class="navbar-brand mb-0 h1">THE KANBAN</span>
        <button class="btn btn-outline-dark btn-sm ml-auto" @click="logout">
            <i class="fa fa-power-off" style="font-size:20px;color:red"></i>
            Logout
        </button>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout() {
            this.$emit("logout")
        }
    }
}
</script>

<style>

</style>
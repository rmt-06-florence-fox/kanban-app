<template>
    <nav class="navbar navbar-expand-lg">
        <span class="navbar-brand mb-0 h1">KANBAN</span>
        <button class="btn btn-outline-dark btn-sm ml-auto" @click="logout">
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
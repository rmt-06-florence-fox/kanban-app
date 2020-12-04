<template>
    <nav class="navbar custom-navbar">
        <a class="nav-link" href="#">Back</a>
        <a class="nav-link" href="#">Add Kanban</a>
        <a class="nav-link" href="#">Show Kanban</a>
        <button class="btn btn-danger" @click="logout">logout</button>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout() {
            console.log('logged out')
            localStorage.clear()
        }
    }
}
</script>

<style>

</style>
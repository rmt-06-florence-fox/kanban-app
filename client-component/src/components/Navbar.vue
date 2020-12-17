<template>
    <nav class="navbar custom-navbar">
        <button class="btn btn-danger" v-if="pageName === 'Home Page'" @click.prevent="logout">logout</button>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ['pageName'],
    methods: {
        logout() {
            this.$emit('logoutButton')
        }
    }
}
</script>

<style>

</style>
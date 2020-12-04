<template>
   <div class="nav-bar">
        <div class="nav-logo">
            <!--  -->logo
        </div>
        <div class="nav-logout">
            <button id="btn-logout" class="btn btn-danger" @click="logout">logout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            // pageName: ""
        }
    },
    methods: {
        logout() {
            this.$emit("logout", "Login Page")
        }
    }
}
</script>

<style>

</style>
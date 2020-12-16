<template>
   <div class="nav-bar">
        <div class="nav-logo">
            <!--  -->logo
        </div>
        <div class="nav-logout" v-if="logoutbtn !== 'Login Page' && logoutbtn !== 'Register Page'">
            <button id="btn-logout" class="btn btn-danger" @click="logout">logout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: ["logoutbtn"],
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
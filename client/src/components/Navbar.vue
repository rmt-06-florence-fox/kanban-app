<template>
    <div class="container-mainpage">
        <div class="title-mainpage"></div>
        <div class="title-mainpage">Kanban It!!</div>
        <div><button type="button" class="btn btn-danger single-btn" @click="logout"><i class="material-icons" style="font-size:14px">settings_power</i></button></div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout() {
            localStorage.clear()
            this.$emit("changePage", "Login Page")
        }
    }
}
</script>

<style>

</style>
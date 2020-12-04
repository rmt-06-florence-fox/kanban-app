<template>
    <div>
        <nav class="custom-navbar">
            <div class="logo">
                <img src="./logo.png" alt="logo" width="60">
                <h2>KANBAN</h2> &nbsp;
                <div v-if="currentPage == 'Home Page'">
                <button @click.prevent="toAddPage" class="btn btn-light btn-sm font-weight-bold mt-1">Add New Task</button>
                </div>
                <div v-if="currentPage == 'Add Page' || currentPage == 'Edit Page'">
                    <button @click.prevent="toHomePage" class="btn btn-light btn-sm font-weight-bold mt-1">Home</button>
                </div>
            </div>
            <div v-if="currentPage == 'Register Page'">
                <span class="font-weight-bold">Already a user? Go</span>
                <button @click="toLoginPage" class="btn btn-light btn-sm font-weight-bold">Sign in</button>
            </div>
            <div v-if="currentPage == 'Home Page'">
                <button @click.prevent="logoutProcess" class="btn btn-light btn-sm font-weight-bold">Sign out</button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["currentPage"],
    methods: {
        toAddPage(){
            this.$emit("changePage", "Add Page")
        },
        toHomePage(){
            this.$emit("changePage", "Home Page")
        },
        toLoginPage() {
            this.$emit("buttonLogin-logout", "Login Page")
        },
        logoutProcess() {
            localStorage.clear()
            this.toLoginPage()
        }
    }
}
</script>

<style>

</style>
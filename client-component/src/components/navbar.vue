<template>
    <div class="nav-container">
        <button class="btn btn-primary mr-2" @click="add">Add Activity</button>
        <button class="btn btn-danger" @click="logout">Log Out</button>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout(){
            this.$emit("logout")
        },
        add(){
            this.$emit("addPage")
        }
    }
}
</script>

<style>

</style>
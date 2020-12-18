<template>
    <nav class="navbar navbar-dark bg-dark justify-content-between fixed-top">
        <a class="navbar-brand">Kanban</a>
        
        <button class="btn btn-outline-danger" @click="logout">Logout</button>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data (){
        return {
            
        }
    },
    methods: {
        logout(){
            console.log('LOGOUT CUY CEPETAN')
            this.$emit("logout")
        }
    }
}
</script>

<style>

</style>
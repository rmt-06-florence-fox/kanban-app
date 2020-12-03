<template>
   <nav class="navbar navbar-light bg-success text-center">
        <a class="navbar-brand text-white" href="#">
            <img src="https://icons-for-free.com/iconfiles/png/512/job+office+postit+notes+icon-1320185948996973223.png" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
            Kanban App
        </a>
        <button @click="logout" id="logout-btn" class="bg-danger rounded">logout</button>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logout(){
            console.log("masuk log out")
            localStorage.removeItem('access_token')
        }
    }
}
</script>

<style>

</style>
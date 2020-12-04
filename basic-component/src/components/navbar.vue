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
            localStorage.removeItem('access_token')
            this.$emit("PleaseChangePage", "LoginPage")
        }
    }
}
</script>
    
<style>
    #logout-btn {
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
}
#logout-btn:hover {
    opacity: 1
}
</style>
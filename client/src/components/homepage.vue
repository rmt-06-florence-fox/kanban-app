<template>
    <div id="main-page" >
        <h2> Welcome to Kanban! Please choose. </h2>
        <button id="btn-register" class="btn btn-primary" @click="movetoregister"> Register </button>
        <button id="btn-signin" class="btn btn-primary" @click="movetologin"> Log In </button>
    </div>
</template>

<script>
export default {
    name : 'home',
    methods : {
        movetoregister(){
            this.$emit("changePageRegis", 'register page')
        },
        movetologin(){
            this.$emit("changePageLogin", 'login page')
        }
    }
}
</script>

<style>

</style>
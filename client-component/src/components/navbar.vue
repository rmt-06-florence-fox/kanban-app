<template>
    <div class="nav-container">
        <button class="btn btn-primary mr-2" @click="add">Add Activity</button>
        <div @click="logout">
            <GoogleLogin :params="params" :logoutButton=true class="btn btn-danger">Logout</GoogleLogin>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
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
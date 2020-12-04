<template>
    <!-- navbar -->
        <nav class="navbar shadow-lg navbar-light kanban-navbar justify-content-between sticky-top">
            <h3 class="text-white">Kanban App <span class="nav-small">( {{currentLoggedIn}} )</span></h3>
            <a @click.prevent="logout">
                <GoogleLogin :params="params" :logoutButton=true class="btn btn-danger">Logout</GoogleLogin>
            </a>
        </nav>
    <!-- navbar -->
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
    name: 'Navbar',
    data () {
        return {
            currentLoggedIn: localStorage.getItem('email'),
            params: {
                    client_id: "584514875853-tetksu5ga43o4jafv98hte93l3hu2sl8.apps.googleusercontent.com"
            }
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('access_token')
            localStorage.removeItem('email')
            this.$emit("logout", "landingpage")
        }
    },
    props: ['logoutButton'],
    components: {
        GoogleLogin
    }
}
</script>

<style>

</style>
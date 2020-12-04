<template>
<div>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="" @click="home"> Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="" @click="add"> Add Task</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="" @click="logout"> Log Out </a>
            </li>
        </ul>
    </nav>
</div>
    
</template>

<script>
export default {
    name : 'navbar',
    props : ['page_name'],
    methods : {
        home(){
            this.$emit('movetohome')
        },
        add(){
            this.$emit('movetoadd')
        },
        logout(){
            localStorage.removeItem('access_token')
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
            this.$emit('movetomain')
        }
    }
}
</script>

<style>

</style>
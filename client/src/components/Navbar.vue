<template>
    <nav class="navbar navbar-dark bg-dark">
        <div><a class="navbar-brand" href="#">Fancy Kanban</a></div>
        <div v-if="this.currentPage === 'userPage'">
            <button id="logoutButton" class="btn btn-primary logout" @click.prevent="logout">Log out</button>
        </div>
    </nav>
</template>

<script>
import Swal from "sweetalert2";


export default {
    name: "Navbar",
    data() {
        return {
        }
    },
    props: ['currentPage'],
    methods: {
        logout(){
            Swal.fire({
                icon: 'question',
                title: 'You want to leave already? :(',
                confirmButtonText: 'Bye!',
                showCloseButton: true
            })
            .then((result)=>{
                if(result.isConfirmed){
                    localStorage.clear();
                    this.$emit("changePage", "loginPage");
                }
            })
        }
    }
}
</script>

<style>

</style>
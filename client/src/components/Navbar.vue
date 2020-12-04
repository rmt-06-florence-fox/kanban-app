<template>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">
            <div><img src="../../assets/images/kanban.png" alt="Kanban Board" width="100"></div>
        </a>
        <div class="btn-toolbar">
            <button class="btn btn-primary mr-3 btn-sm" @click="showModal">Add New Task</button>
            <button class="btn btn-danger btn-sm" @click="logout">Logout</button>
            <div>
            </div>
        </div>
    </nav>
</template>

<script>
import swal from 'sweetalert';
export default {
    name: "Navbar",
    data() {
        return {
            title: "",
            category: "Back-Log"
        }
    },
    methods: {
        toHome() {
            this.$emit("toHome", "home")
        },
        logout() {
            localStorage.removeItem('access_token')
            this.$emit("loggingOut", "login")
        },
        showModal(){
            swal("Add New Task", {
            content: "input",
            })
            .then((value) => {
                if (value) {
                    this.title = value
                    this.$emit("addNewTask", this.title, this.category)
                }
            });
        }
    }
}
</script>

<style>

</style>
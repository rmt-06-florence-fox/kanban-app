<template>
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          <img src="https://image.flaticon.com/icons/png/512/1654/1654324.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
            <strong>KanbanApp</strong>
        </a>
        <div v-if="User(access_token)">
            <button class="btn btn-link text-light" @click="addTask"><strong>Add Task</strong></button>
            <button class="btn btn-outline-danger ml-auto" id="btn-logout" @click="logOut"><strong>Sign Out</strong></button>
        </div>
      </nav>
</template>

<script>
export default {
    data() {
        return {
            UserId: localStorage.getItem('access_token')
        }
    },
    methods: {
        addTask() {
            this.$emit("addTask")
        },
        logOut() {
            this.$emit("logOut")
        },
        home() {
            this.$emit("home")
        },
        User(access_token) {
            if(localStorage.getItem('access_token')) {
                return true
            } else {
                return false
            }
        }
    },
    created() {
        this.User(access_token)
    }
}
</script>

<style>

</style>
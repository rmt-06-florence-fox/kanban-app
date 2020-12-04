<template>
  <div>

        <div class="custom-navbar">
            <div class="left-navbar">
                <img src="https://www.pngkit.com/png/full/373-3738572_pictures-of-animals-animals-for-logo-png.png" alt="logo" width="70">
            </div>
            <div class="center-navbar"><button @click="toAdd">Add Task</button></div>
            <div class="right-navbar"><button @click="logout">Logout</button></div>
        </div>

        <TaskList v-if="page == 'MainPage'"
        :backlogs="backlog"
        :todos="todo"
        :doings="doing"
        :dones="done"
        @updateTask="toUpdate"
        @deleteTask="deleteTask"
        >
        </TaskList>

        <TaskForm
        v-if="page == 'TaskForm'"
        @addTask="addTask"
        >
        </TaskForm>

        <TaskUpdate
        v-if="page == 'TaskUpdate'"
        @updateTask="updateTask"
        >

        </TaskUpdate>


  </div>
</template>

<script>
import axios from "axios"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import TaskUpdate from "./TaskUpdate"

export default {
    name: "MainPage",
    props: ['backlog', 'todo', 'doing', 'done', 'page'],

    components : {
        TaskList,
        TaskForm,
        TaskUpdate
    },

    methods: {
        logout() {
            localStorage.clear()
            this.$emit("loggedOut")
        },
        toAdd() {
            this.$emit("wentAdd")
        },
        addTask(task) {
            this.$emit('addTask', task)
        },
        toUpdate(id) {
            localStorage.setItem('updateId', id)
            this.$emit("wentUpdate")
        },
        updateTask(task) {
            this.$emit('updateTask', task)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        }
    }
}
</script>

<style>

</style>
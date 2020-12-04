<template>
  <div>
        <h1>Update a Task</h1>
        <form @submit.prevent="updateTask">
            <label for="update-title">Title</label>
            <input v-model="task.title" type="text" id="update-title">

            <label for="update-category">Category</label>
            <select v-model="task.category" id="update-category">
                <option value="backlog">Backlog</option>
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>

            <button>Submit</button>
        </form>

    </div>
</template>

<script>
export default {

name: "UpdateTask",
    data() {
        return {
            task: {
                title: "",
                category: ""
            }
        }
    },
    methods: {
        updateTask() {
            this.$emit("updateTask", this.task)
        }
    }
}
</script>

<style>

</style>
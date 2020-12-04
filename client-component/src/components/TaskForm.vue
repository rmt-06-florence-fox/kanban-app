<template>
  <div>
        <h1>Add a Task</h1>
        <form @submit.prevent="addTask">
            <label for="form-title">Title</label>
            <input v-model="task.title" type="text" id="form-title">

            <label for="form-category">Category</label>
            <select v-model="task.category" id="form-category">
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

name: "TaskForm",
    data() {
        return {
            task: {
                title: "",
                category: ""
            }
        }
    },
    methods: {
        addTask() {
            this.$emit("addTask", this.task)
        }
    }
}
</script>

<style>

</style>
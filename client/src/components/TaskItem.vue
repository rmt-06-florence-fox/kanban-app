<template>
    <div class="card-body bg-white rounded mt-3 shadow mb-2" v-if="category === task.category">
        <div v-if="!flag">
            <h5 class="card-title d-flex justify-content-between">
            <div><strong>{{task.title}}</strong></div>
            <div class="btn-toolbar">
                <div><button class="btn btn-primary mr-1 btn-sm" @click='updateTask'>Edit</button></div>
                <div><button class="btn btn-danger btn-sm" @click='deleteTask'>Delete</button></div>
            </div>
            </h5>
            <p>Created By: {{task.User.email}}</p>
            <p>Created At: {{createdAt}}</p>
            <p>Updated At: {{updatedAt}}</p>
        </div>
        <div v-if="flag">
            <h1>Edit Task</h1>
            <form>
                <label>Title</label>
                <input type="text" v-model="title">
                <label>Category</label>
                <select name="category" v-model="newCategory">
                    <option value="Back-Log">Back-Log</option>
                    <option value="To-Do">To-Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select><br>
                <button type="submit" @click="update">Submit</button>
                <button @click="cancel">Cancel</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskItem",
    data() {
        return {
            createdAt: new Date(this.task.createdAt).toLocaleString('en-Us').split('T')[0],
            updatedAt: new Date(this.task.updatedAt).toLocaleString('en-Us').split('T')[0],
            flag: false,
            title: "",
            newCategory: ""
        }
    },
    methods: {
        updateTask() {
            this.flag = true
        },
        deleteTask() {
            this.$emit('deleteTask', this.task.id)
        },
        update() {
            this.$emit("updateTask", this.title, this.newCategory, this.task.id)
        },
        cancel() {
            this.flag = false
        }
    },
    props: ['task', 'category']
}
</script>

<style>

</style>
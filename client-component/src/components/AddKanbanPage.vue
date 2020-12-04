<template>
    <div class="container-register-form">
        <h1 class="title-register-page child-container-register-form">Kanban It!!</h1>
        <div class="card child-container-register-form shadow card-register">
            <h5 class="child-card-register">Add Kanban</h5>
            <form class="child-card-register" @submit.prevent="submitKanban">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="title" type="text" class="form-control" id="title" required>
                </div>
                <div class="form-group">
                    <label for="due_date">Due Date</label>
                    <input v-model="due_date" type="date" class="form-control" id="due_date">
                </div>
                <button type="submit" class="btn btn-primary">Add Task</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddKanbanPage",
    props: [ 'id '],
    data() {
        return {
            title: "",
            due_date: ""
        }
    },
    methods: {
        submitKanban() {
            this.$emit("submitKanban", this.title, this.due_date)
            this.title = ""
            this.due_date = ""
        }
    }
}
</script>

<style>

</style>
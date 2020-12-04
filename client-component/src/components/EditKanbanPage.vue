<template>
    <div class="container-register-form">
        <h1 class="title-register-page child-container-register-form">Kanban It!!</h1>
        <div class="card child-container-register-form shadow card-register">
            <h5 class="child-card-register">Edit Kanban</h5>
            <form class="child-card-register" @submit.prevent="submitUpdateKanban">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="title" type="text" class="form-control" id="title" required>
                </div>
                <div class="form-group">
                    <label for="due_date">Due Date</label>
                    <input v-model="due_date" type="date" class="form-control" id="due_date">
                </div>
                <div class="form-group">
                    <label for="CategoryId">Move Category to:</label>
                    <br>
                    <select v-model="selected">
                        <option value=""> ---- </option>
                        <option v-for="(category, index) in categories" :value="category.id" :key="index">
                            {{category.name}}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Edit Task</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditKanbanPage",
    props: [ 'title', 'due_date', 'categories', 'CategoryId' ],
    data() {
        return {
            title: this.title,
            due_date: this.due_date,
            selected: ""
        }
    },
    methods: {
        submitUpdateKanban() {
            if (this.selected === "") {
                this.selected = this.CategoryId
            }
            this.$emit("submitUpdateKanban", this.title, this.due_date, this.selected)
            this.selected = ""
        }
    }
}
</script>

<style>

</style>
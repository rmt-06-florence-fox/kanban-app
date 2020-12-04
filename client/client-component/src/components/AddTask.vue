<template>
  <div class="container">
        <form class="addForm" @submit.prevent="addTodo"><br>
            <h3 class="mt-4">Add Task</h3>
            <div class="form-group">
                <label class="mt-4">Title</label>
                <input v-model ="title" type="text" class="form-control" id="title">    
            </div>
            <div class="form-group">
                <label for="category">Choose a Category :</label>
                <select class="form-control" id="category" v-model="category">
                    <option disabled value ="" selected>Please select one</option>
                    <option value="backlog">backlog</option>
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>
                <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
        <button @click.prevent="cancelButton" type="submit" class="mt-2 btn btn-danger btn-block">Cancel</button>
  </div>
</template>

<script>
export default {
    name: "FormAdd",
    data() {
        return {
            title: "",
            category: ""
        }
    },
    methods: {
        addTodo() {
            this.$emit('addTodo', this.title, this.category)
        }
    }
}

</script>

<style>

</style>
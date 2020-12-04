<template>
  <div>
        <h1 class="text-center mt-5">Add Task</h1>
        <form @submit.prevent="add">
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="task.title"
                ></div>
            <div class="form-group col-3 btn-center mb-3">
                <select v-model="task.category" class="form-control">
                    <option selected disabled value="">Category...</option>
                    <option>Backlog</option>
                    <option>Todo</option>
                    <option>Doing</option>
                    <option>Completed</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'AddForm',
    data () {
        return {
            task: {
                title: '',
                category: ''
            }
        }
    },
    methods: {
        add() {
            this.$emit('addTask', this.task)
        }
    }
};
</script>

<style>
</style>
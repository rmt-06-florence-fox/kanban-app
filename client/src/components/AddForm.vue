<template>
  <div>
        <h1 class="text-center mt-5">Add Task</h1>
        <form>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="title"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Category"
                v-model="category"
                ></div>
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
        addInput() {
            // this.$
        }
    }
};
</script>

<style>
</style>
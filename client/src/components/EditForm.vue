<template>
  <div>
        <h1 class="text-center mt-5">Edit Task</h1>
        <form @submit.prevent="edit">
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="task.title"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Category"
                v-model="task.category"
                ></div>
            <button type="submit" class="btn btn-primary btn-center">Edit</button>
    </form>
  </div>

</template>

<script>
export default {
    name: 'EditForm',
    props: [ 'updating' ],
    data () {
        return {
            task: {
                id: this.updating.id,
                title: this.updating.title,
                category: this.updating.category
            }
        }
    },
    methods: {
        edit() {
            this.$emit('editTask', this.task)            
        }
    }


}
</script>

<style>

</style>
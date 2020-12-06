<template>
   <div class="container p-5">
        <legend>Add Task</legend>
        <form @submit.prevent="edit(data.id)">
            <div class="form-group">
              <label for="exampleInputEmail1" style="color: black">Title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title" >
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" style="color: black">Description</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="description" >
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <!-- <button type="button" @click.prevent="cancel" class="btn btn-danger">Cancel</button> -->
          </form>
    </div>
</template>cd 

<script>
export default {
    name: 'formEdit',
    props: ["data", 'dataForEdit'],
    data() {
        return {
            title : '',
            description : ''
        }
    },
    methods: {
        edit(id) {
            const editedData = {
                title: this.title,
                description: this.description,
                // category: category
            }
            console.log(editedData, id);
            this.$emit('editTask', editedData, id)
            this.title = ''
            this.description = ''
        }
    }
}
</script>

<style>

</style>
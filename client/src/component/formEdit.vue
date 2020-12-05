<template>
   <div class="container p-5">
        <legend>Add Task</legend>
        <form @submit.prevent="edit(id)">
            <div class="form-group">
              <label for="exampleInputEmail1" style="color: black">Title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title" value="data.title" >
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" style="color: black">Description</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="description" >
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <!-- <button type="button" @click.prevent="cancel" class="btn btn-danger">Cancel</button> -->
          </form>
    </div>
</template>

<script>
export default {

}
</script>
    name: 'formEdit',
    props: [data]
    data() {
        return {
            title = ''
            description = ''
        }
    },
    methods: {
        edit(id) {
            const editedData = {
                title: this.title,
                description: this.description,
                category: category
            }
            console.log(editedData);
            this.$emit('editTask', editedData)
            this.title = ''
            this.description = ''
        }
    }
<style>

</style>
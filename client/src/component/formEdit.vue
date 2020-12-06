<template>
   <div class="container p-5">
        <legend>Add Task</legend>
        <form @submit.prevent="edit(data.id)">
            <div class="form-group">
              <label for="exampleInputEmail1" style="color: black">Title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title" >
            </div>
            <div class="form-group">
              <label for="" style="color: black">Description</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="description" >
            </div>
            <div class="form-group">
                <label for="inputState" style="color: black">Category</label>
                <select v-model="category" class="form-control">
                    <option selected disabled style="color: black">Category</option>
                    <option style="color: black" value="backlog">backlog</option>
                    <option style="color: black" value="todo">todo</option>
                    <option style="color: black" value="doing">doing</option>
                    <option style="color: black" value="done">done</option>
                </select>
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
            description : '',
            category: ''
        }
    },
    methods: {
        edit(id) {
            const editedData = {
                title: this.title,
                description: this.description,
                category: this.category
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
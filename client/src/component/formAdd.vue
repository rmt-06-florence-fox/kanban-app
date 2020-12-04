<template>
   <div class="container p-5">
        <legend>Add Task</legend>
        <form @submit.prevent="addTask(category.name)">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="description" required>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <!-- <button type="button" @click.prevent="cancel" class="btn btn-danger">Cancel</button> -->
          </form>
    </div>
</template>

<script>
export default {
    name: 'formAdd',
    props: ['category', 'pageAdd'],
    data() {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        addTask(category){
            const newData = {
                title: this.title,
                description: this.description,
                category: category
            }
            console.log(newData);
            this.$emit('createTask', newData, this.pageAdd)
            this.title = ''
            this.description = ''
        },
        // cancel(){
        //     this.pageAdd = ''
        //     this.$emit('changePage', 'boardList')
        // }
        
    }
}
</script>

<style>

</style>
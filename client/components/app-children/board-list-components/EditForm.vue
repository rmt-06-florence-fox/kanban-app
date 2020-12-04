<template>
  <form @submit.prevent="editHandler">
      <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" name="title" v-model="title">
      </div>
      <div class="form-group">
          <label for="category">Category</label>
          <select name="category" v-model="category">                          
            <option v-for="category in categories" :key="category.name"> {{category.name}} </option>
            
          </select>
      </div>
      <input type="submit" value="Edit">
      <button type="button"> Cancel </button>
  </form>
</template>

<script>
export default {
    name : 'EditForm',
    data(){
        return{
            title : "",
            category : ""
        }
    },
    props : ["task", "categories"],
    methods : {
        editHandler(){
            const {title, category} = this
            const id = this.task.id
            const updatedTask = {id, title, category}

            //console.log('dari edit form', updatedTask)
            this.$emit('editTask', updatedTask)
        },
    },
    created : function(){
        this.title = this.task.title
    }
}
</script>

<style>

</style>
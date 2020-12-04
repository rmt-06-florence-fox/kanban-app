<template>
  <div>
    <form @submit.prevent="addTask(category.name)">
      <textarea v-model="createTask" class ="add-task" name="add-backlog"></textarea>
      <button type="submit" class="btn btn-add-task fas fa-check"><label class="ml-2">Add Task</label></button>
      <button type="button" @click.prevent="cancelButton" class="btn btn-cancel fas fa-times"><label class="ml-2">Cancel</label></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormAdd',
  props: ['category', 'pageAdd'],
  data(){
    return{
      createTask: ''
    }
  },
  methods:{
    addTask(category){
      const newData = {
        title: this.createTask,
        category: category
      }
      this.$emit('createTask', newData, this.pageAdd)
      this.createTask = ''
      this.pageAdd = ''
    },
    cancelButton(){
      this.pageAdd = ''
      this.$emit('pageAddStatus', this.pageAdd)
    }
  }
}
</script>

<style>

</style>
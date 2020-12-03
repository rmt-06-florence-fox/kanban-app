<template>
  <div>
    <div class="container">
    <h1 class="text-center">kanban</h1>
    <div class="row">
      <div class="col-sm-3" align="center" v-for="category in categories" :key="category.id" >
        <button @click.prevent="addForm(category.name)" class="fas fa-plus-circle btn btn-primary mb-1" ></button>
        <div class="p-3 mb-1 text-white rounded" :class="category.color">
          {{category.name}}
        </div>
  
        <task-board-component 
          @deleteId="deleteTask"
          @editTask="edit" 
          :tasks="tasks" 
          :category="category.name"
        ></task-board-component>
        <div v-if="addToggle && selectedCategory == category.name">
          <form @submit.prevent="addTask" action="">
            <textarea v-model="addTitle" name="" id="" cols="22" rows="2" required></textarea>
            <button type="submit" class="btn btn-outline-primary fas fa-check"></button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import taskBoardComponent from './task-board-component.vue'
export default {
  components: { taskBoardComponent },
  name : 'kaban-board-component',
  props : ['categories','tasks'],
  methods: {
    deleteTask(id){
      this.$emit('deleteId', id)
    },
    edit(data, id){
      this.$emit('editTask', data, id)
    },
    addForm(category){
      this.addToggle = false
      this.addTitle = ''
      this.addToggle = true
      this.selectedCategory  = category
    },
    addTask(){
      const newTask = {
        title : this.addTitle,
        category : this.selectedCategory
      }
      this.$emit('addTask', newTask)
      this.addToggle = false
    }
  },
  data(){
    return {
      addToggle : false,
      selectedCategory : '',
      addTitle : ''
    }
  }
}
</script>

<style>

</style>
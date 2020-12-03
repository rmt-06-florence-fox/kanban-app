<template>
<div>
  <div class="card-container mt-2" v-for="task in filterTask" :key="task.id">
     <kanban-card-component 
      :filterTask="task" 
      @deleteId="deleteTask" 
      @editTask="edit"
    ></kanban-card-component>
     
  </div> 

</div>
</template>

<script>
import kanbanCardComponent from './kanban-card-component.vue'
export default {
  components: { kanbanCardComponent },
  name : 'task-board-component',
  props : ['tasks','category'],
  computed : {
    filterTask(){
      return this.tasks.filter(e=> e.category == this.category)
    }
  },
  methods: {
    deleteTask(id){
      this.$emit('deleteId', id)
    },
    edit(data,id){
      this.$emit('editTask', data, id)
    }
  }
}
</script>

<style>

</style>
<template>
<div>
  <div class="card-container mt-2" v-for="task in filterTask" :key="task.id">
     <kanban-card-component :filterTask="task"></kanban-card-component>
     
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
  }
}
</script>

<style>

</style>
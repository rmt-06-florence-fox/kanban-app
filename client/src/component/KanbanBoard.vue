<template>
  <div>
     <div class="container-fluid mt-5">
            <div 
            class="row" 
            >
                <TaskBoard
                v-for="task in taskData"
                :key="task.id"
                :task="task"
                @deleteTask='deleteTask'
                ></TaskBoard>

            </div>            
            </div>
  </div>


</template>

<script>
import TaskBoard from "./TaskBoard"

export default {
    name : "KanbanBoard",
    props : ['taskData'],
    components : {
      TaskBoard
    }, 
    methods : {
      deleteTask(id){
        console.log('deletes',id)
        this.$emit('deleteTask',id)
      }
    }       
}
</script>

<style>

</style>
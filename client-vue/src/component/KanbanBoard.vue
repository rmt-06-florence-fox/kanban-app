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
                @changeCategory="changeCategory"
                @changeTitle="saveEditTitle"
                ></TaskBoard>

            </div>            
            </div>
  </div>


</template>

<script>
import TaskBoard from "./TaskBoard"

export default {
    name : "KanbanBoard",
    data(){
      return {
        categoryid :""
      }
    },
    props : ['taskData'],
    components : {
      TaskBoard
    }, 
    methods : {
      deleteTask(id){
        console.log('deletes',id)
        this.$emit('deleteTask',id)
      },
      changeCategory(categoryId,onId){
        console.log(categoryId,'kanban board',onId)
        this.$emit("changeCategory",categoryId,onId)
      },
      saveEditTitle(newTitle,categoryId,taskId){
        console.log(newTitle,'kanbanboard',categoryId,taskId)
        this.$emit('changeTitle',newTitle,categoryId,taskId)
      }
    }       
}
</script>

<style>

</style>
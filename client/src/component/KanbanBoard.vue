<template>
  <div>
     <div class="container-fluid mt-5">
            <h1>{{doneTask}}</h1>          
            <div class="row">
                <TaskBoard
                v-for="(backlog,index) in backlogTask"
                :key="index"
                :backlogtask="backlog"
                ></TaskBoard>

                <TaskBoard
                v-for="(todo,index) in todoTask"
                :key="index"
                :todotask="todo"
                ></TaskBoard>

                <TaskBoard
                v-for="(doing,index) in doingTask"
                :key="index"
                :doingtask="doing"
                ></TaskBoard>

                <TaskBoard
                v-for="(done,index) in doneTask"
                :key="index"
                :donetask="done"
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
    computed : {
        doneTask : function () {
            let categoryData = []
            this.taskData.forEach(element => {
              if(element.Category == 'done'){
                categoryData.push(element)
              }
            });
            return categoryData
        },
        todoTask : function () {
            let categoryData = []
            this.taskData.forEach(element => {
              if(element.Category == 'todo'){
                categoryData.push(element)
              }
            });
            return categoryData
        },
        backlogTask : function () {
            let categoryData = []
            this.taskData.forEach(element => {
              if(element.Category == 'backlog'){
                categoryData.push(element)
              }
            });
            return categoryData
        },
        doingTask : function () {
            let categoryData = []
            this.taskData.forEach(element => {
              if(element.Category == 'doing'){
                categoryData.push(element)
              }
            });
            return categoryData
        }
    } 
    
}
</script>

<style>

</style>
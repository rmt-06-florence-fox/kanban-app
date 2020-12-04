<template>
    <div class="card p-0">
        <div class="card-header bg-dark text-white text-center"> <h3>{{category.name}}</h3> </div>
        <div class="card-footer" :id="category.id">
            <TaskItem v-for="task in filteredTasks" :key="task.id" 
            :task="task"
            :buttons="category.btn"
            :categories="categories"
            @changeStatus="changeStatus"
            @editHandler="editHandler"
            @deleteTask="deleteTask"
    
            ></TaskItem>
        </div>
    </div>

</template>

<script>
import TaskItem from "./TaskItem.vue"

export default {
    name : "Board",
    props : ["category", "tasks", "categories"],
    components : {
        TaskItem
    },
    methods : {
        changeStatus(bool, task){
            //console.log('masuk di board', bool, task)
            this.$emit('changeStatus', bool, task)
        },
       
        deleteTask(task){
            //console.log('masuk di board delete', task)
            this.$emit('deleteTask', task)
        },
        editHandler(task){
            this.$emit('editHandler', task)
        }
    },
    computed : {
        filteredTasks(){  
            return this.tasks.filter(task => {
                //console.log(t.category, this.category.name)
                if (task.category == this.category.name) {
                    return task
                }
            })
        }
    }
}
</script>

<style>
    #back-log{
        background: #f4ff61;
        height: 460px;
        overflow-y: auto ;    
    }

    #to-do{
        background: #a8ff3e;
        height: 460px;
        overflow-y: auto ;    

    }
    #doing{
        background: #6bfa47;
        height: 460px;
        overflow-y: auto ;    
    }
    #done{
        background: #15f10d;
        height: 460px;
        overflow-y: auto ;    
    }
</style>
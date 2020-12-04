<template>
    <div class="col-sm">
        <div class="p-3 bg-primary text-black">
            
            <h1>{{task.name}}</h1>
            <TaskCard
            v-for="(element,index) in task.Tasks"
            :key="index"
            :element="element"
            @deleteTask="deleteTask"
            @changeCategory="changeCategory"
            @changeTitle="saveEditTitle"
            ></TaskCard>

        </div>
    </div>
</template>

<script>

import TaskCard from "./TaskCard"
import EditTask from "./EditTask"

export default {
    name : "TaskBoard",

    props : ['task'],
    components : {
      TaskCard,
      EditTask
    } ,
    methods : {
        deleteTask(id){
            console.log('board delete',id)
            this.$emit('deleteTask',id)
        },
        changeCategory(categoryId,onId){
            console.log(categoryId,'taskboard',onId)
            this.$emit("changeCategory",categoryId,onId)
        },
        saveEditTitle(newTitle,categoryId,taskId){
            console.log(newTitle,'taskboard',categoryId,taskId)
            this.$emit('changeTitle', newTitle,categoryId,taskId)
        }
    }
}
</script>

<style>

</style>
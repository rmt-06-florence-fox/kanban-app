<template>
    <div  class="container-fluid card-deck">
        <div v-for="c in categories" :key="c.id" class="card mt-3" :id="c.id">
            <div class="card-header bg-dark text-white text-center mt-0 sticky-top">
                <h1> {{c.category}} </h1>
            </div>
            <div class="card-body w-100" v-for="t in tasks" :key="t.id">
                <div v-if="t.category === c.category">
                    <TaskItem :task=t></TaskItem>
                </div>
            </div>
        
        </div>
    </div>
</template>

<script>
import TaskItem from "./board-list-components/TaskItem.vue"

export default {
    name : "BoardList",
    data (){
        return {
            categories : [
                {category : "Back Log", id : "back-log"},
                {category : "To Do", id : "to-do"},
                {category : "Doing", id : "doing"},
                {category : "Done", id : "done"}
            ],
        }
    },
    props : ["tasks"],
    methods : {
        
    },

    components : {
        TaskItem
    }

}
</script>

<style>
    #back-log{
        background: #f4ff61;
    }

    #to-do{
        background: #a8ff3e;
    }
    #doing{
        background: #6bfa47;
    }
    #done{
        background: #15f10d;
    }
</style>
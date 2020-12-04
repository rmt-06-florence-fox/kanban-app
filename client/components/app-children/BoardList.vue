<template>
    <div  class="container-fluid card-deck d-flex justify-content-between mt-3">
       <Board v-for="category in categories" :key="category.name" :category="category" 
       :tasks="tasks"
        @changeStatus="changeStatus"
        @showEdit="showEdit"
        @deleteTask="deleteTask"
        >
       </Board>
    </div>
</template>

<script>
import Board from "./board-list-components/Board.vue"

export default {
    name : "BoardList",
    data (){
        return {
            categories : [
                {name : "Back Log", id : "back-log", btn : ["arrow_forward", "edit","delete_forever"] },
                {name : "To Do", id : "to-do", btn : ["arrow_back","arrow_forward", "edit","delete_forever"]},
                {name : "Doing", id : "doing", btn: ["arrow_back" ,"arrow_forward", "edit","delete_forever"]},
                {name : "Done", id : "done", btn : ["arrow_back" ,"edit","delete_forever"]}
            ],
        }
    },
    props : ["tasks"],
    methods : {
        changeStatus(bool, task){
            console.log('masuk di board list', bool, task)
            this.$emit('changeStatus', bool, task)
        },
        showEdit(task){
            console.log('masuk di board list show Edit', task)
            this.$emit('showEdit', task)
        },
        deleteTask(task){
            console.log('masuk di board list delete', task)
            this.$emit('deleteTask', task)
        },
    },

    components : {
        Board
    }

}
</script>
<style>
 
</style>
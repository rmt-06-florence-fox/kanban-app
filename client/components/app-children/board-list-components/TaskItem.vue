<template>
  <div class="container mt-3 card">
    <div v-if="item === 'task'">

        <div class="d-flex justify-content-end">
            <ButtonItem v-for="btn in buttons" :key="btn" :btnName="btn"
            @changeStatus="changeStatus"
            @delete="deleteTask"
            @showEdit="showEdit"></ButtonItem>
        </div>

        <div class="card-footer d-flex justify-content-start">
            <p class="material-icons">person</p>
            <p>{{task.User}}</p>
        </div>

        <div class="card-header"><h3>{{task.title}}</h3></div>
    </div>
    <div v-else-if="item === 'edit form'">
        <EditForm
        :categories="categories"
        :task="task"
        @editTask="editHandler"
        ></EditForm>
    </div>
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem.vue"
import EditForm from "./EditForm.vue"

export default {
    name : "TaskItem",
    props : ["task", "buttons", "categories"],
    data (){
        return {
            item : "task"
        }
    },
    components : {
        ButtonItem,
        EditForm
    },
    methods : {
        changeStatus(bool){

            //console.log('masuk di task item', bool, this.task)
            this.$emit('changeStatus', bool, this.task)
        },
        showEdit(){
            //console.log('masuk di task item show Edit', this.task.id)
            this.item = "edit form"
        },
        deleteTask(){
            //console.log('masuk di task item delete')
            this.$emit('deleteTask', this.task)
        },
        editHandler(task){
            //console.log('ini edit dari taskItme', task)
            this.$emit('editHandler', task)
            this.item = "task"
        }        
    }

}
</script>

<style>

</style>
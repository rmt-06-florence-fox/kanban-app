<template>
  <div class="container mt-3 card">
      
      <div class="d-flex justify-content-end">
           <ButtonItem v-for="btn in buttons" :key="btn" :btnName="btn"
           @changeStatus="changeStatus"
           @delete="deleteTask"
           @showEdit="showEdit"></ButtonItem>
      </div>

      <div class="card-footer"><p class="material-icons">person</p><p>{{task.User}}</p></div>
      <div class="card-header"><h3>{{task.title}}</h3></div>
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem.vue"

export default {
    name : "TaskItem",
    props : ["task", "buttons"],
    components : {
        ButtonItem
    },
    methods : {
        changeStatus(bool){

            //console.log('masuk di task item', bool, this.task)
            this.$emit('changeStatus', bool, this.task)
        },
        showEdit(){
            //console.log('masuk di task item show Edit', this.task.id)
            this.$emit('showEdit', this.task)
        },
        deleteTask(){
            //console.log('masuk di task item delete')
            this.$emit('deleteTask', this.task)
        },
        
    }

}
</script>

<style>

</style>
<template>
    <div>
      <div class="card mt-3">
        <div  class="card-header">
            <div class="edit-task">
              <input v-model="title" placeholder="task title" type="text" ><br>
              <button @click="saveEditTitle(title)" class="btn btn-primary"> edit</button>
              <button @click="cancelEdit" class="btn btn-danger"> cancel</button>
            </div>

      </div>
    </div>
</template>

<script>
export default {
    name : "EditTask",
    data() {
      return {
        title : this.titleEdit,
        categoryid : this.categoryId
        
      }
    } ,
    props : ['titleEdit','categoryId','taskId'],
    methods : {
        cancelEdit(){
            console.log('cancel')
            this.$emit('cancelEdit',0)
        },
        saveEditTitle(newTitle){
          console.log(newTitle,'editTask',this.categoryid,this.taskId )
          this.$emit('changeTitle', newTitle,this.categoryid,this.taskId)
        }
    }
   
}
</script>

<style>

</style>
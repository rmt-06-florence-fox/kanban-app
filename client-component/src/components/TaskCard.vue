<template>
<div> 
          <div class="card-body">
            <h5 class="card-title">{{filteredTask.title}}</h5>
          </div>
           <div class="card-footer text-muted"><small>
           {{filteredTask.updatedAt.split("T")[0]}}<br>
           by: {{filteredTask.User.email}}<br>
          </small>
          <button type="button" class='glyphicon glyphicon-trash' style='font-size:15px;color:grey;border:0px' @click.prevent="deleteTask(filteredTask.id)"></button>
          <button type="button" class='fas fa-edit' style='font-size:15px;color:grey;border:0px' @click.prevent="showEdit(filteredTask)"></button>
          <button type="button" class='glyphicon glyphicon-move' style='font-size:15px;color:grey;border:0px' @click.prevent="moveTask(filteredTask)"></button>
        </div>
      <div class="editCategory" v-if="editCategory">
      <form @submit.prevent="changeCategoryTask(filteredTask)">
        
        <select  class="custom-select" v-model="newCategory" >
          <option selected disabled>{{category.name}}</option>
          <option v-if="filteredTask.CategoryId !== 1" value= 1>Move To Backlog </option>
          <option v-if="filteredTask.CategoryId !== 2" value= 2> Move To Todo</option>
          <option v-if="filteredTask.CategoryId !== 3" value= 3> Move To Doing</option>
          <option v-if="filteredTask.CategoryId !== 4" value= 4> Move To Done</option>
        </select>
       
        <button type="submit" class=" fas fa-check" style='font-size:15px;color:grey;border:0px'><label class="ml-2">Move</label></button>
        <button type="button" class="fas fa-times" style='font-size:15px;color:grey;border:0px' @click="cancel()"><label class="ml-2">Cancel</label></button>
      </form>
    </div>
      <div class="edit-task-page" v-if="pageEdit">
      <form action="" @submit.prevent='editTask(filteredTask)'>
        <textarea class ="edit-task" name="edit-task" v-model="editTitle" style="width:auto"></textarea>
        <button type="submit" class="fas fa-check" style='font-size:15px;color:grey;border:0px'><label class="ml-2">Edit Task</label></button>
        <button type="button" class="fas fa-times" style='font-size:15px;color:grey;border:0px' @click="cancel()"><label class="ml-2">Cancel</label></button>
      </form>
    </div>
    
     
        
     
    

</div>
</template>

<script>



import Category from './Category.vue';
export default {
  name: "TaskCard",
  props: ['filteredTask','category'],
  data() {
    return {
      editTitle: '',
        pageEdit: false,
        editCategory: false,
        newCategory: '',
        dataForEdit: {},
      }

  },
  components:{
    Category
  },
 methods: {
    deleteTask(id){
      this.$emit('deleteTask',id)
    },
    showEdit(data){
      this.editTitle = data.title
      this.dataForEdit = data
      this.pageEdit = true
      console.log(data)


    },
    editTask(data){
      console.log("edittaskcard")
      const id = data.id

      const  editedTask = {
        title: this.editTitle,
        CategoryId: data.CategoryId
      }
      console.log(editedTask)
      this.$emit('editTask',editedTask,id)
      this.pageEdit = false

    },
    cancel(){
      this.pageEdit = false
    
     this.editCategory =false

    },
    moveTask(data){
      console.log(data)
      this.editCategory =true

    },
    changeCategoryTask(data){
      const id = data.id
      const newCatid = { 
        CategoryId: +this.newCategory}
        console.log(newCatid)
        

        console.log("masukchange")

      this.$emit('changeCategoryTask',newCatid,id)
    }
 
 }
};
</script>

<style scoped>
</style>
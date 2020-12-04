<template>
  <div>
      <div class="card mt-3">
        <!-- <h1>{{element}}</h1> -->
        <EditTask 
        v-if="editedTaskId == element.id"
        :titleEdit="element.title"
        :categoryId="element.CategoryId"
        :taskId="element.id"
        @cancelEdit='cancelEdit'
        @changeTitle="saveEditTitle"
        ></EditTask>
        
        <div  v-else class="card-header">
          <h1>{{element.title}}</h1>
          <h1>{{element.id}}</h1>
        </div>
        <div class="card-body">

            <div>
                <a @click.prevent="editedTaskId = element.id" href="#"> <i  class="fa fa-pencil"></i></a>

                <a @click="deleteTask(element.id)" href="#"><i class="fa fa-trash-o"></i></a>

                <a @click="changeCategoryId = element.id" href="#"><i class="fa fa-arrows"></i></a>
            </div>

            <ChangeCategory
            v-if="changeCategoryId == element.id"
            @cancelEdit='cancelEdit'
            @changeCategory="changeCategory"
            ></ChangeCategory>
        </div>
    </div>
  </div>
</template>

<script>
import EditTask from "./EditTask"
import ChangeCategory from "./ChangeCategory"

export default {
  name : "TaskCard",
  props : ['element'],
  data(){
    return {
      editedTaskId : "",
      changeCategoryId :""
    }
  },
  methods:{
    editTask(id){
      console.log(id)
      this.editedTaskId = id
    },
    cancelEdit(id){
      this.editedTaskId = id
      this.changeCategoryId = id
    },
    deleteTask(id){
      console.log('trey delete',id)
      this.$emit('deleteTask',id)
    },
    changeCategory(categoryId){
    console.log(categoryId,'cardtask',this.changeCategoryId)
    this.$emit("changeCategory", categoryId,this.changeCategoryId)
    },
    saveEditTitle(newTitle,categoryId,taskId){
      console.log(newTitle,'taskCard',categoryId,taskId)
      this.$emit('changeTitle', newTitle,categoryId,taskId)
    }
  },
  components: {
    EditTask,
    ChangeCategory
  }
}
</script>

<style>

</style>
<template>
  <div>
      <div class="card mt-3">
        <!-- <h1>{{element}}</h1> -->
        <EditTask 
        v-if="editedTaskId == element.id"
        :titleEdit="element.title"
        @cancelEdit='cancelEdit'
        ></EditTask>
        
        <div  v-else class="card-header">
          <h1>{{element.title}}</h1>
          <h1>{{element.id}}</h1>
        </div>
        <div class="card-body">
            <div>
                <a @click.prevent="editedTaskId = element.id" href="#"> <i  class="fa fa-pencil"></i></a>
                <a @click="deleteTask(element.id)" href="#"><i class="fa fa-trash-o"></i></a>
                <a href="#"><i class="fa fa-arrows"></i></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import EditTask from "./EditTask"

export default {
  name : "TaskCard",
  props : ['element'],
  data(){
    return {
      editedTaskId : ""
    }
  },
  methods:{
    editTask(id){
      console.log(id)
      this.editedTaskId = id
    },
    cancelEdit(id){
      this.editedTaskId = ''
    },
    deleteTask(id){
      console.log('trey delete',id)
      this.$emit('deleteTask',id)
    }
  },
  components: {
    EditTask
  }
}
</script>

<style>

</style>
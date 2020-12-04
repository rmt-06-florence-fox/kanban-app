<template>
  <div name="test" :id="task.id">
    <div class="card shadow mt-2" >
    <!-- <draggable group="task" @start="getTaskDataByDrag(task.id)"> -->
      <div class="card-body" >
        <h5 class="card-title">{{ task.title }}</h5>
        <p>Username: {{ task.User.email }}</p>
        <p v-if="task.Organization.name">Organization: {{ task.Organization.name }}</p>
        <p>createdAt: {{ new Date(task.createdAt).toISOString().split("T")[0] }}</p>
        <div class="container-button-task">
        <editTask
          @lemparEditTitle="terimaEditTitle"
          :taskTitle="task.title"
        ></editTask>
        <a @click="lemparDeleteId" class="btn btn-danger">Delete</a>
        <editTaskCatagory @lemparEditCategory="lemparEditCategory" 
          :taskCategory="categoryTitle" :categoryList="categoryList" 
        ></editTaskCatagory>          
        </div>
      </div>
    <!-- </draggable> -->
    </div>
  </div>
</template>

<script>
import addTask from "./addTask";
import editTask from "./edit";
import editTaskCatagory from './EditTaskCatagory'
import draggable from "vuedraggable"

export default {
  name: "task",
  props: ["task", 'categoryList', 'categoryTitle'],
  data() {
    return {
      kondisiEditForm: false,
      moveTask: false,
      dataTask: ''
    };
  },
  components: {
    addTask,
    editTask,
    editTaskCatagory,
    draggable
  },
  methods: {
    getTaskDataByDrag(id){
      this.$emit('throwTaskIdByDrag', id)
    },
    lemparEditCategory(category){
        let payload = {
            id: this.task.id,
            category
        }
        this.$emit('lemparEditCategory', payload)
    },
    terimaEditTitle(title) {
      let payload = {
        id: this.task.id,
        title,
        CategoryId: this.task.CategoryId,
      };
      this.$emit("lemparPayloadEdit", payload);
      this.kondisiEditForm = false;
    },
    lemparDeleteId() {
      let id = this.task.id;
      this.$emit("lemparDeleteId", id);
    },
    lemparEditCategoryId(){
        let id = this.task.id
        
    }
  },
};
</script>

<style>
</style>
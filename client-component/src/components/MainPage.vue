<template>
<div> 
  <!-- {{category}} -->
  <Navbar @userLogout="userLogout"></Navbar>
   <div id="list-kanban" class="container mt-4 mr-auto " >
    <div class="row"> 
      <div class="col-md-3" v-for="category in category" 
      :key="category.id" >
        <div :class="category.name">{{category.name}} </div>
        <button type="button" class='fa fa-plus-square' style='font-size:18px;color:grey;border:0px' @click.prevent="showAdd(category.name)"> Add Task</button>
        <div class="card text-center mt-2" v-for="task in filteredTask(category)" :key="task.id">
          <TaskCard 
            :filteredTask="task"
            :category="category"
            @deleteTask='deleteTask'
            @editTask='editTask'
            @changeCategoryTask='changeCategoryTask'
            > 
          </TaskCard>
        </div>

        <div id="add" class="d-flex justify-content-center align-items-center" v-if="pageAdd === category.name" >
          <div class="p-5 bg-light shadow" style="width: auto; height: auto; border-radius: 10px">
              <form @submit.prevent="addTask(category.id)">
                  <textarea type="text" v-model="createTask" id="title"> </textarea><br>
                  <button type="submit" class="btn-primary">Add</button>
              </form>
          </div>
        </div>
      </div>
    </div>
   </div>
</div>
</template>

<script>
import Navbar from './Navbar'
import TaskCard from './TaskCard.vue';

export default {
  name: "MainPage",
  props: ['tasks','category'],
  data() {
    return {
      pageAdd: '',
      createTask: ''
    };
  },
  components:{
    Navbar,TaskCard
  },
  computed : {
    
  },
 methods: {
  filteredTask(category){
      return this.tasks.filter(e=> e.CategoryId == category.id)
    },
  userLogout(){
      this.$emit('userLogout')
  },
  deleteTask(id){
    this.$emit('deleteTask',id)
  },
  showAdd(category){
    this.pageAdd = category

  },
  addTask(category){
     const newData = {
          title: this.createTask,
          category: category
        }
        console.log(newData)
        this.$emit('addTask',newData)
        this.createTask = ''
        this.pageAdd = ''
     

  },
  editTask(editedTask,id){
      this.$emit('editTask',editedTask,id)

  },
  changeCategoryTask(newCatid,id){
      this.$emit('changeCategoryTask',newCatid,id)

  }

 }
};
</script>

<style scoped>
</style>
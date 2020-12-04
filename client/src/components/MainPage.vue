<template>

    <div class="tasksBox">
        
        <Navbar class="col-md-12" @changePage="changePage"></Navbar>

        <div class="add" >
          <div class="col form-inline">
            <b-form-input
              id="input-2"
              v-model="newTask"
              required
              placeholder="Enter Task"
              @keyup.enter="add"
            >
            </b-form-input>
            <b-button @click="add" variant="primary" class="ml-3">Add</b-button>
          </div>
        </div>
      
      <Category  :allTasks="allTasks" @editTask="editTask" @deleteTask="deleteTask" v-for="(category, i) in categories" :key="i" :category="category" @changePage="changePage"></Category>
    
  </div>
</template>

<script>

import draggable from "vuedraggable";
import Navbar from "./Navbar"
import Category from "./Category"
import axios from "axios"

export default {
  title: "kanban-board",
  components: {
    draggable,
    Navbar,
    Category
  },
  data() {
    return {
      // for new tasks
      newTask: "",
      categories: [
        {name: "backlog"},
        {name: "todo"},
        {name: "doing"},
        {name: "done"}
      ],
      allTasks: [],
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [
        // { title: "Code Sign Up Page" },
        // { title: "Test Dashboard" },
        // { title: "Style Registration" },
        // { title: "Help with Designs" }
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    };
  },
  methods: {
    //add new tasks method
    add() {
      if (this.newTask) {
        axios({
          method: 'post',
          url: 'https://kanbaban.herokuapp.com/tasks',
          data: {
            title: this.newTask,
          },
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        .then(response => {
          this.arrBackLog.push({ title: this.newTask });
          this.newTask = "";
          this.fetchTasks()
        })
      }
    },
    fetchTasks() {
      axios({
          method: 'get',
          url: 'https://kanbaban.herokuapp.com/tasks',
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        .then(response => {
          let data = response.data.data
          this.allTasks = data;
          
        })
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
    deleteTask(id) {
      this.$emit('deleteTask', id)
    },
    editTask(task) {
      this.$emit('editTask', task)
    }
  },
  created() {
    this.fetchTasks()
  }
};
</script>

<style>
/* light stylings for the kanban columns */
body {
    padding: 0;
    margin: 0;
}
.tasksBox {
    position: absolute;
    /* background-color: red; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /* background: #a19393; */
    /* border-radius: 10px; */
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: space-evenly;
    /* padding: 0px; */
    margin-bottom: 0px;
    /* box-sizing: border-box */
}

.category {
    min-width: 300px;
    /* position: relative;
    top: 80%;
    left: 10%;
    transform: translate(-50%, -50%); */
}
.kanban-column {
  min-height: 300px;
}

.add {
  position: absolute;
  top:240px
}


</style>
<template>

  <div class="main-page">
    <NavBar
      @logOutUser="logOutUser"
    >
    </NavBar>
    
    <div class="task-lists container mt-5">
      <TaskList
        v-for="category in categories"
        :key="category.index"
        :category="category"
        :task="task"
        @editTask="editTask"
        @deleteTask="deleteTask"      
      >
      </TaskList>

      <button class="card btn add-list-btn" @click.prevent="showAddList"><span><i class="fa fa-plus"></i></span> Add a list</button>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import NavBar from './NavBar.vue'
import TaskList from './TaskList.vue'
import SwAl from 'sweetalert2'
const server_url = 'http://localhost:3000'

export default {
  components : {
    NavBar,
    TaskList
  },
  data() {
    return {
      task: [],
      page: 'main',
      categories: [
        {
          id: 1,
          name: 'Backlog'
        },
        {
          id: 2,
          name: 'To-do'
        },
        {
          id: 3,
          name: 'Doing'
        },
        {
          id: 4,
          name: 'Done'
        },
      ]
    }
  },
  created() {
    this.getAllTask()
  },
  methods: {
    getAllTask() {
      axios({
        method: 'GET',
        url: server_url + '/tasks',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response => {
        this.task = []
        const dataTask = response.data
        dataTask.forEach(element => {
          this.task.push(element)
        });
      })
      .catch(err => {
        this.$emit('consoleErr', err)
      })
    },
    logOutUser() {
      this.$emit('logOutUser')
    },
    showAddList() {
      console.log('add list')
    },
    editTask(id) {
      console.log('edit Task', id)
    },

    deleteTask(id) {
      SwAl.fire({
        title: 'Are you sure you want to delete this task?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it'
      })
        .then(result => {
          if(result.value) {
            axios({
              method: 'DELETE',
              url: server_url + `/tasks/${id}`,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
              .then(() => {
                SwAl.fire(
                  'Deleted!',
                  'Your file has been deleted'
                )
                this.refresh()
              })
              .catch(err => {
                this.$emit('consoleErr', err)
              })
          }
        })
    }
  }
}
</script>

<style>
  
</style>
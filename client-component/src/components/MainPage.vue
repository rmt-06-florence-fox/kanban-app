<template>
  <div>
    <Navbar @emitChangePage="changePage"></Navbar>
    <TaskList :tasks="tasks"></TaskList>
    <AddForm></AddForm>
</template>

<script>
import Navbar from "./Navbar"
import TaskList from "./TaskList"
import AddForm from "./AddForm"
import axios from "axios"

export default {
    name: "MainPage",
    data() {
      return {
        tasks: [],
      }
    },
    components: {
      Navbar,
      TaskList,
      AddForm 
    }, 
    methods: {
      fetchTask() {
        axios({
          method: "GET",
          url: "http/localhost:3000/tasks",
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(response => {
          this.movies = response
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      this.fetchTask()
    }
}
</script>

<style>

</style>
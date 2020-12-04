<template>
  <div>
    <Navbar></Navbar>
    <TaskList :tasks="tasks"></TaskList>
</template>

<script>
import Navbar from "./Navbar"
import TaskList from "./TaskList"
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
      TaskList
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
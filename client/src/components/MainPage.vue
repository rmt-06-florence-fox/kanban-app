<template>

  <div class="main-page">
    <NavBar
      @logOutUser="logOutUser"
    >
    </NavBar>
    
    <div class="task-lists container mt-5">
      <TaskList>
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

export default {
  components : {
    NavBar,
    TaskList
  },
  methods: {
    logOutUser() {
      this.$emit('logOutUser')
    },
    showAddList() {
      console.log('add list')
    }
  }
}
</script>

<style>
  
</style>
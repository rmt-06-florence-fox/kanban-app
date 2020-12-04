<template>
  <div class="card add">
    <form class="card-body" @submit.prevent="addTask">
      <textarea class="card-title form-control" placeholder="Insert Task Title">
      <button class="btn btn-primary" type="submit">Add Task</button>
      <button class="btn btn-danger" @click="toggleShowAdd">Cancel</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
const server_url ='http://localhost:3000'

export default {
  data() {
    return {
      newTask: {
        add_title: '',
        add_category: category.name
      }
    }
  },
  props: ['category'],
  methods: {
    addTask() {
      const payload = {
        title: newTask.add_title,
        category: newTask.add_category
      }

      axios({
        method: 'POST',
        url: server_url + '/tasks',
        data: {
          title: payload.title,
          category: payload.category
        }
      })
      .then(data => {
        // this.$emit('', data)
      })
      .catch(err => {
        this.$emit('consoleErr', err)
      })
    }
  },
}
</script>

<style scoped>

</style>
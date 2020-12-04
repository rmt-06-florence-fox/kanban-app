<template>
  <div class="card add">
    <form class="card-body" @submit.prevent="addTask">
      <textarea class="card-title form-control" placeholder="Insert Task Title" v-model="add_title">
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
      add_title: '',
      add_category: ''
    }
  },
  props: ['category'],
  methods: {
    addTask() {
      const payload = {
        title: add_title,
        category: add_category
      }

      axios({
        method: 'POST',
        url: server_url + '/tasks',
        data: {
          title
        }
      })
      .then(data => {
        this.$emit('signinUser', data)
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
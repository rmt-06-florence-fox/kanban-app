<template>
  <div class="card add">
    <div class="card-body">
      <form @submit.prevent="addTask(add.title, add.category)">
        <input class="card-title form-control" placeholder="Insert Task Title" v-model="add.title">
        <input style="display: none;" :value="category.name">
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Add Task</button>
          <button class="btn btn-danger" @click.prevent="showAddCard">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
const server_url ='https://kanban-trolle.herokuapp.com'

export default {
  props: ['category'],
  data() {
    return {
      add: {
        title: null,
        category: this.category
      }
    }
  },
  methods: {
    showAddCard() {
      this.$emit('showAddCard')
    },
    addTask(title, category) {

      axios({
        url: server_url + '/tasks',
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          title,
          category,
          organization: "organization"
        }
      })
      .then(response => {
        this.$emit('getAllTask')
        this.$emit('showAddCard')
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="card-body">
    <form @submit.prevent="editTask(edit.title, edit.category)">
      <input class="card-title form-control" v-model="edit.title">
      <input style="display: none;" :value="category">
      <button class="btn btn-primary" type="submit">Edit Task</button>
      <button class="btn btn-danger" @click.prevent="toggleDisplayEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
const server_url = 'https://kanban-trolle.herokuapp.com'

export default {
  props: ['task','category'],
  data() {
    return {
      edit: {
        title: this.task.title,
        category: this.category.name
      }
    }
  },
  methods: {
    toggleDisplayEdit(){
      this.$emit('toggleDisplayEdit')
    },
    editTask(title, category) {
      const id = this.task.id

      axios({
        url: server_url + `/tasks/${id}`,
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          title,
          category,
        }
      })
      .then(response => {
        this.$emit('getAllTask')
        this.toggleDisplayEdit()
      })
      .catch(err => {
        console.log(err)
      })
    }
  },

}
</script>

<style>
</style>
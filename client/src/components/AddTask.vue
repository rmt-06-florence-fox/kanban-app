<template>
  <div class="container">
    <h1>Add new Task</h1>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" v-model="title"/>
        <small id="emailHelp" class="form-text text-muted"
          >What do you want to do?</small
        >
      </div>
      <button type="submit" class="btn btn-primary">Go</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTask() {
            const payload = {
                title: this.title,
                category: 'Backlog'
            }
            console.log(payload);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/tasks',
                data: {
                    title: payload.title,
                    category: payload.category
                }
            })
            .then(response=> {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
};
</script>

<style>
</style>
<template>
  <div class="bg-card">
    <div class="card-content">
      <div class="title-card">Go to bed at 12.00 am</div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  methods: {
    fetchTask() {
      axios({
        method: "get",
        url: "http://localhost:3000/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },
  },
  created(){
      this.fetchTask()
  }
};
</script>

<style>
</style>
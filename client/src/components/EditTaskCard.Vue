<template>
  <form class="card-body">
    <textarea class="card-title form-control" placeholder="Insert Task Title" >
    <button class="btn btn-primary" type="submit">Edit Task</button>
    <button class="btn btn-danger" @click>Cancel</button>
  </form>
</template>

<script>
import Vue from "vue";
import axios from "axios";
const server_url = ""

export default {
  props: ['editId'],
  data() {
    return {
      edit_title: '',
      edit_category: ''
    }
  },
  created() {
    // axios({
    //   method: "GET",
    //   url: server_url + `/tasks/${editId}`
    // })
  }
}
</script>

<style>
</style>
<template>
    <div class="form-container" id="AddTask">
    <div class="input form">
      <form @submit.prevent="addTask">
        <h1>Add Task</h1>
        <br>
        <div class="form-group rounded">
          <label for="input-title">Title</label>
          <input 
            v-model="title"
            type="text"
            class="form-control" 
            id="input-title" 
            aria-describedby="titleHelp">
        </div>
        <div class="form-group">
          <label for="input-description">Description</label>
          <textarea 
            v-model="description"
            class="form-control" 
            id="input-description" 
            rows="3"
          ></textarea>
        </div>
        <br>
        <button 
          type="submit" 
          class="btn btn-outline-dark inputButton"
        >Submit</button>
      </form>
    </div>
    <div class="input img">
      <img src="../asset/img/download-icons8.png">
    </div>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    addTask() {
      const value = {
        title: this.title,
        description: this.description
      }
      this.clearForm()
      this.$emit("addTask", value)
    },
    clearForm() {
      this.title='',
      this.description=''
    }
  }
}
</script>

<style>

</style>
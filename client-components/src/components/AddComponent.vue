<template>
  <div class="form-login">
  <form @submit.prevent="createTask">
    <label for="title-form">Task Title :</label>
    <input type="text" id=title-form v-model="task.title"><br>
    <label for="description-form">Description :</label>
    <input type="text" id=description-form v-model="task.description"><br>
    <label for="deadline-form"> Category : </label>
    <input type="text" id=deadline-form :value="addCategory" readonly><br>
    <label for="deadline-form">Deadline :</label>
    <input type="date" id=deadline-form v-model="task.deadline"><br>
    <button type="submit" @click="changePage">add Task</button>
  </form>
  </div>
</template>

<script>
export default {
  name: "AddComponent",
  data(){
    return{
      task:{
        title: "",
        description: "",
        deadline: ""
      }
    }
  },
  props: ['addCategory'],
  methods: {
    createTask(){
      let payload = {
        title: this.task.title,
        description: this.task.description,
        category: this.addCategory,
        deadline: this.task.deadline
      }

      this.$emit('createTask', payload)
      this.task.title = ''
      this.task.description = ''
      this.task.category = ''
      this.task.deadline = ''
    },
    changePage(){
      let payload = {
        pageName: 'HomePage'
      }
      this.$emit('changePage', payload)
    }

  },
}
</script>

<style>

</style>
<template>
  <div class="form-login">
  <form @submit.prevent="editTaskData">
    <label for="title-form" >Task Title :</label>
    <input type="text" id=title-form v-model="task.title"><br>
    <label for="description-form">Description :</label>
    <input type="text" id=description-form v-model="task.description"><br>
    <label for="deadline-form"> Category : </label>
    <input type="text" id=deadline-form v-model="task.category" readonly><br>
    <label for="deadline-form">Deadline :</label>
    <input type="date" id=deadline-form v-model="deadline"><br>
    <button type="submit">edit Task</button>
    <button @click="changePage">Cancel</button>
  </form>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  
  name: 'EditPage',
  data(){
    return {
      deadline: ""
    }
  },
  props: ['task'],
  methods: {
    editTaskData(){
      this.$emit('editTaskData', this.task)
    },
    changePage() {
      let payload = {
        page: `homePage`
      }
      this.$emit('changePage', payload)
    },
  },
  created() {
    // formatDate(){
      const formattedDate = moment(this.task.deadline).format('YYYY-MM-DD'); 
      this.task.deadline = formattedDate
      this.deadline = formattedDate
      // return this.task.deadline
    // }
  }
}
</script>

<style>

</style>
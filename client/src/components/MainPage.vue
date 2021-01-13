<template>
  <div>
    <Navbar @hasBeenLogout="hasBeenLogout"></Navbar>
    <BoardList @createNewTask="createTask" @deleteTask="deleteThisTask" @editTask='editThisTask' @updateThisTask='updateTask' :dataTask='dataTask'></BoardList>
  </div>
</template>

<script>
import Navbar from './Navbar'
import BoardList from './BoardList'

export default {
  name: "MainPage",
  data() {
    return {
      name: 'Main Page',
    }
  },
  methods: {
    hasBeenLogout(page) {
      this.$emit('hasBeenLogout', page)
    },
    createTask(newTask) {
      this.$emit('createNewTask', newTask)
    },
    deleteThisTask(id) {
      this.$emit('deleteTask', id)
    },
    editThisTask(editTask) {
      this.$emit('editTask', editTask)
    },
    updateTask(updatedTask) {
      this.$emit('updateThisTask', updatedTask)
    }
  },
  props: ['dataTask'],
  components: {
    Navbar,
    BoardList
  }
}
</script>

<style>

</style>
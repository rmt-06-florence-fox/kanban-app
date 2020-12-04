<template>
  <div>
    <Navbar
        @logout="signOut"
        @ChangePage="changePage"
    ></Navbar>
    <BoardList
        v-if="pageName === 'Home-page'"
        :tasks="tasks"
        :categories="categories"
        @destroyTask="deleteTask"
        @editForm="updateForm"
    ></BoardList>
    <AddForm
        @addTask="createTask"
        v-if="pageName === 'Add-form'"    
    ></AddForm>
    <EditForm
        @editTask="updateTask"
        :updating="updating"
        v-if="pageName === 'Edit-form'"    
    ></EditForm>
  </div>
</template>

<script>
import AddForm from "./AddForm"
import EditForm from "./EditForm"
import Navbar from "./Navbar";
import BoardList from "./BoardList";

export default {
  name: "HomePage",
  props: [ 'tasks','categories','pageName', 'updating' ],

    components: {
        Navbar,
        BoardList,
        AddForm,
        EditForm
    },
    methods: {
        signOut() {
          this.$emit("logout");
        },
        changePage (page) {
          this.$emit('changePage', page)
        },
        deleteTask(id) {
          console.log(id)
          this.$emit('destroyTask', id)
        },        
        createTask(payload) {
          this.$emit('addTask', payload)
        },
        updateForm(id) {
          this.$emit('editForm', id)
        },
        updateTask(payload) {
          this.$emit('editTask', payload)
        }
    },
    created() {
      this.$emit('fetchTask')
    }
};
</script>

<style>
</style>
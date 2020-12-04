<template>
  <div>
    <div class="task-list title">
      <h4 id="task-list-title">{{ category.name }}</h4>
    </div>
    <div class="task-list">
      <div :key="task.index" v-for="task in task">
        <TaskCard
        :category="category.name"
        :task="task"
        @editTask="editTask"
        @deleteTask="deleteTask"
        >
        </TaskCard>
      </div>
      <button v-show="!showAdd" class="add-card-btn btn"><span><i class="fa fa-plus"></i></span> Add a task</button>
      <AddTaskCard
        v-show="showAdd"
        :category="category.name"
      >
      </AddTaskCard>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import SweetAlert from 'sweetalert2'
import TaskCard from './TaskCard.vue'
import AddTaskCard from './AddTaskCard.vue'


export default {
  components: {
    TaskCard,
    AddTaskCard
  },
  props: ['category', 'task'],
  data() {
    return {
      showAdd: false
    }
  },
  methods: {
    showAddCard() {
      this.showAdd = true
    },
    editTask(id) {
      this.$emit("editTask", id)
    },
    deleteTask(id) {
      this.$emit("deleteTask", id)
    }
  }
  
}
</script>

<style>
  
</style>
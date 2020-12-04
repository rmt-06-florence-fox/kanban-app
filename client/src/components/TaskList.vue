<template>
  <div>
    <div class="task-list title">
      <h4 id="task-list-title">{{ category.name }}</h4>
    </div>
    <div class="task-list">
      <div :key="task.index" v-for="task in task">
        <TaskCard
          :category="category"
          :task="task"
          @editTask="editTask"
          @deleteTask="deleteTask"
          @moveLeft="moveLeft"
          @moveRight="moveRight"
        >
        </TaskCard>
      </div>
      <button v-show="!showAdd" class="add-card-btn btn" @click="showAddCard"><span><i class="fa fa-plus"></i></span> Add a task</button>
      <AddTaskCard
        v-show="showAdd"
        :category="category.name"
        @showAddCard="showAddCard"
        @getAllTask="getAllTask"
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
      if(this.showAdd === true) {
        this.showAdd = false
      } else {
        this.showAdd = true
      }
    },
    editTask(id) {
      this.$emit("editTask", id)
    },
    deleteTask(id) {
      this.$emit("deleteTask", id)
    },
    getAllTask() {
      this.$emit('getAllTask')
    },
    moveLeft(id, categoryId) {
      this.$emit("moveLeft", id, categoryId)
    },
    moveRight(id, categoryId) {
      this.$emit("moveRight", id, categoryId)
    }
  }
  
}
</script>

<style>
  
</style>
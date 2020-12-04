<template>
  <div>
    <!-- {{category}}
    {{task.category}} -->
    <div class="card">
      <div v-if="task.category === category.name">
        <div class="card-body" v-show="!displayEdit">
          <h5 clss="card-title">{{task.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ task.User.createdAt.slice(0, 10) }}</h6>
          <h6 class="card-subtitle text-muted">{{ task.User.name }}</h6>
          <div>
            <a class="edit-icon" v-if="category.id !== 1">
              <i class="fa fa-arrow-left float-left" @click="moveLeft(task.id, category.id)"></i>
            </a>
            <a class="edit-icon" v-if="category.id !== 4">
              <i class="fa fa-arrow-right float-left" @click="moveRight(task.id, category.id)"></i>
            </a>
            <a class="edit-icon" @click="editTask(task.id)">
              <i class="fa fa-edit float-right"></i>
            </a>
            <a class="edit-icon" @click="deleteTask(task.id)">
              <i class="fa fa-trash float-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <EditTaskCard
      v-show="displayEdit"
      :category="category"
      :task="task"
      @toggleDisplayEdit="toggleDisplayEdit"
      @getAllTask="getAllTask"
    >
    </EditTaskCard>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import EditTaskCard from './EditTaskCard.vue'

export default {
  components: {
    EditTaskCard
  },
  props: ['task', 'category'],
  data() {
    return {
      displayEdit: false
    }
  },
  methods: {
    toggleDisplayEdit() {
      if(!this.displayEdit) {
        this.displayEdit = true
      } else {
        this.displayEdit = false
      }
    },
    editTask(id) {
      this.toggleDisplayEdit()
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
  },
}
</script>

<style>
  
</style>
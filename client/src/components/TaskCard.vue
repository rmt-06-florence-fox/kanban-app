<template>
  <div class="card" v-if="task.category === category">
    <div class="card-body" v-if="displayEdit === false">
      <h5 clss="card-title">{{task.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ task.User.createdAt.slice(0, 10) }}</h6>
      <h6 class="card-subtitle text-muted">{{ task.User.email }}</h6>
      <div>
        <a class="edit-icon" @click="editTask(task.id)">
          <i class="fa fa-edit float-right"></i>
        </a>
        <a class="edit-icon" @click="deleteTask(task.id)">
          <i class="fa fa-trash float-right"></i>
        </a>
      </div>
    </div>
    <EditTaskCard
      v-if="displayEdit === true"
    >
    </EditTaskCard>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import EditTaskCard from './EditTaskCard.vue'

export default {
  props: ['task', 'category'],
  data() {
    return {
      displayEdit: false
    }
  },
  methods: {
    toggleDisplayEdit() {
      if(!displayEdit) {
        this.displayEdit = true
      } else {
        this.displayEdit = false
      }
    },
    editTask(id) {
      this.$emit("editTask", id)
    },
    deleteTask(id) {
      this.$emit("deleteTask", id)
    },
  },
}
</script>

<style>
  
</style>
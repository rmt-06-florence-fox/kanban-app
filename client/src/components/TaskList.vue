<template>
  <div>
    <div class="task-list title">
      <h4 id="task-list-title">Backlog</h4>
    </div>
    <div class="task-list">
      <TaskCard>
      </TaskCard>
      <button class="add-card-btn btn" @click.prevent="showAddCard"><span><i class="fa fa-plus"></i></span> Add a task</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import TaskCard from './TaskCard.vue'


export default {
  components: {
    TaskCard
  },

  methods: {
    showAddCard() {
      console.log('add card')
    }
  }
  
}
</script>

<style>
  
</style>
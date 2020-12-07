<template>
  <section id="home-page" class="container mt-5">
    <main>
      <div class="container mt-5">
        <div class="row">
          <TaskBoard
            v-for="(category, idx) in categories" :key="idx"
            :tasks="tasks"
            :category="category"
            @destroyTask="deleteTask"
            @editForm="updateForm"
          >    
          </TaskBoard>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import TaskBoard from "./TaskBoard";

export default {
  name: "BoardList",
  props: ["tasks", "categories"],
  components: { TaskBoard },
  methods: {
    deleteTask(id) {
      this.$emit('destroyTask', id)
    },
    updateForm(id) {
      this.$emit('editForm', id)
    },            
  }
};
</script>

<style>
</style>

<template>
  <div id="board" class="hero-body mt-4">
    <div class="container has-text-centered">
      <div>
        <button @click.prevent="toAddForm" class="button mb-5" id="add-task" type = "submit">Add Task</button>
      </div>
      <BoardList
        :dataTasks="dataTasks"
        ></BoardList>
    </div>
  </div>
</template>

<script>
import BoardList from "./BoardList"

export default {
  name: "DashboardPage",
  components: {
    BoardList,
  },
  props: [ 'dataTasks'],
  methods: {
  }
};
</script>

<style>
</style>
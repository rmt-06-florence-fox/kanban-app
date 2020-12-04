<template>
  <div id="board" class="hero-body mt-4">
    <div class="container has-text-centered">
      <BoardList
      :dataTasks="dataTasks"
      :addTask="addTask"
      :getTasks="getTasks"
      ></BoardList>
    </div>
  </div>
</template>

<script>
import BoardList from "./BoardList";
import swal from 'sweetalert'

export default {
  name: "DashboardPage",
  components: {
    BoardList,
  },
  props: [ "dataTasks", "addTask", "getTasks"],
};
</script>

<style>
</style>
<template>
  <div>
    <Navbar @emitLogout="emitLogout"></Navbar>
    <Board 
    :categories=categories
    :tasks=tasks>
    </Board>
  </div>
</template>

<script>
import Navbar from "./navbar.vue"
import Board from "./board.vue"
export default {
  name: "MainPage",
  data() {
    return {
    };
  },
  props: ['categories', 'tasks'],
  components: {
    Navbar,
    Board
  },
  methods: {
    emitLogout(){
      this.$emit("emitLogout")
    }
  }
};
</script>

<style scoped>
</style>
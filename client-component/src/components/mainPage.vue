<template>
  <div>
    <Navbar @emitLogout="emitLogout"></Navbar>
    <Board 
    :categories=categories
    :tasks=tasks
    :loggedInEmail=loggedInEmail
    @getCategory="getCategory"
    @emitPopulate="emitPopulate"
    @emitMoveTask="emitMoveTask"
    >
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
  props: ['categories', 'tasks', 'loggedInEmail'],
  components: {
    Navbar,
    Board
  },
  methods: {
    emitLogout(){
      this.$emit("emitLogout")
    },
    getCategory(CategoryId, page){
      
      this.$emit('getCategory', CategoryId, page)
    }, 
    emitPopulate(task, page){
      this.$emit('emitPopulate', task, page)
    },
    emitMoveTask(task, page){
      this.$emit('emitMoveTask', task, page)
    }
  }
};
</script>

<style scoped>
</style>
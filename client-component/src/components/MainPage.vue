<template>
  <div>
    <NavbarComponent @emitLogout="emitLogout"></NavbarComponent>
    <BoardList 
    :categories=categories
    :tasks=tasks
    :loggedInEmail=loggedInEmail
    @getCategory="getCategory"
    @emitPopulate="emitPopulate"
    @emitMoveTask="emitMoveTask"
    @emitDeleteTask="emitDeleteTask"
    >
    </BoardList>
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue"
import BoardList from "./BoardList.vue"
export default {
  name: "MainPage",
  data() {
    return {
    };
  },
  props: ['categories', 'tasks', 'loggedInEmail'],
  components: {
    NavbarComponent,
    BoardList
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
    },
    emitDeleteTask(task){
      console.log(task + " <<< ini dari MainPage")
      this.$emit('emitDeleteTask', task)
    }
  }
};
</script>

<style scoped>
</style>
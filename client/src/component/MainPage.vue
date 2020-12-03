<template>
  <div>
    <Navbar 
      @logout="logout"
      @changePage ="changePage"  
    
    ></Navbar>
    <KanbanBoard 
    v-if="onPage == 'kanbanBoard'"
    :taskData="taskData"
    ></KanbanBoard>
    <AddTask v-if="onPage == 'addPage'"></AddTask>
  </div>
</template>

<script>
import Navbar from "./Navbar"
import KanbanBoard from "./KanbanBoard"
import AddTask from "./AddTask"

export default {
    name : "MainPage",
    data(){
      return {
        task : []
      }
    },
    props : ['onPage','taskData'],
    components : {
      Navbar,
      KanbanBoard,
      AddTask
    },
    methods : {
      logout(){
        this.$emit('logout')
      },
      changePage(page){
        console.log('pagemain')
        console.log(page)
        this.$emit('changePage',page)
      }
    }
}
</script>

<style>

</style>
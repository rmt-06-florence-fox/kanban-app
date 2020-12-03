<template>
  <div class="container-fluid" style="height:93%">
      <div class="d-flex flex-row" style="height:97%" >
        <CardState :tasks="tasks.Backlog" name="Backlog"></CardState>
        <CardState :tasks="tasks.Todo" name="Todo"></CardState>
        <CardState :tasks="tasks.Doing" name="Doing"></CardState>
        <CardState :tasks="tasks.Done" name="Done"></CardState>
      </div>
  </div>
</template>

<script>
import CardState from './CardState'
export default {
    props:['tasks'],
    components:{
        CardState
    },
    created(){
        console.log(this.tasks);
    }
}
</script>

<style>

</style>
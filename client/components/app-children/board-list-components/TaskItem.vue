<template>
  <div class="card p-0">
      <ButtonItem :task="task"></ButtonItem>
      <div class="card-footer"> <p> by : {{task.User}}</p> </div>
      <div class="card-header border-dark"> <h4> {{task.title}} </h4> </div>
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem.vue"
export default {
    name : "TaskItem",
    props : ["task"],
    components : {
        ButtonItem
    }

}
</script>

<style>

</style>
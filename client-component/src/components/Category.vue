<template>
<div>
  <select  class="custom-select" v-model="newCategory" >
          <option selected disabled>--- Move Task Category---</option>
          <option v-if="filteredTask.category !== 'Backlog'" value="Backlog">Move To Backlog </option>
          <option v-if="filteredTask.category !== 'Todo'" value="Todo"> Move To Todo</option>
          <option v-if="filteredTask.category !== 'Doing'" value="Doing"> Move To Doing</option>
          <option v-if="filteredTask.category !== 'Done'" value="Done"> Move To Done</option>
        </select>


</div>
  
</template>

<script>
export default {
  name: "Category",
   props: ['filteredTask','category'],
}
</script>

<style>

</style>
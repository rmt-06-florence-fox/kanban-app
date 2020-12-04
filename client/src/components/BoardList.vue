<template>
  <div class="container card-container">
      <div class="columns">
        <TaskBoard
          v-for="category in categories"
          :key="category.id"
          :dataTasks="dataTasks"
          :category="category"
        ></TaskBoard>
      </div>
    </div>
</template>

<script>
import TaskBoard from "./TaskBoard"

export default {
  name: "BoardList",
  components: {
    TaskBoard
  },
  props: [ 'dataTasks'],

  data() {
    return {
      categories: [
        { 
          "id": 1,
          "name": "Backlog",
        },
        {
          "id": 2,
          "name": "Todo",
        },
        {
          "id": 3,
          "name": "Doing",
        },
        {
          "id": 4,
          "name": "Done",
        },
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="shadow col-md-3 col-sm-6 mt-4 rounded">
    <div class="p-1 bg-dark text-color rounded">
      <h5 class="ml-2 mb-1 mt-2"><strong>{{categoryList}}</strong></h5>
    </div>
    <div class="overflow-auto custom-col mt-1 mb-1">
      <TaskItem v-for="data in fillCard" :data="data" :key="data.id" :fetchTasks="fetchTasks" :fillCard="fillCard" :editTask="editTask"></TaskItem>
    </div>
    <div class="p-1 cust-add-btn bg-dark text-color rounded">
      <a type="submit" @click.prevent="openAdd" class="btn-color btn btn-primary text-color">Add</a>
    </div>
  </div>
</template>

<script>
  import TaskItem from './TaskItem'

  export default {
    props: [ 'categoryList', 'tasks', 'fetchTasks', 'createTask', 'editTask' ],
    components: {
      TaskItem
    },
    methods: {
      openAdd() {
        swal({
          content: {
            element: "input",
            attributes: {
              placeholder: "Your task here...",
              type: "text",
            },
          }
        })
          .then(response => {
            this.createTask(response, this.categoryList)
          })
          .catch(err => console.log(err))
      }
    },
    computed: {
      fillCard() {
        return this.tasks.filter(task => task.category === this.categoryList)
      }
    }
  }
</script>

<style>

</style>
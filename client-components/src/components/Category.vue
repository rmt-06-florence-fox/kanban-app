<template>
  <div class="category-container">
    <!-- CATEGORY TITLE -->
    <div class="card-header">
      {{ categoryName }}
      <!-- ADD TASK -->
      <a href="#" @click="changePage">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </a>
    </div>

    <!-- TASK CONTAINER-->
    <div class="task-container overflow-auto">

      <!-- CARD TASK -->
      <!-- LEMPAR -->
      <TaskComponent
        v-for="task in filterTaskByCategory" :key="task.id"
        :task="task"
        :categoryName="categoryName"
        :categories="categories"
        @deleteTask="deleteTask"
        @moveTask="moveTask"
        @editTask="editTask"
      ></TaskComponent>
    </div>
  </div>
</template>

<script>
  // PECAH TSAK CARD KE COMPONENT TASK
  import TaskComponent from './TaskComponent'
  // import TaskComponent
  export default {
    name: 'Category',
    components: {
      TaskComponent
    },
    
    data () {
      return {
        moveCategoryy: []
      }
    },
    methods: {
      changePage(){
        let payload = {
          pageName: 'addPage',
          addCategory: this.categoryName
        }
        this.$emit('changePage', payload)
      },
      deleteTask(id){
        this.$emit('deleteTask', id)
      },
      moveTask(payload){
        console.log(payload, 'di cat');
        this.$emit('moveTask', payload)
      },
      editTask(payload){
        this.$emit('editTask', payload)
      }
    },
    props: ['categoryName', 'categories', 'tasks'],
    // TERIMA TASKS PROPS DARI HOMEPAGE
    computed: {
      filterTaskByCategory() {
        return this.tasks.filter(
          task => task.category == this.categoryName
        )
      }
      
    }
    // props category sama task
  }
</script>

<style>

</style>
<template>
  <div class="card">
    <div class="progress">
      <!-- COLOR PROGRESS  -->
      <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100"></div>
    </div>
  
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{task.title}}</h5>

        <!-- EDIT TASK BUTTON -->
        <div class="dropdown">
          <a href="#" id="dropdownMenuButton" data-toggle="dropdown">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="editTask" >Edit</a>
            <a class="dropdown-item" href="#" @click="deleteTask" >delete</a>

          </div>
        </div>

      </div>

      <p class="card-text">{{task.description}}</p>

      <div class="d-flex justify-content-between">
        <h6 class="footer" >deadline at {{deadline}}</h6>

        <!-- MOVE TASK -->
        <a href="#" id="dropdownMenuButton" data-toggle="dropdown">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrows-move" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
          </svg>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click="moveTask(category) "  v-for="category in moveTaskByCategory"
            :key="category.id">{{ category.name }}</a>
          <!-- <a class="dropdown-item" href="#">Doing</a>
              <a class="dropdown-item" href="#">Done</a> -->
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Move to</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'TaskComponent',
    data(){
      return{}
    },
    props:[ 
      'task', 'categories', 'categoryName'
    ],
    methods: {
      deleteTask(){
        const id = this.task.id
        this.$emit('deleteTask', id)
      },
      moveTask(category){
        const payload = {
          category: category.name,
          id: this.task.id
        }
        this.$emit('moveTask', payload)
      },
      editTask() {
        this.$emit('editTask', this.task)
      }
    },
    computed:{
      moveTaskByCategory(){
        return this.categories.filter(
          cat => cat.name !== this.categoryName
        )
      }
    },
    created() {
    // formatDate(){
      const formattedDate = moment(this.task.deadline).format('YYYY-MM-DD'); 
      this.task.deadline = formattedDate
      this.deadline = formattedDate
      // return this.task.deadline
    // }
  }
  }
</script>

<style>

</style>
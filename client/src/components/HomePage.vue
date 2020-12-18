<template>
  <div class="container">
    <div class="row">
      <TaskBoard :tasks="tasks" :fetchTasks="fetchTasks" v-for="(categoryList, i) in categoryList" :key="i" :categoryList="categoryList" :createTask="createTask" :editTask="editTask">
      </TaskBoard>
    </div>
  </div>
</template>

<script>
  import TaskBoard from './TaskBoard'

  export default {
    components: {
      TaskBoard
    },
    data() {
      return { 
        categoryList: [ 'Backlog', 'Product', 'Development', 'Done' ],
        tasks: [],
        title: '',
        category: ''
      }
    },
    methods: {
      fetchTasks() {
        this.$api({
          method: 'get',
          url: 'tasks',
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            this.tasks = data
          })
          .catch(err => console.log(err))
      },
      createTask(newTitle, newCategory) {
        this.$api({
          method: 'post',
          url: 'tasks',
          headers: { access_token: localStorage.getItem('access_token') },
          data: { title: newTitle, category: newCategory }
        })
          .then(() => {
            swal('Task created', {
              icon: 'success',
              buttons: false,
              timer: 1000
            })
            this.fetchTasks()
          })
          .catch(err => console.log(err))
      },
      editTask(payload) {
        this.$api({
          method: 'put',
          url: `tasks/${payload.id}`,
          headers: { access_token: localStorage.getItem('access_token') },
          data: { title: payload.title, category: payload.category }
        })
          .then(() => {
            // swal('Edited', {
            //   icon: 'success',
            //   buttons: false,
            //   timer: 1000
            // })
            this.fetchTasks()
          })
          // .then(() => )
          .catch(err => console.log(err))
      }
    },
    created() {
      this.fetchTasks()
    }
  }
</script>

<style>

</style>
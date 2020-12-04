<template>
  <div class="card mb-1">
    <div class="card-body custom-li-bg">
      <p class="card-text text-white">{{title}}</p>
      <small class="text-white">author: {{name}}</small><br>
      <small class="text-white">created: {{date}}</small>
      <div class="mt-1">
        <a type="submit" @click.prevent="openEdit" class="btn-color btn btn-primary text-color">Edit</a>
        <a type="submit" @click.prevent="deleteTask" class="btn-color btn btn-primary text-color">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'data', 'fetchTasks', 'editTask' ],
    data() {
      return {
        title: this.data.title,
        name: this.data.User.email,
        id: this.data.id,
        date: ''
      }
    },
    methods: {
      deleteTask() {
        this.$api({
          method: 'delete',
          url: `tasks/${this.id}`,
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(() => {
            this.fetchTasks()
            swal('Task deleted', {
              icon: 'success',
              buttons: false,
              timer: 1000
            })
          })
          .catch(err => console.log(err))
      },
      openEdit() {
        swal({
          content: {
            element: "input",
            attributes: {
              value: this.title,
              type: "text",
            }
          }
        })
          .then(response => {
            this.editTask(response, this.id)
          })
          .catch(err => console.log(err))
      },
      formatDate() {
        let valueDate = this.data.User.createdAt
        var d = new Date(valueDate),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear()

        if (month.length < 2) 
          month = '0' + month;
        if (day.length < 2) 
          day = '0' + day;

        return this.date = [day, month, year].join('-');
      }
    },
    created() {
      this.formatDate()
    }
  }
</script>

<style>

</style>
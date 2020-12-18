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
import Swal from 'sweetalert2'
export default {
  props: [ 'data', 'fetchTasks', 'editTask' ],
  data() {
    return {
      title: this.data.title,
      category: this.data.category,
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
      Swal.fire({
        title: "Edit Form",
        html: `
          <input type="text" id="edit-title" class="swal2-input" value=${this.title}>
          <div class="input-group" value=${this.category}>
            <select class="custom-select" id="edit-category">
              <option ${ this.category == "Backlog" ? "selected" : "" } value="Backlog">Backlog</option>
              <option ${ this.category == "Product" ? "selected" : "" } value="Product">Product</option>
              <option ${ this.category == "Development" ? "selected" : "" } value="Development">Development</option>
              <option ${ this.category == "Done" ? "selected" : "" } value="Done">Done</option>
            </select>
          </div>
         `,
        confirmButtonText: "Save!",
        focusConfirm: true,
        preConfirm: () => {
          const title = Swal.getPopup().querySelector("#edit-title").value;
          const category = Swal.getPopup().querySelector("#edit-category").value;
          if (!title || !category) {
            Swal.showValidationMessage(`Please enter title and category`);
          }
          return { title: title, category: category };
        },
      })
        .then(result => {
          const payload = {
            id: this.id,
            title: result.value.title,
            category: result.value.category
          }
          this.editTask(payload)
        })
        .catch(err => console.log(err))
      
      // swal({
      //   content: {
      //     element: "input",
      //     attributes: {
      //       value: this.title,
      //       type: "text",
      //     }
      //   }
      // })
      //   .then(response => {
      //     this.editTask(response, this.id)
      //   })
      //   .catch(err => console.log(err))
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
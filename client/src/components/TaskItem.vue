<template>
  <div class="card is-primary">
    <div class="header">
      <button
        class="delete is-medium is-danger mt-2"
        @click.prevent="deleteTask"
      ></button>
    </div>
    <div class="card-content">
    <small><i>task:</i></small>
    <div>
      {{ task.title }}
    </div>
    </div>
    <small><i>author:</i></small>
    <footer class="card-footer">
      <div class="card-footer-item">{{ task.User.username }}😎</div>
    </footer>
    <div class="box has-text-centered">
      <button class="button is-warning" @click.prevent="openEdit"><i class="far fa-edit"></i><b>Edit</b></button>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import Swal from "sweetalert2";

export default {
  name: "TaskItem",
  props: ["task", "getTasks", "editTask"],
  data() {
    return {
      editData: this.task,
    };
  },
  methods: {
    openEdit() {
      Swal.fire({
        title: "Edit Form",
        html: `
          <input type="text" id="edit-title" class="swal2-input" placeholder="title" value=${
            this.editData.title
          }>
          <div class="select is-multiple" value=${this.editData.category}>
            <select id="edit-category" multiple size="1">
              <option ${
                this.editData.category == "Backlog" ? "selected" : ""
              } value="Backlog">Backlog</option>
              <option ${
                this.editData.category == "Todo" ? "selected" : ""
              } value="Todo">Todo</option>
              <option ${
                this.editData.category == "Doing" ? "selected" : ""
              } value="Doing">Doing</option>
              <option ${
                this.editData.category == "Done" ? "selected" : ""
              } value="Done">Done</option>
            </select>
          </div>
         `,
        confirmButtonText: "Save!",
        focusConfirm: true,
        preConfirm: () => {
          const title = Swal.getPopup().querySelector("#edit-title").value;
          const category = Swal.getPopup().querySelector("#edit-category")
            .value;
          if (!title || !category) {
            Swal.showValidationMessage(`Please enter title and category`);
          }
          return { title: title, category: category };
        },
      }).then((result) => {
        const payload = {
          id: this.editData.id,
          title: result.value.title,
          category: result.value.category
        }
        this.editTask(payload)
      }).catch((err) => {
        Swal.fire(
          'sorry bukan punyamu mas...'
        )
      })
    },
    // delete
    deleteTask() {
      this.$api({
        method: "DELETE",
        url: `/tasks/${this.task.id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          this.getTasks();
        })
        .catch((err) => {
          swal("bukan punyamu mas... ", {
            icon: "error",
          });
        });
    },
  },
};
</script>

<style>
</style>
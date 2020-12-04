<template>
  <div class="card is-primary">
    <header>
      <button class="delete is-medium is-danger mt-2" @click.prevent="deleteTask"></button>
    </header>
    <div class="card-content">{{ task.title }}</div>
    <small><i>author:</i></small>
    <footer class="card-footer">
      <div class="card-footer-item">{{ task.User.username }}😎</div>
    </footer>
    <footer class="card-footer">
      <a class="card-footer-item">◀︎</a>
      <a class="card-footer-item">▶︎</a>
    </footer>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: "TaskItem",
  props: ["task", "getTasks"],
  methods: {
    
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
          console.log(response);
          this.getTasks()
        })
        .catch((err) => {
          swal('bukan punyamu mas... ', {
            icon: "error",
            // buttons: true,
          })
          // console.log(err)
        });
    },
  }
};
</script>

<style>
</style>
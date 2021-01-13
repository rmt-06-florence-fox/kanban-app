<template>
  <div>
    <div class="card mt-4 col-4" style="width: 18rem">
      <div class="card-body">
        <form @submit.prevent="editTask">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" v-model="title"/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="category">Category</label>
            </div>
            <select class="custom-select" v-model="category">
              <option value="Backlog">Backlog</option>
              <option value="To-Do">To-Do</option>
              <option value="On-Going">On-Going</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Done</button>
          <button class="btn btn-danger btn-sm">Cancel</button>
        </form>
      </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      title: this.data.title,
      category: this.data.category
    }
  },
  methods: {
    editTask() {
      const payload = {
        title: this.title,
        category: this.category
      }
      const id = this.data.id;
      this.$api({
        method: "PUT",
        url: `/tasks/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          title: payload.title,
          category: payload.category,
        },
      })
        .then(({ data }) => {
          this.$emit("toggleEditForm")
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
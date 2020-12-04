<template>
  <div>
    <div class="card mt-4 col-4" style="width: 18rem">
      <div class="card-body">
        <form>
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
      this.$api({
        method: "POST",
        url: "/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          title: payload.title,
          category: payload.category,
        },
      })
        .then(({ data }) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
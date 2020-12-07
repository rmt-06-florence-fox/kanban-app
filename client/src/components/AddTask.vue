<template>
  <div>
    <div class="card mt-4 col-4" style="width: 18rem">
      <div class="card-body">
        <form @submit.prevent="addTask">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" v-model="title" />
            <small id="emailHelp" class="form-text text-muted"
              >What do you want to do?</small
            >
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Go</button>
          <button @click="toggleAddForm" class="btn btn-danger btn-sm">Cancel</button>
        </form>
      </div>
</template>

<script>
export default {
  props: ["reloadTask"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTask() {
      console.log("Add Task Started");
      const payload = {
        title: this.title,
        category: "Backlog",
      };
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
        .then(({data}) => {
          this.$emit("afterAdd", data.result)
          this.$emit("toggleAddForm");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.title = "";
        });
    },
    toggleAddForm() {
      this.$emit("toggleAddForm");
    },
  },
};
</script>

<style>
</style>
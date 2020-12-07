<template>
  <form @submit.prevent="addtask">
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">Title</label>
      <div class="col-sm-9">
        <input
          type="text"
          class="form-control"
          v-model="newTask.title"
          placeholder="Title"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="description" class="col-sm-3 col-form-label"
        >Description</label
      >
      <div class="col-sm-9">
        <textarea
          type="text"
          class="form-control"
          v-model="newTask.description"
          placeholder="Description"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="deadline" class="col-sm-3 col-form-label">Deadline</label>
      <div class="col-sm-9">
        <input type="date" class="form-control" v-model="newTask.deadline" />
      </div>
    </div>
    <div class="form-group row">
      <label for="newTask.category" class="col-sm-3 col-form-label mr-4"
        >Category
      </label>
      <select class="form-control col-sm-8" v-model="newTask.category">
        <option selected disabled>--Select--</option>
        <option>Backlog</option>
        <option>Todo</option>
        <option>Doing</option>
        <option>Done</option>
      </select>
    </div>
    <div class="form-group row">
      <div class="col-sm-12">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddForm",
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        deadline: "",
        category: "",
      },
    };
  },
  methods: {
    addtask() {
      this.$emit("addtask", this.newTask, "MainPage");
    },
  },
};
</script>

<style>
</style>
<template>
  <section class="add-task-page">
    <div class="container mt-5">
      <form @submit.prevent="add">
        <div class="text-center mb-3">
          <h3>Add Task</h3>
        </div>
        <div class="form-group">
          <label>Title</label>
          <input 
          type="text" 
          class="form-control" 
          v-model="title"
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea 
          class="form-control"
          v-model="description"
          >
          </textarea>
        </div>
        <div class="form-group">
          <label>Point</label>
          <input 
          type="number" 
          class="form-control" 
          v-model="point"
          />
        </div>
        <div class="form-group">
          <label>Assigned To</label>
          <input 
          type="text" 
          class="form-control" 
          v-model="assignedto"
          />
        </div>
        <div class="form-group">
          <label>Choose a status:</label>
          <select 
          id="task" 
          class="form-control" 
          v-model="status"
          >
            <option value="">Select Status:</option>
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button type="submit" class="btn btn-form">Submit</button>
        <button @click="mainPage" type="button" class="btn btn-secondary">
          Close
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddTaskPage',
  data() {
    return {
      title: "",
      description: "",
      point: "",
      assignedto: "",
      status: "",
    };
  },
  methods: {
    add(){
      let payload = {
        title: this.title,
        description: this.description,
        point: this.point,
        assignedto: this.assignedto,
        status: this.status
      }
      this.$emit(
      "addTaskData", payload)
    },
    mainPage() {
      this.$emit("mainPage", "Main Page");
    },
  },
};
</script>
<template>
  <section class="edit-task-page">
    <div 
    class="container mt-5"
    :task="task"
    >
      <form 
        @submit.prevent="edit"
        >
        <div class="text-center mb-3">
          <h3>Edit Task</h3>
        </div>
        <div class="form-group">
          <label>Title</label>
          <input 
          type="text" 
          class="form-control" 
          value="task.title"
          v-model="title"/>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea 
          class="form-control" 
          value="task.description"
          v-model="description"></textarea>
        </div>
        <div class="form-group">
          <label>Point</label>
          <input 
          type="number" 
          class="form-control" 
          value="task.point"
          v-model="point"/>
        </div>
        <div class="form-group">
          <label>Assigned To</label>
          <input 
          type="text" 
          class="form-control" 
          v-model="assignedto"/>
        </div>
        <div class="form-group">
          <label>Choose a task:</label>
          <select 
          id="task" 
          class="form-control"
          v-model="status">
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done" selected>Done</option>
          </select>
        </div>
        <button 
        type="submit" 
        class="btn btn-form"
        >
        Submit</button>
        <button
          @click="mainPage"
          type="button"
          class="btn btn-secondary"
        >
          Close
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditTaskPage',
  data(){
    return {
      id: this.task.id,
      title: this.task.title,
      description: this.task.description,
      point: this.task.point,
      assignedto: this.task.assignedto,
      status: this.task.status,
    }
  },
  props: ['task'],
  methods: {
    edit(){
      let payload = {
        id: this.id,
        title: this.title,
        description: this.description,
        point: this.point,
        assignedto: this.assignedto,
        status: this.status
      }
      this.$emit(
      "editTaskData", payload)
    },
    mainPage() {
      this.$emit("mainPage", "Main Page");
    }
  }
};
</script>
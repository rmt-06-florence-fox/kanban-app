<template>
  <section class="edit-task-page">
    <div class="container mt-5">
      <form>
        <div class="text-center mb-3">
          <h3>Edit Task</h3>
        </div>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label>Point</label>
          <input type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label>Assigned To</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Choose a task:</label>
          <select id="task" class="form-control">
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done" selected>Done</option>
          </select>
        </div>
        <button type="submit" class="btn btn-form">Submit</button>
        <button
          @click="changePage('Main Page')"
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
export default {};
</script>

<style>
</style>
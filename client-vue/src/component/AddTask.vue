<template>
  <div class="row">
    <div class="col s12 center">
      <h3>Add Todo</h3>
    </div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input value="" id="add-title" type="text" class="validate" />
          <label for="edit-title">Title</label>
        </div>
        <div class="input-field col s12">
          <input value="" id="add-description" type="text" class="validate" />
          <label for="edit-description">Description</label>
        </div>
      </div>
      <div class="input-field col s12">
        <select>
          <option value="" disabled selected>Choose your option</option>
          <option value="Backlog">Backlog</option>
          <option value="Product">Product</option>
          <option value="Development">Development</option>
          <option value="Done">Done</option>
        </select>
        <label>Materialize Select</label>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <div id="add-task-page" class="add-container">
            <div class="card bg-light mb-5" style="max-width: 18rem;">
                <div class="card-header">
                  Add New Task To Your Kanban Board
                </div>
                    <div class="card-body">

                    <form @submit.prevent="addTask">

                        <div class="form-group">
                          <label >Title</label>
                          <input placeholder="makan nasi" type="text" class="form-control" >
                        </div>

                        <div class="form-group">
                            <label for="sel1"> Category (select one):</label>
                            <select class="form-control" >
                              <option >--select category--</option>
                              <option value="backlog">backlog</option>
                              <option value="todo">todo</option>
                              <option value="doing">doing</option>
                              <option value="done">done</option>
                            </select>
                        </div>

                        <button  type="submit" class="btn btn-primary container-fluid mb-3">Add</button>

                        <button  type="submit" class="btn  btn-danger container-fluid">cancel</button>
                        
                      </form>   
                </div>
            </div>
  </div>
</template>

<script>
export default {
    name : "AddTask"
}
</script>

<style>

</style>
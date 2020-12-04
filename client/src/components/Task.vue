<template>
  <div class="card card-kanban">
    <div class="card-body">
      <div class="card-options">
        <button class="btn-options" type="button" aria-haspopup="true" aria-expanded="false">
          <i class="material-icons">edit</i>
          <i class="material-icons">delete</i>
        </button>
        <form class="modal fade" id="task-edit-modal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">New Task</h5>
                <button type="button" class="close btn btn-round" data-dismiss="modal" aria-label="Close">
                  <i class="material-icons">close</i>
                </button>
              </div>
              <!--end of modal head-->
              <div class="modal-body">
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="task-add-details" role="tabpanel">
                    <div class="form-group row align-items-center">
                      <label class="col-3">Name</label>
                      <input class="form-control col" type="text" placeholder="Task name" name="task-name" />
                    </div>
                  </div>
                </div>
              </div>
              <!--end of modal body-->
              <div class="modal-footer">
                <button role="button" class="btn btn-primary" type="submit">
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-title text-wrap">
        <a href="#" data-toggle="modal" data-target="#task-modal"><h6>{{task.title}}</h6></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
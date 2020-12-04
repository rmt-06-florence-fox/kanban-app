<template>
  <section id="kanban-page">
    <div class="layout layout-nav-top">
      <div class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <a class="navbar-brand" href="#">
          <img alt="Pipeline" src="../assets/img/logo.svg" />
        </a>
        
        <div class="collapse navbar-collapse justify-content-between" id="navbar-collapse">
          <ul class="navbar-nav">

            <li class="nav-item">

              <a class="nav-link" href="#">DanBam</a>

            </li>

          </ul>
          <div class="d-lg-flex align-items-center">
            <div class="d-none d-lg-block">
              <div class="dropdown">
                <button class="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
                  <i class="material-icons">exit_to_app</i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="#" class="dropdown-item">Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-container">
        <div class="breadcrumb-bar navbar bg-white sticky-top">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Kanban Board</a>
              </li>
            </ol>
          </nav>

        </div>

        <div class="container-kanban">
          
          <div class="kanban-board container-fluid mt-lg-3">
            <!-- Category -->
            <div v-for="category in categories" :key="category.id" class="kanban-col">
              <div class="card-list">
                <div class="card-list-header">
                  <h6>{{category.name}}</h6>
                </div>
                <!-- Tasks -->
                <div class="card-list-body">
                  <!-- Title -->
                  <div v-for="task in tasks" :key="task.id" class="card card-kanban">
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
                </div>
                <div class="card-list-footer">
                  <button class="btn btn-link btn-sm text-small" data-toggle="modal" data-target="#task-add-modal">Add task</button>
                </div>
                <form class="modal fade" id="task-add-modal" tabindex="-1" aria-hidden="true">
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
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'KanbanPage',
  data() {
    return {
      tasks: [],
      categories: []
    }
  },
  methods: {
    fetchTasks() {
      axios({
        methods: 'GET',
        url: 'http://localhost:3000/tasks'
      })
      .then((result) => {
        console.log(result.data);
      }).catch((err) => {
        console.log(err);
      });
    },
    fetchCategory() {
      axios({
        methods: 'GET',
        url: 'http://localhost:3000/categories'
      })
      .then((result) => {
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  created() {
    this.fetchTasks()
    this.fetchCategory()
  }
}
</script>

<style>

</style>
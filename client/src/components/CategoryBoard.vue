<template>
  <div class="col-md-3 col-12">
    <!-- Modal -->
    <div
      class="modal fade pr-0"
      id="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">Add Task</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- ADD FORM -->
            <AddForm @addtask="addtask"></AddForm>
          </div>
        </div>
      </div>
    </div>
    <div class="card rounded-top sticky-top fixed pr-0" id="category-title">
      <div class="card-header p-2 d-flex flex-row justify-content-between">
        <h5 class="pl-2 m-0 d-flex flex-column">{{ category }}</h5>
        <a href="#" class="add" data-toggle="modal" data-target="#modal">
          <i class="fas fa-plus"></i>
        </a>
      </div>
    </div>
    <div id="tasklist" class="card rounded-0 top">
      <div>
        <task-card
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        ></task-card>
        <!-- Looping TAsk di Sini -->
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "./TaskCard";
import AddForm from "./AddForm";
export default {
  name: "CategoryBoard",
  props: ["tasks", "category"],
  data() {
    return {};
  },
  components: {
    TaskCard,
    AddForm,
  },
  methods: {
    addtask(newTask) {
      this.$emit("addtask", newTask);
    },
  },
};
</script>

<style>
#category-title {
  top: 55px;
  z-index: 5;
}
.add {
  color: inherit;
  margin-right: 20px;
}

#tasklist {
  top: 55px;
  max-height: 150vh;
  overflow: auto;
}
</style>
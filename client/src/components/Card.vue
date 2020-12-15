<template>
    <section>
      <div class="container main">
        <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#exampleModal3" data-whatever="@mdo" style="margin-bottom: 2%"><i class="fa fa-credit-card" aria-hidden="true"></i> Add New Category</button>
        <div class="row" style="overflow: scroll; width: 127vh; height: 100vh;">
          <div class="col" style="margin-right: -1%" v-for="(task, j) in tasks.cat" :key="j">
            <div class="card border-secondary" style="max-width: 15rem;">
              <div class="card-header" style="background-color: #D5FDFF; color: black;">
                <p style="display: flex;">
                  {{task.id}}. {{task.categoryName}} 
                  <button type="button" class="btn btn-outline btn-sm" v-if="task.id > 4"><i @click="deleteCategory({id: task.id})" class="fa fa-trash-o" aria-hidden="true" style="color: red"> delete</i></button>
                </p>
              </div> 
              <div class="card-body" id="todo-list" style="height: 50vh; overflow-y: auto; padding: 8px;">
                <div v-for="(task2, i) in tasks.dataTask" :key="i">
                  <div class="btn-group" style="margin-bottom: 5%" v-if="task.id == task2.CategoryId">
                    <button type="button" class="btn btn-outline-info" style="width: 20vh;">{{task2.title}}
                      <p><small>by {{task2.User.name}}</small></p>
                    </button>
                    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button> 
                    <div class="dropdown-menu" style="text-align: center;">
                      <button type="button" class="btn btn-outline-primary" @click="undoTask({CategoryId: (j+1) - 1, id: task2.id})" v-if="task.id !== 1"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-outline-warning" data-target="#exampleModal2" data-toggle="modal" @click="idEdit({id: task2.id, title: task2.title})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-outline-danger" @click="deleteTask({id: task2.id, title: task2.title})"><i class="fa fa-trash-o" aria-hidden="true" ></i></button>
                      <button type="button" class="btn btn-outline-success" @click="nextTask({CategoryId: (j+1) + 1, id: task2.id})" v-if="task.id < tasks.cat.length"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer" style="text-align: center">
                <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style="margin-bottom: 2%" @click="idCat({id: task.id})"><i class="fa fa-plus-square" aria-hidden="true"></i> New Task</button>
              </div> 
            </div>
          </div><br>
          <AddFormCategory
            @addCategory = "addCategory"
          ></AddFormCategory>
          <FormTask
            @addTask = 'addTask'
          ></FormTask>
          <FormEditTask
            @editTask = 'editTask'
            :taskToFormEdit = 'taskToFormEdit'
          ></FormEditTask>
      </div>
    </section>
</template>

<script>
import AddFormCategory from './AddFormCategory'
import FormTask from './FormTask'
import FormEditTask from './FormEditTask'

export default {
  name: "MainPage",
  props: ["tasks"],
  data() {
    return {
      title: "",
      taskEditId: "",
      taskCat: "",
      taskToFormEdit: []
    }
  },
  components: {
      AddFormCategory,
      FormTask,
      FormEditTask
  },
  methods: {
    idCat(data) {
      this.taskCat = data.id
    },
    addTask(payload) {
      const data = {
          title: payload.title,
          CategoryId: this.taskCat
        }
      this.$emit("addTask", data)
    },
    addCategory(payload) {
      this.$emit("addCategory", payload)
    },
    deleteTask(data) {
      this.$emit("deleteTask", data)
    },
    nextTask(id) {
      this.$emit("nextTask", id)
    },
    undoTask(id) {
      this.$emit("nextTask", id)
    },
    idEdit(data) {
      this.taskEditId = data.id
      this.taskToFormEdit = data.title
    },
    editTask(payload) {
      const data = {
        id: this.taskEditId, 
        updateTitle: payload.updateTitle
      }
      this.$emit("editTask", data)
      $('#exampleModal2').modal('hide');
      this.title = ""
    },
    deleteCategory (data) {
      this.$emit('deleteCategory', data)
    }
  },
}
</script>

<style>

</style>
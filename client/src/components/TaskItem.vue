<template>
  <div class="card mb-3" :class="category.color">
    <div class="card-header">Assigned To : {{task.assignedto}}</div>
    <div class="card-body">
      <h5 class="card-title">{{task.title}}</h5>
      <p class="card-text">
        {{task.description}}
      </p>
      <p>Point: {{task.point}}</p>
      <p>Created By: {{task.createdBy}}</p>
      <button
      class="btn"
      :class="category.color"
      v-if="category.label != 'Backlog'"
      @click="moveLeft(task.id, task.status)"
      >
      <i class="fas fa-chevron-left"></i>
      </button>

      <button
      class="btn"
      :class="category.color"
      @click="edit(task.id)"
      >
      <i class="far fa-edit"></i>
      </button>
      
      <button
      class="btn"
      :class="category.color"
      @click="del(task.id)"
      >
      <i class="far fa-trash-alt"></i>
      </button>

      <button
      class="btn"
      :class="category.color"
      v-if="category.label != 'Done'"
      @click="moveRight(task.id, task.status)"
      >
      <i class="fas fa-chevron-right"></i>
      </button>     
    </div>
  </div>
      
</template>

<script>
export default {
  name: "TaskItem",
  props: ["category", "task"],
  methods: {
    edit(id){
      this.$emit("getEdit", id)
    },
    del(id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#16697a',
        cancelButtonColor: '#af3838',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit("deleteTask", id)
        }
      })
    },
    moveLeft(id, status){
      this.$emit("moveLeft", id, status, 'prev')
    },
    moveRight(id, status){
      this.$emit("moveRight", id, status, 'next')
    }
  },
}
</script>
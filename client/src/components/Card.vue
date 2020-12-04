<template>
    <!-- <div class="boards-container-board-card" >{{task.title}} <br> {{task.description}} <br></div> -->
    <div class="card" style="width: 100%; justify-content: centre;">
        <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ task.progress }}</h6>
            <p class="card-text">{{ shorten(task.description) }}</p>
            <a @click.prevent='edit' class="card-link" style="cursor:pointer;">edit</a>
            <a @click.prevent='destroy' class="card-link" style="cursor:pointer; color:red;">delete</a>
        </div>
    </div>
    <!-- <ol class="kanban To-do">
    <div class="kanban__title">
   <li class="dd-item">
      <h3 class="title dd-handle" >{{task.title}}<i class=" material-icons ">filter_none</i></h3>
        <div class="text" contenteditable="true">{{ task.description }} </div>
        <div><i class="material-icons mt-3" id="color">palette</i><i class="material-icons">edit</i><i class="material-icons">insert_link</i><i class="material-icons">attach_file</i></div>
    </li>
  </ol> -->
</template>

<script>
export default {
    name: "Card",
    props: ["task"],
    methods: {
        edit () {
          const payload = {
            id: this.task.id,
            title: this.task.title,
            progress: this.task.progress,
            description: this.task.description,
            pageName: 'edit'
          }
        //   console.log(id)
        //   console.log(payload)
          this.$emit('goToEdit', payload)
        },
        destroy () {
          const id = this.task.id
        //   console.log(id)
          this.$emit('destroy' , id)
        },
        shorten (taskDescription) {
          if(taskDescription.length > 30){
            let desc = taskDescription.substr(0,30)
            let result = desc + "..."
            return result
          }
          else {
            return taskDescription
          }
        }
    }
}
</script>

<style scoped>

</style>
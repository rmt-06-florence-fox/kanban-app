<template>
    <div>
      <div class="card mt-3">
        <div  class="card-header">

            <div class="edit-task">
              <input  placeholder="task title" type="text" ><br>
              <button class="btn btn-primary"> edit</button>
              <button @click="cancelEdit" class="btn btn-danger"> cancel</button>
            </div>

      </div>
    </div>
</template>

<script>
export default {
    name : "EditTask",
    promps : ['editedTaskId'],
    methods : {
        cancelEdit(){
            console.log('cancel')
            this.$emit('cancelEdit',0)
        }
    }
}
</script>

<style>

</style>
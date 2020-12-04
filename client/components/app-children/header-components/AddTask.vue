<template>
  <div>
    <button class="mt-3 btn-primary" type="button" data-toggle="modal" data-target="#addform"
        style="margin-left:2rem;">add task</button>

    <div class="modal" id="addform">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">add new task</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent = "askToAdd">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="title" placeholder="task's title goes here">
                        </div>
                        <button type="submit" class="btn-primary"> Add </button>
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name : "AddTaskForm",
    data (){
        return {
            title : "",
        }
    },
    methods : {
        askToAdd(){
            this.$emit('listenAdd', this.title)
        },
    },
}
</script>

<style>

</style>
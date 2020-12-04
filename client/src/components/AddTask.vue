<template>
    <div class="AddTask">
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Task</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="addForm" @submit.prevent="addTask">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input v-model="title" id="title" class="form-control" type="text" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        addTask() {
            const payload = {
                title: this.title
            }
            this.$emit("addTask", payload)
        }
    },
}
</script>

<style>

</style>
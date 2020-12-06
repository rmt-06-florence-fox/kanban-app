<template>
    <div>
        <div
        class="list-group-item"
        >              
            <!-- //capitalize  -->
            <h6>
                {{ task.title }}
            </h6>
            <!-- //button -->
            <div class="options">
                <div class="button-left">
                    <button class="btn btn-outline-info" type="submit" @click="updateForm" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    <button class="btn btn-outline-danger" @click="deleteTask" ><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>

                <div class="arrow">
                    <button @click="patchLeft" class="btn btn-outline-success" v-if="task.category === 'done' || task.category === 'todo' || task.category === 'doing'" ><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button @click="patchRight" class="btn btn-outline-success" v-if="task.category === 'backlog' || task.category === 'todo' || task.category === 'doing'" ><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>

            </div>
            

        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    data() {
        return {
            taskId: "",
            patchDataLeft: "",
            patchDataRight: ""
        }
    },
     methods: {
        updateForm() {
            console.log(this.task);
            this.$emit('changePage', 'update')
            this.$emit('editTask', this.task)
        },
        deleteTask() {
            this.$emit('deleteTask', this.taskId)
        },
        patchLeft() {
            this.$emit('patchLeft', this.patchDataLeft, this.taskId)
        },
        patchRight() {
            this.$emit('patchRight', this.patchDataRight, this.taskId)
        }
    },
    props: ['task'],
    created() {
        this.taskId = this.task.id
        if (this.task.category === 'backlog') {
            this.patchDataRight = 'todo'
        } else if (this.task.category === 'todo') {
            this.patchDataRight = 'doing'
        } else {
            this.patchDataRight = 'done'
        }

        if (this.task.category === 'done') {
            this.patchDataLeft = 'doing'
        } else if (this.task.category === 'doing') {
            this.patchDataLeft = 'todo'
        } else {
            this.patchDataLeft = 'backlog'
        }        
    }
}
</script>

<style>
.options {
    display: flex;
    justify-content: space-between;
    
}
</style>
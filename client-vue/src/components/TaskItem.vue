<template>
    <div>
        <div class="list-group-item mt-1 mb-1">
                {{task.name}}
            <div class="d-flex flex-row-reverse mt-5">
                <b-button variant="danger" @click.prevent="tes(task.id)">Delete</b-button><!--delete-->
                <b-button variant="success" v-b-modal.modal-center2 @click.prevent="editTask(task.id, task.name)">Edit</b-button>
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: 'TaskItem',
    props: ['task'],
    data(){
        return {
            datas: []
        }
    },
    methods: {
        tes(id){
            this.$emit("deleteTaskDong", id)
        },
        editTask(editId,editName){
            this.$emit("lemparDataEdit", editId, editName)
        }
    }
}
</script>

<style>

</style>
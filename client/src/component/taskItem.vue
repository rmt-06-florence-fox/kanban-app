<template>
    <div class="card mt-3 shadow">
        <div class="card-body">
            <h5 class="card-title" style="color: black">{{data.title}}</h5>
            <p class="card-text" style="color: black">{{data.description}}</p>
            <button type="button" class="btn btn-primary" @click.prevent="editData(data)">edit</button>
            <button type="button" class="btn btn-danger" @click.prevent="deleteData(data.id)">delete</button>  
        </div>
        <formEdit v-if="pageEdit === data.id" :editTitle="editTitle" :data="data" :pageEdit="pageEdit" :dataForEdit="dataForEdit" @editTask="editTask"></formEdit>
    </div>
</template>

<script>
    import formEdit from './formEdit'
export default {
    name: 'tasksItem',
    data() {
        return {
            editTitle: '',
            pageEdit: '',
            dataForEdit: {}
        }
    },
    components: {
        formEdit
    },
    dataForEdit: {},
    props: ['data'],
    methods: {
        deleteData(id) {
            this.$emit('deleteId', id)
        },
        editData(data) {
            this.dataForEdit = data
            this.editTitle = data.title
            this.pageEdit = data.id
        },
        editTask(editedData, id) {
            console.log(editedData, id, 'di taskitem');
            this.$emit('editTask', editedData, id)
        }
    }
}
</script>

<style>

</style>
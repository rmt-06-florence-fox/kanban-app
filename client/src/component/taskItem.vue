<template>
    <div class="card mt-3 shadow">
        <div class="card-body">
            <h5 class="card-title" style="color: black">{{data.title}}</h5>
            <p class="card-text" style="color: black">{{data.description}}</p>
            <button type="button" class="btn btn-primary" @click.prevent="editData(data.id)">edit</button>
            <button type="button" class="btn btn-danger" @click.prevent="deleteData(data.id)">delete</button>  
        </div>
        <formEdit v-if="pageEdit === data.id" @data="data"></formEdit>
    </div>
</template>

<script>
    import formEdit from './formEdit'
export default {
    name: 'tasksItem',
    data() {
        return {
            pageEdit: ''
        }
    },
    components: {
        formEdit
    },
    props: ['data'],
    methods: {
        deleteData(id) {
            this.$emit('deleteId', id)
        },
        editData(id) {
            this.pageEdit = id
        }
    }
}
</script>

<style>

</style>
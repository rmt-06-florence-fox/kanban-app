<template>
    <div class="card shadow">
        <div class="card-body">
            <h4 class="card-title">{{ dataList.title }}</h4>
            <p class="card-text text-right"><b>User id: {{ dataList.UserId }}</b></p>
        </div>
        <div class="card-footer container-button-task">
            <button type="button" class="btn btn-secondary" @click.prevent="editTask(dataList.id)">edit</button>
            <button type="button" class="btn btn-secondary" @click.prevent="deleteTask(dataList.id)">delete</button>
            <button type="button" class="btn btn-secondary" @click.prevent="patchTask(dataList.id)" >patch</button>
        </div>
        <!-- Moving Category -->
        <div class="container-button-task" v-if="pagePatch">
            <form @submit.prevent="updateCategory(dataList.id)">
                <select name="" id="" v-model="patchCategory">
                <option selected disabled>--- Move Task Category---</option>
                <option v-if="dataList.category !== 'Backlog'" value="Backlog">Move To Backlog </option>
                <option v-if="dataList.category !== 'Todo'" value="Todo"> Move To Todo</option>
                <option v-if="dataList.category !== 'Doing'" value="Doing"> Move To Doing</option>
                <option v-if="dataList.category !== 'Done'" value="Done"> Move To Done</option>
                </select>
                <button type="submit" class="btn btn-info"><label>Move</label></button>
                <button type="button" class="btn btn-info" @click="cancelPatch()"><label>Cancel</label></button>
            </form>
        </div>
        <!-- Form Edit -->
        <div class="container-button-task" v-if="dataEdit.id === dataList.id && pageEdit">
            <form action="" @submit.prevent='updateTask(dataEdit.id)'>
                <textarea class ="mt-4" name="edit-backlog" v-model="edit"></textarea>
                <button type="submit" class="btn btn-info"><label>Edit Task</label></button>
                <button type="button" class="btn btn-info" @click="cancelEdit()"><label>Cancel</label></button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskCard",
    data() {
        return {
            edit: '',
            pageEdit: false,
            pagePatch: false,
            patchCategory: ''
        }
    },
    props: ['dataList', 'dataEdit'],
    methods:{
        editTask(id) {
            console.log(id);
            this.$emit('idEdit', id)
            this.edit = this.dataEdit.title
            this.pageEdit = true
            this.pagePatch = true
        },
        deleteTask(id) {
            console.log(id);
            this.$emit('idDelete', id)
        },
        patchTask(id) {
            console.log(id);
            this.$emit('idPatch', id)
        },
        updateTask(id) {
        const newTask = {
            title: this.edit,
            category: this.dataEdit.category
            }
            console.log(newTask);
            this.$emit('updateTask', newTask, id)
            this.dataEdit = {}
            this.edit = ''
            this.pageEdit = false
        },
        cancelEdit() {
            this.pageEdit = false
        },
        cancelPatch() {
            this.pagePatch = false
        },
        updateCategory(id) {
            console.log(this.patchCategory, id);
            const newTask = {category: this.patchCategory }
            this.$emit('updateCategory', newTask, id)
            this.pagePatch = false
        }
    }
}
</script>

<style>

</style>
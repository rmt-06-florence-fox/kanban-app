<template>
    <div class="card shadow">
        <div class="card-body">
            <h4 class="card-title">{{ dataList.title }}</h4>
            <p class="card-text text-right"><i>Author: {{ dataList.User.name }} </i></p>
        </div>
        <div class="card-footer container-button-task">
            <button type="button" class="btn far fa-edit" @click.prevent="editTask(dataList.id)"></button>
            <button type="button" class="btn far fa-trash-alt" @click.prevent="deleteTask(dataList.id)"></button>
            <button type="button" class="btn fas fa-arrows-alt" @click.prevent="patchTask(dataList.id)" ></button>
        </div>
        <!-- Moving Category -->
        <div class="container" v-if="pagePatch">
            <form @submit.prevent="updateCategory(dataList.id)">
                <select name="" id="" v-model="patchCategory">
                <option selected disabled>--- Move Task Category---</option>
                <option v-if="dataList.category !== 'Backlog'" value="Backlog">Move To Backlog </option>
                <option v-if="dataList.category !== 'Todo'" value="Todo"> Move To Todo</option>
                <option v-if="dataList.category !== 'Doing'" value="Doing"> Move To Doing</option>
                <option v-if="dataList.category !== 'Done'" value="Done"> Move To Done</option>
                </select>
                <button type="submit" class="btn btn-add-task fas fa-check"><label class="ml-2">Move</label></button>
                <button type="button" class="btn btn-cancel fas fa-times" @click="cancelButton()"><label class="ml-2">Cancel</label></button>
            </form>
        </div>
        <!-- Form Edit -->
        <div class="form-group" v-if="dataEdit.id === dataList.id && pageEdit">
            <form action="" @submit.prevent='updateTask(dataEdit.id)'>
                <textarea class ="edit-task" name="edit-backlog" v-model="editTask"></textarea>
                <button type="submit" class="btn btn-add-task fas fa-check"><label class="ml-2">Edit Task</label></button>
                <button type="button" class="btn btn-cancel fas fa-times" @click="cancelButton()"><label class="ml-2">Cancel</label></button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskCard",
    data() {
        return {
            editTask: '',
            pageEdit: false,
            pagePatch: false,
            patchCategory: ''
        }
    },
    props: ['dataList', 'dataEdit'],
    methods:{
        editTask(id){
            console.log(id);
            this.$emit('idEdit', id)
            this.editTask = this.dataEdit.title
            this.pageEdit = true
            this.pagePatch = true
        },
        deleteTask(id){
            console.log(id);
            this.$emit('idDelete', id)
        },
        patchTask(id){
            console.log(id);
            this.$emit('idPatch', id)
        },
        updateTask(id){
        const newTask = {
            title: this.editTask,
            category: this.dataEdit.category
        }
            console.log(newTask);
            this.$emit('updateTask', newTask, id)
            this.dataEdit = {}
            this.editTask = ''
            this.pageEdit = false
        },
        cancelButton(){
            this.pageEdit = false
        },
        updateCategory(id){
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
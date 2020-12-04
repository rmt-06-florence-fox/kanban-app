<template>
   <section class="container"> 
        <div class="row mt-4">
            <div class="col-md-3 col-sm-6" v-for="category in categories" :key="category.id">
                <div class="p-3 bg-primary rounded">{{ category.name }}</div>
                <div class="card" v-for="data in filteredTask(category.name)" :key="data.id">
                    <tasklist 
                        :dataList="data"
                        :dataEdit='dataEdit'
                        @idEdit='editData'
                        @idDelete='deleteData'
                        @idPatch='patchData'
                        @updateTask='updateTask'
                        @updateCategory='updateCategory'>
                    </tasklist>  
                </div>
                <div class="rounded">
                    <button type="button" class="btn btn-add" @click="showAdd(category.name)">Add Task</button>
                </div>

                <!-- Form Add -->
                <div class="form-group" v-if="addPage === category.name">
                    <form @submit.prevent="addTask(category.name)">
                        <textarea v-model="createTask" name="add-backlog"></textarea>
                        <button type="submit" class="btn btn-add-task"><label>Add Task</label></button>
                        <button type="button" class="btn btn-cancel"><label>Cancel</label></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TaskCard from "./TaskCard"

export default {
    name: "TaskList",
    data() {
        return {
            addPage: "",
            createTask: ""
        }
    },
    props: ['categories', 'dataTasks', 'dataEdit'],
    components: { TaskCard },
    methods:{
        filteredTask(category) {
            return this.dataTasks.filter(e => e.category === category)
        },
        editTask(id){
            this.$emit('idEdit', id)
        },
        deleteTask(id){
            this.$emit('idDelete', id)
        },
        patchTask(id){
            this.$emit('idPatch', id)
        },
        updateTask(newData, id){
            this.$emit('updateTask', newData, id)
        },
        updateCategory(newData, id){
            this.$emit('updateCategory', newData, id)
        },
        showAdd(category){
            console.log(category);
            this.pageAdd = category
        },
        addTask(category){
            const newTask = {
            title: this.createTask,
            category: category
            }
            this.$emit('createTask', newTask)
            this.createTask = ''
        }
    }
}
</script>

<style>

</style>
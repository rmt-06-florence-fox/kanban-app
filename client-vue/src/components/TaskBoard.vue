<template>
<div class="" style="margin-top: 100px;">
    <div class="d-flex flex-nowrap">
        <div class="col-2" style="min-width: 300px;" v-for="(category, index) in categories" :key="index">
            <div class="p-2 alert alert-secondary">
                <div class="d-flex justify-content-between">
                    <h3>{{category.name}}</h3>
                    <a href="#" @click.prevent="deleteCategory(category.id)" style="color: red;"><b-icon icon="x-circle" font-scale="2"></b-icon></a>
                </div>
               
                <div class="list-group overflow-auto" style="max-height: 700px;">
                    <TaskItem v-for="(task, index) in category.Tasks" :key="index" :task="task" @deleteTaskDong="tes" @lemparDataEdit="dataEdit"></TaskItem>
                </div>
                <div class="p-2 mt-1 mb-1">
                    <b-button v-b-modal.modal-center @click="assignIdCategory(category.id,category.name)">Add<b-icon icon="plus"></b-icon></b-button>       
                </div>
            </div> 
        </div>
        
        <div class="col-2" style="min-width: 200px;">
            <div class="p-2 alert alert-secondary">
                <h3>Add Categories</h3>
                    <div>
                        <input type="text" v-model="newCategoryName">
                    </div>
                    <div class="mt-2 mb-2">
                     <b-button @click="addNewCategory">Add<b-icon icon="plus"></b-icon></b-button> 
                    </div>
            </div>
        </div>
    </div>

    <b-modal
        id="modal-center"
        centered
        :title="categoryName"
        @hidden="resetModal"
        @ok="addNewTask"
        >
        <label for="">Task Name</label><br>
        <input type="text" v-model="newTaskName">

    </b-modal>

     <b-modal
        id="modal-center2"
        centered
        :title="categoryName"
        @hidden="resetModal2"
        @ok="editTask"
        >
        <label for="">Task Name</label>
        <input type="text" v-model="editName"><br>
        <label for="">Category</label><br>
        <select v-model="editCategoryId">
            <option v-for="(item, index) in listCategories" :key="index" :value="item.id">{{item.name}}</option>
        </select>
    </b-modal>
</div>

</template>

<script>
    import TaskItem from './TaskItem'
    export default {
    name: 'TaskBoard',
    props: ['categories', 'listCategories'],
    data(){
        return{
            idCategory: null,
            newTaskName: '',
            categoryName: null,
            newCategoryName: '',
            editName: '',
            editId: '',
            editCategoryId: ''
        }
    },
    components:{
        TaskItem
    },
    methods: {
        tes(id){
            console.log('test dari TaskBoard', id)
            this.$emit("deleteTaskDong", id)
        },
        assignIdCategory(id, name){
            this.categoryName = name 
            this.idCategory = id
        },
        addNewTask(){
            this.$emit("addnewTask", this.idCategory, this.newTaskName)
        },
        resetModal() {
            this.newTaskName = ''
        },
        resetModal2(){
            this.editName= ''
            this.editId= ''
            this.editCategoryId= ''
        },
        addNewCategory(){
            this.$emit("addnewCategory", this.newCategoryName)
            this.newCategoryName = ''
        },
        deleteCategory(id){
            this.$emit("deleteCategory", id)
        },
        editTask(){
            this.$emit("editTask", this.editId, this.editName, this.editCategoryId)
        },
        dataEdit(id, name){
            this.editName = name
            this.editId = id
        }
    }
}
</script>

<style>

</style>
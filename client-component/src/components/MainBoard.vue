<template>
    <div class="board justify-content-center" >
        <h3 class="text-decoration-underline"> {{category.name}}</h3>
        <EditPage :requestTask="orderTaskId" v-bind:style="{display: isDisplay}" @displayNone="displayFormEdit" @emitInEdit="valueEdit"> </EditPage>
        
        
        <div class="dropzone justify-content-center">
            <div class="card" draggable="true" v-for="(categoryTask, index) in tasks" :key="index">
                <div class="content">{{categoryTask.title}}</div>

                <p class="text-muted m-0"><small>{{category.createdAt.substr(0, 10)}} </small></p>   
                <p class="text-muted m-0"><small>{{}}</small></p>
                <div class="container">
                    <div class="deleteTask">
                        <a href="#" class="text-decoration-none float-right pr-3" >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="moveCategory" >

                        <a href="#" class="text-decoration-none float-right pr-3 pl-3" @click="moveCategory(category.name)" data-toggle="modal" data-target="#modalMove">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrows-move" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="editTask float-rigth pr-3"> 
                        <a href="#" class="" @click="emitToMainList(categoryTask.id)">
                            <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg> 
                        </a> 
                    </div>

                </div>
            
                <MoveCategory id="modalMove" :categoryId="category.id" v-bind:style="isDisplayModal"> </MoveCategory>   
            </div>
        </div>
        
         <div class="addTask p-2 float-right">
            <a href="#" class="nav-item text-decoration-none font-weight-bold pr-3" @click="addFormTask(category.id)">Add Task
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </a>    
            <AddTask :requestTask="orderTaskId" :categories="category.id" v-bind:style="{display: isDisplayAdd}" @submitAdd="valueAdd" @cancelAddForm="cancelFormAdd" > </AddTask>
        </div>
    </div>
</template>
    
<script>
import EditPage from './EditPage'
import AddTask from './AddTask'
import MoveCategory from './MoveCategory' 

export default {
    name: "MainBoard",
    props: ["category", "orderTaskId", "tasks"],
    data(){
        return {
            id: 0,
            isDisplay: 'none',
            isDisplayAdd: 'none',
            isDisplayModal: 'none',
            editValue: [],
            categoryId: 0,

        }
    },
    components: {
        EditPage,
        AddTask,
        MoveCategory
    },
    methods:{
        emitToMainList(key){
            console.log(key)
            this.isDisplay = "block"
            this.id = key
            this.$emit("emitMainListParent", this.id)
        },
        displayFormEdit(display){
            this.isDisplay = display
        },
        valueEdit(value){
            this.isDisplay = "none"
            this.editValue = value
            console.log(value, "<--- dari main board")
            this.$emit("emitEditValue", value)
        },
        addFormTask(id){
            this.categoryId = id
            this.isDisplayAdd = "block"
        },
        valueAdd(display, title){
            this.isDisplayAdd= display

            this.$emit("emitAddValue", title, this.categoryId) 

        },
        cancelFormAdd(display){
            this.isDisplayAdd = display
        },
        moveCategory(category){
            console.log(category)
        }
    }

}
</script>

<style>

</style> 
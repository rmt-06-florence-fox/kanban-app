<template>
    <div class="board justify-content-center" >
        <h3 class="text-decoration-underline"> {{category.name}}</h3>
        <EditPage :requestTask="orderTaskId" v-bind:style="{display: isDisplay}" @displayNone="displayFormEdit" @emitInEdit="valueEdit"> </EditPage>
        <AddTask :requestTask="orderTaskId" v-bind:style="{display: isDisplayAdd}" @submitAdd="valueAdd" @cancelAddForm="cancelFormAdd" > </AddTask>
        <div class="addTask p-2 float-right">
            <a href="#" class="nav-item text-decoration-none font-weight-bold pr-3" @click="addFormTask">Add Task
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </a>    
        </div>
        <div class="dropzone justify-content-center">
        <div class="card" draggable="true" v-for="(categoryTask, index) in tasks" :key="index">
            <div class="content">{{categoryTask.title}}</div>
             <p class="text-muted m-0"><small>{{category.createdAt.substr(0, 10)}} </small></p>   
            <div class="container">
                <div class="editTask float-rigth"> 
                    <a href="#" class="" @click="emitToMainList(categoryTask.id)">
                        <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg> 
                    </a> 
                </div>
                <div class="deleteTask">
                    <a href="#" class="text-decoration-none float-right pr-3" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </a>

                </div>

            </div>

            
        </div>
        </div>
         
    </div>
</template>
    
<script>
import EditPage from './EditPage'
import AddTask from './AddTask'

export default {
    name: "MainBoard",
    props: ["category", "orderTaskId", "tasks"],
    data(){
        return {
            id: 0,
            isDisplay: 'none',
            isDisplayAdd: 'none',
            editValue: []
        }
    },
    components: {
        EditPage,
        AddTask
    },
    methods:{
        emitToMainList(key){
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
        addFormTask(){
            this.isDisplayAdd = "block"
        },
        valueAdd(){
            
        },
        cancelFormAdd(display){
            this.isDisplayAdd = display
        }
    }

}
</script>

<style>

</style> 
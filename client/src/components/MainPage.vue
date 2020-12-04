<template>
    <div class="container mt-2 mb-2">
        <div class="row">
            <KanbanBoard
                :kanbanBoard="kanbanBoard"
                @add="add"
                @removeTask="removeTask"
                @editTask="editTask"
            >
            </KanbanBoard>
        </div>   
    </div>  
</template>

<script>
import KanbanBoard from "./KanbanBoard";
// import AddTaskForm from "./AddTaskForm";
// import EditTaskForm from "./EditTaskForm";
import Swal from "sweetalert2";

export default {
    name: "Main",
    props: ['kanbanBoard'],
    data(){
        return {

        }
    }, 
    methods: {
        showAddForm(id){
            if(id === this.showingAddForm){
                this.showingAddForm = null;
            } else if (this.showingEditForm != null){
                this.showingEditForm = null;
                this.showingAddForm = id
            } else {
                this.showingAddForm = id
            }
        },
        showEditForm(id){
            if(id === this.showingEditForm){
                this.showingEditForm = null;
            }else if (this.showingAddForm != null){
                this.showingAddForm = null;
                this.showingEditForm = id;
            } else {
                this.showingEditForm = id;
            }
        },
        add(payload){
            console.log(payload, 'ke main gak sih?');
            this.$emit("addTask", payload);
        },
        editTask(payload){
            // console.log(payload);
            this.showEditForm(null);
            this.$emit("editTask", payload);
        },
        removeTask(id){
            this.$emit("removeTask", id);
        }
    },
    components:{
        KanbanBoard,
    },
    created(){
        this.showingAddForm = null
        this.showingEditForm = null
    }
}
</script>

<style>

</style>
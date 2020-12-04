<template>
<div>
    <div class="card border-success mb-3 shadow " style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success "><button @click="editTask" style="border-radius: 15px; background-color: white;">&#x270E;</button> {{Task.name}}</div>
            <div class="card-body text-success">
                <h5 class="card-title"></h5>
                <p class="card-text">{{Task.description}}</p>
            </div>
        <div class="card-footer bg-transparent border-success">
            <ButtonBack @PleaseEditCategory="back"
             v-if="Category !== 'Back-Log'"
             :fetch="fetch"
             ></ButtonBack>
            <ButtonDone 
            @PleaseEditCategory="done"
            v-if="Category !== 'Done'"
            :fetch="fetch"
            ></ButtonDone>
           <button @click="destroy" class="btn-delete" style="font-size: 15px; border-radius: 15px; border: none; outline: none;">x</button>
        </div>
    </div>
</div>
    
</template>

<script>
import ButtonBack from "./ButtonBack"
import ButtonDone from "./ButtonDone"
import axios from 'axios'


export default {
    name: "TaskCard",
    props: [ 'Task', 'Category','fetch' ],
    taskCategory: '',
    components: {
        ButtonBack,
        ButtonDone
    },
    methods: {
        back(){
            if(this.Task.category == 'To-Do'){
                this.taskCategory = 'Back-Log'
            }else if(this.Task.category == 'Doing'){
                this.taskCategory = 'To-Do'
            }else if(this.Task.category == 'Done'){
                this.taskCategory = "Doing"
            }
            

            this.$emit("PleaseEditCategory", this.taskCategory, this.Task.id)
        },
        done(){
            if(this.Task.category == 'Back-Log'){
                this.taskCategory = 'To-Do'
            }else if(this.Task.category == 'To-Do'){
                this.taskCategory = 'Doing'
            }else if(this.Task.category == 'Doing'){
                this.taskCategory = "Done"
            }
            

            this.$emit("PleaseEditCategory", this.taskCategory, this.Task.id)
        },
        destroy(){
            this.$emit("PleaseDeleteTask", this.Task.id)
        },
        editTask(){
            this.$emit("PleaseEditTask")
        }
        
    },
    created(){
        // this.dataCreator()
        this.fetch
    }
    
}
</script>

<style>

</style>
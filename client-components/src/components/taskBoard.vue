<template>
    <div >
        <h4  :class="categoryName.class" :style="categoryName.style">{{categoryName.name}}</h4>
        <div class="d-flex flex-column-reverse bd-highlight scrollbar scrollbar-primary " style="overflow-y: scroll; max-height: 450px; ">
        <draggable v-model="tasks" group="task" @start="drag=true" @end="drag=false">
                <taskItem
                    
                    @submitEdit = 'submitEdit'
                    @destroying = 'destroying'  
                    v-for="(task, index) in tasks" :key= "index"  :task = 'task' 
                    :categoryName= 'categoryName' :allCategories = 'allCategories'
                    >
                </taskItem>
        </draggable>
        </div>
            <p @click="addNewTask" class="text-center newTask" ><i class="fa fa-plus-square" aria-hidden="true"></i> New Task</p>
            
    </div>


</template>

<script>
import taskItem from './taskItem'
import draggable from 'vuedraggable'

export default {
    name: 'taskBoard',
    data(){
        return {
            title: "",
            category: "",
        }
    },
    components:{
        taskItem,
        draggable
    },
    props: ['categoryName', 'tasks', 'allCategories'],
    methods:{
        addNewTask(){
            swal("New Task:", {
                content: "input",
            })
            .then((value) => {
                 if(value){
                    this.title = value
                    this.category = this.categoryName.name
                    this.$emit('addNewTask', {
                        title : this.title,
                        category: this.category
                    }),
                    swal("New Task added"," ", "success")
                    this.title = ''
                    this.category = ''
                } else {
                    swal("Cancelled"," ", "warning")
                    this.title = ''
                    this.category = ''
                }
            });
            
        },
        destroying(id){
           this.$emit('destroying', id)
        },
        submitEdit(payload, id){
            this.$emit('submitEdit', payload, id)
        }
    }

}
</script>

<style>

</style>
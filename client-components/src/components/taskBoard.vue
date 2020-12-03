<template>
    <div >
        <h4  :class="categoryName.class" style="width: 310px;">{{categoryName.name}}</h4>
        <div class="d-flex flex-column-reverse bd-highlight scrollbar scrollbar-primary " style="overflow-y: scroll; max-height: 450px; ">
            <taskItem
                @destroying = 'destroying'  
                v-for="(task, index) in tasks" :key= "index"  :task = 'task' 
                :categoryName= 'categoryName' 
                >
            </taskItem>
        </div>
            <p @click="addNewTask" class="text-center newTask" ><i class="fa fa-plus-square" aria-hidden="true"></i> New Task</p>
            
    </div>


</template>

<script>
import taskItem from './taskItem'
export default {
    name: 'taskBoard',
    data(){
        return {
            title: "",
            category: ""
        }
    },
    components:{
        taskItem
    },
    props: ['categoryName', 'tasks'],
    methods:{
        addNewTask(){
            swal({
                text: 'New Task',
                content: "input",
                buttons: {
                    cancel: 'Cancel',
                    text: "Submit!",
                    closeModal: false,
                },
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


            })
            ;
            // this.$emit('addNewTask', true)
        },
        destroying(id){
           this.$emit('destroying', id)
        }
    }

}
</script>

<style>

</style>
<template>
    <div>
        <h4 :class="categoryName.class" style="width: 310px;">{{categoryName.name}}</h4>
        <div class="d-flex flex-column-reverse bd-highlight scrollbar scrollbar-primary " style="overflow-y: scroll; max-height: 300px; ">
            <taskItem></taskItem>
        </div>
            <p @click="addNewTask" class="text-center newTask" ><i class="fa fa-plus-square" aria-hidden="true"></i> New Task</p>
            
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
        </button> -->

        <!-- Modal -->
            <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div> -->

    </div>


</template>

<script>
import taskItem from './taskItem'
import addNew from './addNew'
export default {
    name: 'taskBoard',
    data(){
        return {
            title: "",
            category: ""
        }
    },
    components:{
        taskItem,
        addNew
    },
    props: ['categoryName'],
    methods:{
        addNewTask(){
            swal({
                text: 'New Task',
                content: "input",
                button: {
                    text: "submit!",
                    closeModal: false,
                },
            })
            .then((value) => {
            this.title = value
            this.category = this.categoryName.name
            this.$emit('addNewTask', {
                title : this.title,
                category: this.category
            }),
            swal("New Task added"," ", "success")
            this.title = ''
            this.category = ''


            });
            // this.$emit('addNewTask', true)
        }
    }

}
</script>

<style>

</style>
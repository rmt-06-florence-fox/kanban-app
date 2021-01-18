<template>
    <div v-if="categoryName.name == task.category"  class="card bg-light mb-3 shadow">
        <div v-if="!editForm" class="card-title" style="width : 310px" >
            <div class="text-right">
                <i @click= "editing" class="fa fa-pencil p-1 edit" aria-hidden="true"></i>
                <i @click= "destroying" class="fa fa-trash p-1 destroy" aria-hidden="true"></i>
            </div>
            <div style= " height: 80px ; overflow-y : scroll;">
                <h6 class="mt-1 ml-2" style="word-break: keep-all">
                    {{task.title}}
                </h6>
            </div>
            <hr>
            <p class="ml-2 text-muted" style="font-size: small;" >Owner : {{task.User.email}}</p>
            <p class="ml-2 text-muted" style="font-size: small;" >Created :{{task.createdAt.substr(0, 10)}}</p>
        </div>
        <div v-else class="card-title">
            <div class="text-right">
                <i @click= "submitEdit" class="fa fa-check mr-1 mt-1 text-success p-1 editSubmit" aria-hidden="true"></i>
                <i @click= "cancelEdit" class="fa fa-times p-1 mr-2 mt-1 text-danger cancel" aria-hidden="true"></i>
            </div>
            <input  style= "width : 260px; height : 50px" type="text" class="ml-2" 
                v-model= "title" 
            >
            <div class="ml-2 mt-2">
            <label for="categoryList">Status</label>
            <select id="categoryList" v-model="taskCategory">
                <option v-for="(category, index) in allCategories" :key="index" :selected ="category.name == taskCategory"  >{{category.name}}</option>
                <!-- <option v-if="" >{{category}}</option> -->
            </select>

            </div>
            <hr>
            <p class="ml-2 text-muted" style="font-size: small;" >Owner :{{task.User.email}} </p>

        </div>
    </div>
    

</template>

<script>
export default {
    name: "taskItem",
    props: ['categoryName', 'task', 'allCategories'],
    data(){
        return {
            editForm : false,
            title: '',
            taskCategory: this.categoryName.name
        }
    },
    methods:{
        destroying(){
            this.$emit('destroying', this.task.id)
        },
        editing(){
            this.title = this.task.title
            this.editForm = true
            console.log(this.category, '<<<<',this.allCategories[3].name)
        },
        cancelEdit(){
            this.editForm = false
        },
        submitEdit(){
            let id = this.task.id
            let payload = {
                title : this.title,
                category: this.taskCategory
            }
            // console.log(payload)
            this.$emit('submitEdit', payload, id)
            this.editForm = false
            this.taskCategory = this.categoryName.name


        }
    },
    // created(){
    //     console.log('created cuuuy')
    //     this.title = this.task.title
    // }
    
    

}
</script>

<style>
    .editSubmit:hover {
        background-color: rgb(127, 230, 187);
        cursor: pointer;
    }
    .cancel:hover {
        background-color: rgb(201, 182, 182);
        cursor: pointer;
    }
</style>
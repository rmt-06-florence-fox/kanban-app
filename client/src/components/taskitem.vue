<template>
<div>
    <div class="card anomali"  >
        <p> {{ task.title }} </p>
        <p> {{ task.userId }} </p>
        <p> {{ task.category }} </p>
        <a href="" @click.prevent="movetoedit(task.id)"> <i class='far fa-edit'></i> </a>
        <a href="" @click.prevent="deleted(task.id)"> <i class='far fa-trash-alt'></i> </a>
    </div>
</div>

    
</template>

<script>
import axios from "axios"
export default {
    name : 'task card',
    props : ['task'],
    methods : {
        movetoedit(id){
            let payload = {
                page_name: 'edit task page',
                id
            }
            this.$emit('movetomain', payload)
        },
        deleted(id){
            axios({
                method : 'DELETE',
                url : `http://localhost:3000/task/` + id,
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
        },
        getUser(){
            axios({
                method : 'get',
                url : `http://localhost:3000/task`,
            })
            .then(function(data){
                console.log(data);
            })
        }
    }
}
</script>

<style>

</style>
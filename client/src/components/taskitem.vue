<template>
<div>
    <div class="card anomali" v-for="(task, name) in tasks" :key="name" >
        <p> {{ task.title }} </p>
        <p> {{ task.userId }} </p>
        <a href="" @click="movetoedit(task.id)"> <i class='far fa-edit'></i> </a>
        <a href="" @click="deleted(task.id)"> <i class='far fa-trash-alt'></i> </a>
    </div>
</div>

    
</template>

<script>
import axios from "axios"
export default {
    name : 'task card',
    props : ['tasks'],
    methods : {
        movetoedit(id){
            this.$emit('movetomain', 'edit task page', id)
        },
        deleted(id){
            console.log(id);
            // axios({
            //     method : 'DELETE',
            //     url : `http://localhost:3000/task/` + id,
            //     headers : {
            //         access_token : localStorage.getItem('access_token')
            //     }
            // })
            // .then(data => {
            //     this.$emit('movetomain', 'main page')
            // })
            // .catch(err => {
            //     console.log(err);
            // })
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
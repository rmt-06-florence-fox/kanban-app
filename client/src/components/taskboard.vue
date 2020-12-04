<template>
    <div class="papan">
        <div class="card" id="list-backlog" v-for="(category, index) in categories" :key="index">
            <h3> {{category}} </h3>
            <taskitem @movetoedit="edit" :tasks="tasks" @movetomain="changepage" > </taskitem>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import taskitem from './taskitem.vue'
export default {
  components: { taskitem },
    name : 'taskboard',
    data(){
        return {
            tasks : []
        }
    },
    props : ['categories'],
    methods : {
        edit(){
            
        },
        getData(){
            axios({
                method : 'get',
                url : 'http://localhost:3000/task',
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            .then(data =>{
                this.tasks = data.data
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style scoped>
    .papan{
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
</style>
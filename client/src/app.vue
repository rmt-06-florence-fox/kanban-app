<template>
    <div>
        <h1> Kanban App </h1>
        
        <homepage 
        v-if="page_name == 'home page'" 
        @changePageLogin="changePage" 
        @changePageRegis="changePage">
        </homepage>

        <registerpage 
        v-else-if="page_name == 'register page'" 
        @movetomain="changePage"> 
        </registerpage>

        <loginpage 
        v-else-if="page_name == 'login page'"
        @movetomain="changePage"> 
        </loginpage>

        <mainpage 
        v-else-if="page_name == 'main page'"
        @movetoadd="changePage"
        @movetoedit="getEdit"
        @movetomain="changePage"
        :categories="categories"
        :tasks="tasks"
        :page_name="page_name"> 
        </mainpage>

        <addtask 
        v-else-if="page_name == 'add task page'"
        @movetoadd="changePage"
        @movetomain="changePage"> 
        </addtask>

        <editpage 
        v-else-if="page_name == 'edit task page'" 
        :data="data"
        @movetoadd="changePage"
        @movetomain="changePage"> 
        </editpage>

    </div>
</template>

<script>

import Addtask from './components/addtask.vue'
import Editpage from './components/editpage.vue'
import Homepage from './components/homepage.vue'
import Loginpage from './components/loginpage.vue'
import Mainpage from './components/mainpage.vue'
import Registerpage from './components/registerpage.vue'
import axios from 'axios'

export default {
    name : 'app',
    data(){
        return{
            page_name : 'main page',
            categories : ['Backlog', 'Todo', 'Doing', 'Done'],
            data: {},
            tasks: []
        }
    },
    methods : {
        changePage(page){
            this.page_name = page
        },
        getEdit(payload){
            let {page_name, id} = payload
            axios({
                method : 'get',
                url : `https://kanbanappmarcella.herokuapp.com/task/` + id,
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            .then(({data}) => {
                this.data = data
                this.changePage(page_name)
            })
            .catch(({err}) => {
                console.log(err)
            })
        },
        getData(){
            axios({
                method : 'get',
                url : 'https://kanbanappmarcella.herokuapp.com/task',
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            .then(({data}) =>{
                console.log(data)
                this.page_name = 'main page'
                this.tasks = data
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    components : {
        Homepage,
        Mainpage,
        Registerpage,
        Loginpage,
        Addtask,
        Editpage,
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.getData()
        } else {
            this.page_name = 'home page'
        }
    }
}
</script>

<style>

</style>
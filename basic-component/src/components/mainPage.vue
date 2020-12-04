<template>
    <div>
        <Navbar 
        @PleaseChangePage="changePage">
        ></Navbar>
        <BoardList 
        :Task="Tasks"
        :Category="Category"
        ></BoardList>
</template>

<script>
import Navbar from "./navbar"
import BoardList from "./BoardList"
import axios from "axios"

export default {
    name: "MainPage",
    data(){
        return {
            Tasks: [],
            Category: [
                {
                    id:1,
                    name: "Back-Log"
                },
                {
                    id:2,
                    name: "To-Do"
                },
                {
                    id:3,
                    name: "Doing"
                },
                {
                    id:4,
                    name: "Done"
                }
            ]
        }
    },
    components: {
        Navbar,
        BoardList
    },
    methods: {
        fetchTask(){
            axios({
                method: "GET",
                headers: {
                    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b21teXN1c2FudG83N0BnbWFpbC5jb20iLCJpYXQiOjE2MDcwMTYwODl9.P9-4N77hklstE4YpMuwiA08YYwnRRreGqEU80dtGlrc"
                },
                url: "http://localhost:3000/task"
            })
            .then(response => {
                this.Tasks = response.data
                console.log(this.Tasks)
            })
            .catch(error => {
                console.log(error)
            })
        },
        changePage(page){
            this.$emit("PleaseChangePage", page)
        }
        

    },
    created() {
        this.fetchTask()
    }
}
</script>

<style>
    #form-card-1{
    background-color: rgba(212, 209, 209, 0.212);
}
#form-card-2{
    background-color: rgba(212, 209, 209, 0.212);
}
#form-card-3{
    background-color: rgba(212, 209, 209, 0.212);
}
#form-card-4{
    background-color: rgba(212, 209, 209, 0.212);
}
.btn-done {
    margin-left: 5%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 20%;
}
.btn-done:hover {
    background-color: #3e8e41
}
.btn-done:active {
background-color: #3e8e41;
box-shadow: 0 5px #666;
transform: translateY(4px);
}

.btn-delete {
    margin-left: 5%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #df1616;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 20%;
}
.btn-delete:hover {
    background-color: #df1616
}
.btn-delete:active {
background-color:#df1616;
box-shadow: 0 5px #666;
transform: translateY(4px);
}


.btn-back {
    margin-left: 5%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #aaaaaa;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 20%;
}
.btn-back:hover {
    background-color: #aaaaaa
}
.btn-back:active {
    background-color:#aaaaaa;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>
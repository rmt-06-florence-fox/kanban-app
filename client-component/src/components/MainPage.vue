<template>
    <div>
        <Navbar 
            @logoutButton="logout"
        ></Navbar>
        <MainListTask 
            :requestTask="orderTask"
            :categoriesList="categories"
            @emitToMainPage="emitToApp"
            @emitEditValue="editValue"
            @emitValueAdd="addValue"
            @emitDeleteMain="emitDeleteApp"
            @moveCategory="emitMoveCategory"
        >
        </MainListTask>
           

    </div>
</template>

<script>
import Navbar from "./Navbar"
import MainListTask from "./MainListTask"
export default {
    name: "MainPage",
    props: ["categories", "orderTask"],
    data(){
        return{
            id: 0
        }
    },
    components: {
        Navbar,
        MainListTask
    }, 
    methods: {
        emitDeleteApp (key) {
            this.$emit('emitDeleteToApp', key)
        },
        emitToApp(key){
            this.id = key
            console.log(key, "<-- diMain PAGEW")
            this.$emit("getTaskById", this.id)
        },
        editValue(value){
            this.$emit("emitEditValue", value)
        },
        logout(pageName){
            this.$emit("buttonLogout", pageName)
        },
        addValue(value, id){
            this.$emit("emitValueAdd", value, id)
        },
        emitMoveCategory (value) {
            this.$emit("moveCategory", value)
        }
    }
}
</script>

<style>

</style>
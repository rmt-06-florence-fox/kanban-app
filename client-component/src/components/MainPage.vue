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
        }
    }
}
</script>

<style>

</style>
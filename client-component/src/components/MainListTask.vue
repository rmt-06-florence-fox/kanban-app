<template>
      <div class="boards justify-content-center position-relative overflow-y-auto " id="boards">
          <MainBoard 
            v-for="(categories, index) in categoriesList"
            :key="index"
            :orderTaskId="requestTask"
            :category="categories"
            :tasks="categories.Tasks"
            @emitMainListParent="emitMainPage"
            @emitEditValue="valueEdit"
            @emitAddValue="valueAdd"
            @emitDeleteMain="emitDelete"
            @moveCategory="moveCategory"
          ></MainBoard>
       
      </div>
</template>

<script>
import MainBoard from "./MainBoard"
export default {
    name: "MainListTask",
    props: ["categoriesList", "requestTask"],
    data(){
        return{
            id: 0
        }
    },
    components: {
        MainBoard
    },
    methods: {
        emitDelete (key) {
            this.$emit("emitDeleteMain", key)
        },
        emitMainPage(key){
            this.id = key
            console.log(key, "<---- di Main List")
            this.$emit("emitToMainPage", this.id)
        },
        valueEdit(value){
            this.$emit("emitEditValue", value)
        },
        valueAdd(value, id){
            this.$emit("emitValueAdd", value, id)
        },
        moveCategory (category) {
            this.$emit("moveCategory", category)
        }
    }
}
</script>

<style>

</style>
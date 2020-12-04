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
        emitMainPage(key){
            this.id = key
            console.log(key, "<---- di Main List")
            this.$emit("emitToMainPage", this.id)
        },
        valueEdit(value){
            this.$emit("emitEditValue", value)
        }
    }
}
</script>

<style>

</style>
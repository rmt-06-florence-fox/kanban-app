<template>
  <section id="main_page">
    <navKanban @changeLoginPage="changeLoginPage"></navKanban >
        <div class="main-page-top">
          <addCategory @lemparNewCategory="lemparNewCategory"></addCategory>
        </div>
        <div class="container mt-2">
          <div class="row">
            <div class="col-md-3 col-sm6 mt-2" style="display: inline; overflow: auto" v-for="(category) in categoryList" :key="category.id">
              <div  class="p-3 bg-primary text-white">
                {{category.title}}
              </div>
              <draggable>
                <task :categoryTitle="category.title" @lemparEditCategory="lemparEditCategory" @lemparDeleteId="terimaDeleteId" @lemparPayloadEdit="terimaPayloadEdit" @lemparNewTask="newTask" v-for="task in category.Tasks" :key="task.id" :task="task" :categoryList="categoryList"></task>
              </draggable>        
                <div class="add-Task mt-2 text-center">
                  <addTask @lemparEditCategory="lemparEditCategory" :categoryId="category.id" @lemparTitleTask="titleTask"></addTask>
                </div>              
            </div>  
          </div>
        </div>
  </section>
</template>

<script>  
import navKanban from "./nav"
import task from './task.vue'
import addTask from './addTask'
import addCategory from './AddCategory'
import draggable from 'vuedraggable'

export default {
    name: "mainPage",
    props: ['categoryList'],
    components: {
      task,
      addTask,
      navKanban,
      draggable,
      addCategory
    },
    data() {
        return {
            kondisiRef: [],
            CategoryId: '',
            kondisiAddCategory: false,
            CategoryTitle: ''
        }
    },    
    methods: {
      lemparEditCategory(payload){
        this.$emit('lemparEditCategory', payload)
      },
      lemparNewCategory(title){
        this.$emit('lemparNewCategory', title)
      },
      changeLoginPage(){
        this.$emit('changeLoginPage')
      },
      toggleRef(index) {
        this.kondisiRef= []
        for(let i = 0; i < this.categoryList.length; i++){
          this.kondisiRef.push(false)
        }
        let temp = this.kondisiRef.slice(0)
        temp[index] = !temp[index]
        this.kondisiRef = temp;
      },
      newTask(payload){
        this.$emit('lemparNewTask', payload)
      },
      titleTask(payload){
        console.log(payload)
        this.$emit('lemparNewTask', payload)
        this.kondisiRef[payload.CategoryId-1] = false
      },
      terimaPayloadEdit(payload){
        this.$emit('lemparPayloadEditKeApp', payload)
      },
      terimaDeleteId(id){
        this.$emit('lemparDeleteId', id)
      }
    },
    mounted(){
    }
}
</script>

<style>

</style>
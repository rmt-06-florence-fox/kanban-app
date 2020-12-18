<template>
  <div class="boards-container-board" style="background-color:coral; overflow: auto;">
    <div class="mx-auto" style="background: #DCDCDC; width: 100%; text-align:center; position: -webkit-sticky; position: sticky; top: 0; z-index: 2;"><h1 class="my-auto">{{ category }} </h1></div>
    <!-- <h2 v-text="text"></h2>
    <div v-html="pesan"></div> -->
      <Card v-for="task in filtered" :key="task.id" :task="task" class="mt-3" @destroy ='destroy' @goToEdit ='goToEdit'>
      
      </Card> 
    </div>
</template>

<script>
import Card from '../components/Card'
export default {
    props: ["category", "kanban"],
    components: {
      Card
    },
    computed: {
      filtered () {
        return this.kanban.filter(el => {
            return el.progress === this.category
        })
      }
    },
    methods: {
      destroy (id) {
        console.log(id, 'ini di category')
        this.$emit('destroy' , id)
      },
      goToEdit (payload) {
        this.$emit('goToEdit', payload)
      }
    }
}
</script>

<style>

</style>
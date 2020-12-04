<template>
  <div class="modal" id="moveForm">
         <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Move Task</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('emitChangePage', 'MainPage')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <form id="submit-add-form" class="mr-5 ml-5">
                    <div class="form-check" v-for="category in categories" :key="category.id" v-if="category.id !== task.CategoryId">
                        <input class="form-check-input" type="radio" :value="category.id" v-model="picked">
                        <label class="form-check-label" for="exampleRadios1">{{category.name}}</label>
                    </div><br>
                 <button type="submit" class="btn btn-info" data-dismiss="modal"  @click="$emit('emitMoveTask', task.id, picked)">Move</button>
               </form>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "moveForm",
  data() {
    return {
      task: {
        id: this.movedTask.id,
        title: this.movedTask.name,
        due_date: this.movedTask.due_date,
        CategoryId: this.movedTask.categoryId
      },
      picked: null
    }
  },
  props: ['categories', 'movedTask']
  
};
</script>

<style scoped>
</style>
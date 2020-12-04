<template>
  <div id="add-task-page" class="add-container">
            <div class="card bg-light mb-5" style="max-width: 18rem;">
                <div class="card-header">
                  Add New Task To Your Kanban Board
                </div>
                    <div class="card-body">

                    <form @submit.prevent="addTask">

                        <div class="form-group">
                          <label >Title</label>
                          <input v-model="title" placeholder="makan nasi" type="text" class="form-control" >
                        </div>

                        <div class="form-group">
                            <label  > Category </label>
                            <select v-model="categoryId" class="form-control" >
                              <option >--select category--</option>
                              <option value=1>backlog</option>
                              <option value=2>todo</option>
                              <option value=3>doing</option>
                              <option value=4>done</option>
                            </select>
                        </div>

                        <button  type="submit" class="btn btn-primary container-fluid mb-3">Add</button>

                        <button @click="changePage('kanbanBoard')" class="btn  btn-danger container-fluid">cancel</button>
                        
                      </form>   
                </div>
            </div>
  </div>
</template>

<script>
export default {
    name : "AddTask",
    data(){
      return {
        title : "",
        categoryId: ""
      }
    },
    methods : {
      changePage(page){
        console.log(page,'addtask')
        this.$emit('changePage', page)
      },
      addTask(){
        const newTask = {
          title : this.title,
          categoryId : this.categoryId
        }
        console.log(this.title,this.categoryId)
        this.$emit('addTask', newTask)
      }
    }
}
</script>

<style>

</style>
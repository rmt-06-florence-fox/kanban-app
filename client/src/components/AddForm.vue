<template>
    <div class="container" style="background-color:#e76f51; padding:20px">
        <h1>ADD TASK</h1>
        <form @submit.prevent="add">
            <p v-if="errorMessage !== ''" style="color: white">{{errorMessage}}</p>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="title" v-model="title">
            </div>
           <div>
               <p>Please select category:</p>
                <input type="radio" id="backlog" name="backlog" value="Backlog" v-model="category">
                <label >Backlog</label><br>
                <input type="radio" id="todo" name="todo" value="Todo" v-model="category">
                <label >Todo</label><br>
                <input type="radio" id="done" name="done" value="Done" v-model="category">
                <label >Done</label><br>
                <input type="radio" id="completed" name="Completed" value="Completed" v-model="category">
                <label >Completed</label>
           </div> <br> 
            <button type="submit" class="btn btn-dark">Submit</button>
            <button type="button" @click.prevent="backDashboard" class="btn btn-dark">Cancel</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'AddForm',
    data () {
      return {
        title : "",
        category : "",
        errorMessage : ""
      }
    },
    methods : {
        backDashboard () {
            this.$emit("backDashboard")
        },
        add () {
        axios ({
          method : 'POST',
          url : 'http://localhost:3000/tasks',
          data : {
           title : this.title,
           category : this.category,
          },
          headers : {
            token : localStorage.getItem('token')
          }
        })
        .then (response => {
          this.$emit("backDashboard")
          console.log ('BERHASIL ADD TASK')
        })
        .catch (err => {
          console.log(err)
          this.errorMessage = 'Fill All Form'
        })
        .finally(() => {
          this.email = ""
          this.password = ""
        })
        }
    }
}
</script>

<style>

</style>
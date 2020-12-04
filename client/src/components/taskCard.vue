<template>
  <div>
      <div class="card" style="width: 15rem;"  >
        <div class="card-body">
        <h5 class="card-title"><strong>{{dataToChild.title}}</strong></h5>
        <p class="card-text">User: {{dataToChild.User.email}}</p>
        <p class="card-text">{{dataToChild.updatedAt}}</p>
        <a href="#" class="btn btn-secondary btn-sm">update</a> 
        <div class="btn-group">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                move
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Backlog</a>
                <a class="dropdown-item" href="#">Todo</a>
                <a class="dropdown-item" href="#">Done</a>
                <a class="dropdown-item" href="#">Completed</a>
            </div>
        </div>
        <a href="#" class="btn btn-secondary btn-sm" @click.prevent="deleteTask">delete</a>
    </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'Card',
    props:["dataToChild"],
    data () {
      return {
        id : undefined 
      }
    },
    methods : {
      deleteTask() {
        axios ({
          method : 'DELETE',
          url : `http://localhost:3000/tasks/${this.id}`,
          headers : {
            token : localStorage.getItem('token')
          }
        })
        .then (response => {
          console.log ('BERHASIL DELETE TASK')
          this.$emit("keDashboard")
          alertDisplay()
        })
        .catch (err => {
          console.log(err)
        })
      },
      alertDisplay() {
        // $swal function calls SweetAlert into the application with the specified configuration.
        this.$swal('Heading', 'this is a Heading', 'OK');
      }
    },
    mounted() {
        this.id = this.dataToChild.id;
    }
    
}
</script>

<style>

</style>

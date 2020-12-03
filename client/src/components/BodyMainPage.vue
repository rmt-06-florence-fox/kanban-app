<template>
  <div class="container-fluid" style="height: 93%">
    <div class="d-flex flex-row" style="height: 97%">
      <CardState
        :tasks="tasks.Backlog"
        name="Backlog"
        @showAdd="showAdd('Backlog')"
        @showEdit="showEdit"
      ></CardState>
      <CardState
        :tasks="tasks.Todo"
        name="Todo"
        @showAdd="showAdd('Todo')"
        @showEdit="showEdit"
      ></CardState>
      <CardState
        :tasks="tasks.Doing"
        name="Doing"
        @showAdd="showAdd('Doing')"
        @showEdit="showEdit"
      ></CardState>
      <CardState
        :tasks="tasks.Done"
        name="Done"
        @showAdd="showAdd('Done')"
        @showEdit="showEdit"
      ></CardState>
    </div>
    <div>
      <b-modal id="addForm" hide-footer>
        <form @submit.prevent="addTask">
          <div class="form-group">
            <label >Title:</label>
            <input type="text" class="form-control" v-model="addTaskTitle">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </b-modal>
      <b-modal id="editForm" hide-footer>
        <form @submit.prevent="editTask">
          <div class="form-group">
            <label >Title:</label>
            <input type="text" class="form-control" v-model="editTaskTitle">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
          <button class="btn btn-danger mt-3">Delete</button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import CardState from "./CardState";
import axios from 'axios'
export default {
  props: ["tasks"],
  components: {
    CardState,
  },
  data() {
    return {
      addTaskTitle: '',
      editTaskTitle:'',
      editTaskId: NaN,
      state: ''
    };
  },
  methods:{
    showAdd(q){
      console.log('dari showadd');
      this.$bvModal.show('addForm')
      this.addTaskTitle = ''
      this.state = q
    },
    addTask(){
      axios({
        url: 'http://localhost:3000/tasks',
        method: 'POST',
        headers:{
          access_token : localStorage.getItem('access_token')
        },
        data:{
          state: this.state,
          title: this.addTaskTitle
        }
      })
      .then(({data})=>{
        this.$bvModal.hide('addForm')
        this.$emit('fetchUlang')
      })
      .catch(({response})=>{
        this.$bvModal.hide('addForm')
        this.$emit('fetchUlang')
        console.log(response);
      })
    },
    showEdit(obj){
      this.$bvModal.show('editForm')
      this.editTaskTitle = obj.title
      this.editTaskId = obj.id 
    },
    editTask(){
      axios({
        url: `http://localhost:3000/tasks/${this.editTaskId}`,
        method: 'PUT',
        headers:{
          access_token: localStorage.getItem('access_token')
        },
        data:{
          title: this.editTaskTitle
        }
      })
        .then(({data})=>{
          console.log(data);
          this.$bvModal.hide('editForm')
          this.$emit('fetchUlang')
        })
        .catch(({response})=>{
          console.log(response);
          this.$bvModal.hide('editForm')
          this.$emit('fetchUlang')
        })
    }
  },
  created() {
    console.log(this.tasks);
  },
};
</script>

<style>
</style>
<template>
  <div class="container-fluid" style="height: 93%">
    <div class="d-flex flex-row" style="height: 97%">
      <CardState v-for="(val,key) in tasks" :key="key" :tasks="val" :name="key" @showAdd="showAdd" @showEdit="showEdit"></CardState>
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
            <label >State</label>
            <select v-model="editState" class="form-control">
              <option>Backlog</option>
              <option>Todo</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </div>
          <div class="form-group">
            <label >Title:</label>
            <input type="text" class="form-control" v-model="editTaskTitle">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
          <button class="btn btn-danger mt-3" @click="deleteTask">Delete</button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import CardState from "./CardState";
import axios from 'axios'
import draggable from "vuedraggable";
export default {
  props: ["tasks"],
  components: {
    CardState, draggable
  },
  data() {
    return {
      addTaskTitle: '',
      editTaskTitle:'',
      editTaskId: NaN,
      editState:'',
      state: '',
      Backlog: this.tasks.Backlog,
      Todo: this.tasks.Todo,
      Doing: this.tasks.Doing,
      Done: this.tasks.Done,
      isDragging : false
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
      console.log(obj);
      this.$bvModal.show('editForm')
      this.editTaskTitle = obj.title
      this.editTaskId = obj.id 
      this.editState = obj.state
    },
    editTask(){
      axios({
        url: `http://localhost:3000/tasks/${this.editTaskId}`,
        method: 'PUT',
        headers:{
          access_token: localStorage.getItem('access_token')
        },
        data:{
          state: this.editState,
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
    },
    deleteTask(){
      axios({
        url: `http://localhost:3000/tasks/${this.editTaskId}`,
        method: 'DELETE',
        headers:{
          access_token: localStorage.getItem('access_token')
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
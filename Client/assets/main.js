const baseURL = `http://localhost:3000/`

var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue!',
    pageName: 'Login Page',
    user:{
      email: '',
      password: ''
    },
    registUser:{
      name: '',
      email: '',
      password: ''
    },
    dataTask: []
  },
  methods:{
    login(){
      axios({
        url:  baseURL + 'login',
        method: 'POST',
        data: this.user
      })
        .then(response => {
          // console.log(response);
          localStorage.setItem('access_token', response.data.access_token)
          this.pageName = 'Home Page'
          this.fetchData()
        })
        .catch(err => console.log(err))
        .finally(_ => {
          this.user.email = ''
          this.user.password = ''
        })
    },
    logout(){
      localStorage.removeItem('access_token')
      this.pageName = 'Login Page'
    },
    changePage(page){
      this.pageName = page
    },
    regist(){
      // console.log(this.registUser);
      axios({
        url: baseURL + 'register',
        method: 'POST',
        data: this.registUser
      })
        .then(response =>{
          console.log(response);
          this.pageName = 'Login Page'
        })
        .catch(err => console.log(err))
        .finally(_ => {
          this.registUser.email = ''
          this.registUser.name = ''
          this.registUser.password = ''
        })
    },
    fetchData(){
      axios({
        url: baseURL + 'tasks',
        method: 'GET',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data);
          // this.dataTask.push(response.data)
          response.data.forEach((e)=> this.dataTask.push(e))
        })
        .catch(err => console.log(err))
    }
  },
  created: function(){
    if(localStorage.getItem('access_token')){
      this.pageName = 'Home Page'
      this.fetchData()
      console.log(this.dataTask, '<<< datanya');
    }else this.pageName = 'Login Page'
  },
  computed:{
    filteredDataBacklog: function(){
      return this.dataTask.filter(e => e.category === 'backlog')
    },
    filteredDataDoing: function(){
      return this.dataTask.filter(e => e.category === 'doing')
    },
    filteredDataTodo: function(){
      return this.dataTask.filter(e => e.category === 'todo')
    },
    filteredDataDone: function(){
      return this.dataTask.filter(e => e.category === 'done')
    },
  }
})
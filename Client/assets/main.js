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
        this.dataTask.push(response.data)
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
    filteredData(category){
      return this.dataTask.filter(e => e.category === category)
    }
  }
})
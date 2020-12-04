const baseURL = 'http://localhost:3000/'

const app = new Vue({
  el: '#app',
  data: {
    pageName: 'Login Page',
    user: {
      email: '',
      password: ''
    },
    registerUser: {
      username: '',
      email: '',
      password: ''
    },
    dataTask: []
  },
  methods: {
    register() {
      axios({
        url: baseURL + 'register',
        method: 'POST',
        data: this.registerUser
      })
      .then(res => {
        this.pageName = 'Login Page'
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        this.registerUser.username = '',
        this.registerUser.email = '',
        this.registerUser.password = ''
      })
    },

    login() {
      axios({
        url: baseURL + 'login',
        method: 'POST',
        data: this.user
      })
      .then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        this.pageName = 'Home Page'
        this.fetchData()
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        this.user.email = ''
        this.user.password = ''
      })
    },

    logout() {
      localStorage.removeItem('access_token')
      this.pageName = 'Login Page'
    },

    fetchData() {
      axios({
        url: baseURL + 'tasks',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        res.data.map(el => {
          return this.dataTask
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created: function() {
    if(localStorage.getItem('access_token')) {
      this.pageName = 'Home Page'
      this.fetchData()
      console.log(this.dataTask, '<-- data dari fetch')
    } else {
      this.pageName = 'Login Page'
    }
  },
  computed: {
    filteredDataBackLog: function() {
      return this.dataTask.filter(el => {
        el.category === 'backlog'
      })
    },
    filteredDataDoing: function() {
      return this.dataTask.filter(el => {
        el.category === 'doing'
      })
    },
    filteredDataTodo: function() {
      return this.dataTask.filter(el => {
        el.category === 'todo'
      })
    },
    filteredDataDone: function() {
      return this.dataTask.filter(el => {
        el.category === 'done'
      })
    }
  }
})
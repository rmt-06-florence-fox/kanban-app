const server = 'http://localhost:3000'
var app = new Vue({
  el: '#app',
  data: {
    pageName: "login page",
    task: [],
    organizationName: '',
    organizations: [],
    categories: [],
    user: {
      email: '',
      password: '',
    },
  },
  methods: {
    //moving function
    changeRegisterPage(){
      this.pageName = 'register page'
      this.fetchOrganization()
    },
    changeFormOrganization(){
      this.pageName = 'form organization'
    },
    changeAddTask(){
      this.pageName = 'form add task'
    },

    //operation function
    login() {
      axios({
        url: `${server}/login`,
        method: 'POST',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
      .then( res => {
        localStorage.setItem('access_token', res.data.access_token)
        this.pageName = 'main page'
        this.fetchTask()
        this.fetchCatagory()
      })
      .catch( err => {
        console.log(err)
      })
      .finally(()=> {
        this.user.email = ''
        this.user.password = ''
      })
    },

    onSignIn(googleUser) {
      console.log(`masuk sini?`)
      let googleToken = googleUser.getAuthResponse().id_token;
      axios({
        url: `${server}/googleLogin`,
        method: 'POST',
        data: {
          googleToken
        } 
      })
      .then(res => {
        localStorage.setItem('access_token', res.access_token)
        this.pageName = 'main page'
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },

    logout(){
      localStorage.clear()
      this.pageName = 'login page'
    },
    fetchCatagory(){
      axios({
        url: `${server}/category`,
        method: 'GET',
      })
      .then(res => {
        this.categories = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchOrganization(){
      axios({
        url: `${server}/organization`,
        method: 'GET',
      })
      .then(res => {
        this.organizations = res.data
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    addOrganization(){
      this.organization
      axios({
        url: `${server}/organization`,
        method: 'POST',
        data: {
          name: this.organizationName,
        },
      })
      .then(res => {
        this.pageName = 'register page'
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.organizationName = ''
      })
    },

    fetchTask(){
      axios({
        url: `${server}/task`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    if(localStorage.getItem('access_token')){
      this.pageName = 'main page'
      this.fetchTask()
      this.fetchCatagory()
    } else {
      this.pageName = 'login page'
    }
  }
})
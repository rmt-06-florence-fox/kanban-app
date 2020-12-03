const app = new Vue({
  el : '#app',
  data : {
    localhost : 'http://localhost:3000',
    page : 'login page',
    firstName : '',
    lastName : '',
    email : '',
    password : ''
  },
  methods : {
    changePage(value){
      this.page = value
    },
    async create(){
      try {
        let data = await axios({
          url : `${this.localhost}/register`,
          method : 'post',
          data : {
            firstName : this.firstName,
            lastName : this.lastName,
            email : this.email,
            password : this.password
          }
        })
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async login(){
      try {
        let data = await axios({
          url : `${this.localhost}/login`,
          method : 'post',
          data : {
            email : this.email,
            password : this.password
          }
        })
        console.log(data);
        localStorage.setItem('access_token', data.data.access_token)
        localStorage.setItem('fullname', data.data.fullname)
        //set read list
        this.changePage('main page')
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
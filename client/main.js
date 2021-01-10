var app = new Vue({
  el: '#app',
  data: {
    pageName: "login-page",
    message: 'Hello Vue!',
    // dataLogin: {
    //   email: "login-email",
    //   password: "login-password"
    // }
  },


  methods:{
    changePage(pageName){
      this.pageName = pageName
    }
}





})
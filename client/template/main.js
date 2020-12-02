var app = new Vue({
    el: '#app', // ini element (ini akan merender apapung yang ada dibawah id app)
    data: {
      message: 'Hello Vue!',
      pageName: "home-page"
    },
    methods: {
        changePage(value) {
            this.pageName = value
        }
    }
  })
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    pageName: 'error-page',
    tasks: [
      {
        title: 'compile A/B'
      },
      {
        title: 'deploy client'
      },
      {
        title: 'testing server'
      },
      {
        title: 'compile A/B'
      },
      {
        title: 'deploy client'
      },
      {
        title: 'testing server'
      }
    ],
    categories: [
      {
        name: 'Backlog'
      },
      {
        name: 'Todo'
      },
      {
        name: 'Doing'
      },
      {
        name: 'Done'
      }
    ]
  }
})
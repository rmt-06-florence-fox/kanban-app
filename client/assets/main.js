var app = new Vue({
    el: '#app',
    data: {
        pageName: 'Login Page',
        user: {
            email: '',
            password: ''
        },
        registerAkun: {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        },
        addTask:{
            title: '',
            category: '',
            desc: ''
        },
        filterData: {
            id: '',
            title: '',
            category: '',
            desc: '',
            userId: '',
        },
        filterData: {},
        listTask: []
    },
    methods:{
        login(){
            axios({
                url: 'http://localhost:3000/login',
                method: 'post',
                data: this.user
            })
            .then(response=>{
                // console.log(response)
                localStorage.setItem('access_token', response.data.access_token)
                this.pageName = 'Main Page'
                this.fetch()
            })
            .catch(e=>{
                console.log(e)
            })
            .finally(_ =>{
                this.user.email = '',
                this.user.password = ''
            })
        },
        logout(){
            localStorage.removeItem('access_token')
            this.pageName = 'Login Page'
        },
        register(){
            axios({
                url: 'http://localhost:3000/register',
                method: 'post',
                data: this.registerAkun
                
            })
            .then(response=>{
                this.pageName = 'Login Page'
            })
            .catch(e=>{
                console.log(e)
            })
            .finally(_ =>{
                this.registerAkun.first_name = '',
                this.registerAkun.last_name = '',
                this.registerAkun.email = '',
                this.registerAkun.password = ''
            })
        },
        add(){
            axios({
                url: 'http://localhost:3000/tasks/',
                method: 'post',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: this.addTask
            })
            .then(response=>{
                console.log(response)
                this.pageName = 'Main Page'
            })
            .catch(e=>{
                console.log(e)
            })
            .finally(_ =>{
                this.addTask.title = '',
                this.addTask.category = '',
                this.addTask.desc = ''
            })
        },
        fetch(){
            axios({
                url: 'http://localhost:3000/tasks',
                method: 'get',
                headers:{
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response=>{
                // console.log(response.data)
                response.data.forEach((task)=>{
                    this.listTask.push(task)
                })
            })
            .catch(e=>{
                console.log(e)
            })
        },
        editData(data){
            // console.log(data)
            axios({
                url: `http://localhost:3000/tasks/${data}`,
                method: 'get',
                headers:{
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response=>{
                this.filterData = response.data
                console.log(this.filterData)
                this.pageName = 'Edit Page'
            })
            .catch(e=>{
                console.log(e)
            })
        }
    },
    created: function(){
        if (localStorage.getItem('access_token')){
            this.pageName = 'Main Page'
            this.fetch()
        } else {
            this.pageName = 'Login Page'
        }
    },
    computed:{
        filterBacklog: function(){
            return this.listTask.filter(task => task.category == 'Backlog')
        },
        filterTodo: function(){
            return this.listTask.filter(task => task.category == 'Todo')
        },
        filterDoing: function(){
            return this.listTask.filter(task => task.category == 'Doing')
        },
        filterDone: function(){
            return this.listTask.filter(task => task.category == 'Done')
        }
    }
  })
  



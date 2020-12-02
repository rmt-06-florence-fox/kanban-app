
new Vue({
    el : "#app",
    data : {
        onPage : "loginPage",
        userData : {
            email : "",
            password : ""
        },
        newTask : {
            title : "",
            category : ""
        },
        task : [],
        getIdEditTask : "",
        newTitle : ""



    },
    methods : {
        changePage(namePage) {
            console.log(namePage)
            return this.onPage = namePage
        },
        login(){
            axios({
                method: 'post',
                url: 'https://kanban-app-p2.herokuapp.com/login',
                data: this.userData
            })
            .then(resp =>{
                console.log(resp.data.access_token)
                localStorage.setItem('access_token',resp.data.access_token)
                
                this.fethcData()
                this.onPage = 'kanbanPage'
            })
            .catch(err =>{
                console.log(err,'ini eror')
            })
            .finally(()=>{
                this.userData.email = ""
                this.userData.password = ""

            })
        },
        registerNewUser(){
            axios({
                method: 'post',
                url: 'https://kanban-app-p2.herokuapp.com/register',
                data: this.userData
            })
            .then(resp =>{
                this.login()
                // this.onPage = 'kanbanPage'
            })
            .catch(err =>{
                console.log(err,'ini eror')
            })
            .finally(()=>{
                this.userData.email = ""
                this.userData.password = ""

            })
        },
        logout(){
            localStorage.removeItem('access_token')
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
            loginForm()
            this.onPage = 'loginPage'
        },
        onSignIn(googleUser) {
            const google_token = googleUser.getAuthResponse().id_token;
         //    console.log(google_token)
            axios({
                method : 'POST',
                url : 'https://kanban-app-p2.herokuapp.com/googleLogin',
                data : {
                    google_token
                }
            }).then(resp =>{
             console.log('goooooooooooooooooo')
             console.log(resp)
             localStorage.setItem('access_token',resp)
             mainPage()
            }).catch(err=>{
             console.log(err)
            })
           },
        fethcData(){
            const access_token = localStorage.getItem('access_token')
            this.task = []
            axios({
                method : 'get',
                url : 'https://kanban-app-p2.herokuapp.com/task',
                headers : {
                    access_token  
                }
            })
            .then(resp =>{
                resp.data.task.forEach( el =>{
                    this.task.push(el)
                })
                
            })
            .catch(err =>{
                console.log(err)
            })
            .finally(() =>{
                // this.todoTask =[]
            })
        },
        addTask(){
            const access_token = localStorage.getItem('access_token')
            axios({
                url : "https://kanban-app-p2.herokuapp.com/task",
                method : 'post',
                headers : {
                    access_token
                },
                data : this.newTask
            }).then(resp =>{
                this.fethcData()
                this.onPage = 'kanbanPage'
            }).catch(err =>{
                console.log(err)
            }).finally(()=>{
                this.newTask.title = ""
                this.newTask.category = ""
            })
        },
        deleteTask(id){
            console.log('delete')
            console.log(id)
            const access_token = localStorage.getItem('access_token')
            axios({
                method : 'delete',
                url : `https://kanban-app-p2.herokuapp.com/task/${id}`,
                headers : {
                    access_token
                }

            }).then(res =>{
                this.fethcData()
                console.log(res)
            }).catch(err =>{
                console.log(err)
            })
        }

    },
    created: function () {
        if(localStorage.getItem('access_token')){
            this.onPage = 'kanbanPage'
            this.fethcData()
        }else {
            this.onPage = "loginPage"
        }
    },
    computed : {
        doneTask : function () {
            doneTask = []
            this.task.forEach(e =>{
                if (e.Category === 'done'){
                    doneTask.push(e)
                } 
            })
            return doneTask
        },
        doingTask : function () {
            let doingtask = []
            this.task.forEach(e =>{
                if (e.Category === 'doing'){
                    doingtask.push(e)
                } 
            })
            return doingtask
        },
        backLogTask : function () {
            let backlogtask = []
            console.log('masuk')
            this.task.forEach(e =>{
                if (e.Category === 'backlog'){
                    backlogtask.push(e)
                } 
            })
            return backlogtask
        },
        todoTask : function () {
            let todotask = []
            this.task.forEach(e =>{
                if (e.Category === 'todo'){
                    todotask.push(e)
                } 
            })
            return todotask
        }
    }
})
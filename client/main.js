new Vue({
    el : "#app",
    data : {
        onPage : "loginPage",
        userLoginData : {
            email : "",
            password : ""
        }
    },
    methods : {
        changePage(namePage) {
            console.log(namePage)
            console.log(this.userLoginData)
            return this.onPage = namePage
        },
        login(){
            this.onPage = 'kanbanPage'
            console.log(this.userLoginData.email)
            axios({
                method: 'post',
                url: 'https://kanban-app-p2.herokuapp.com/login',
                data: this.userLoginData
              })
            .then(resp =>{
                // localStorage.setItem('access_token')
                console.log(resp.data.access_token)
            })
            .catch(err =>{
                console.log(err,'ini eror')
            })
        }
    }
})
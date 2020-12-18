var app = new Vue({
    el : '#app',
    data : {
        page_name : 'home page'
    },
    methods : {
        movetoregister(){
            this.page_name = 'register page'
        },
        movetologin(){
            this.page_name = 'login page'
        },
        login(){
            axios({
                method : '',
                url : '',
                data : {
                    
                }
            })
            this.page_name = 'main page'
        },
        movetoedit(){
            this.page_name = 'edit task page'
        },
        movetoadd(){
            this.page_name = 'add task page'
        },
        deleted(){
            this.page_name = 'main page'
        },
        logout(){
            localStorage.removeItem('access_token')
        }
    }
})
<template>
    <div>
        <login      v-if=" showPage == 'pg-login' "
                    @goTo="goTo" >
        </login>
        <register   v-if=" showPage == 'pg-register' "
                    @goTo="goTo">
        </register>
        <homepage   v-if=" showPage == 'pg-homepage' "
                    @getData="getTaskList"
                    :organization="organization" 
                    :categories="categories"
                    @createNewTask="postTask"
                    @commitEdit="commitEditTask"
                    @deleteThisTask="commitDeleteTask"
                    @commitPatch="commitPatchTask"
                    :errorData="errorData"
                    @clearError="errorData = ''"
                    @getUser="getUser"
                    :activeUser="activeUser"
                    @logout="logout">
                    
        </homepage>
    </div>
</template>

<script>
// import login from './components/login'
import login from './components/login.vue'
import register from './components/register.vue'
import homepage from './components/homepage.vue'
import axios from 'axios';

export default {
    name: 'App',
    data () {
        return {
            showPage: 'pg-login',
            organization: '',
            categories: [],
            errorData: '',
            activeUser: ''
        }
    },
    components: {
        login,
        register,
        homepage
    },
    methods: {
        goTo (page) {
            this.showPage = page
        },        
        getTaskList () {
            this.categories = []
            axios({
                method: 'get',
                url: 'http://localhost:3000/task',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
                })
                .then((res) => {
                // handle success
                console.log(res.data.Categories[0])

                this.organization = {
                    id: res.data.id,
                    name: res.data.name
                }
                res.data.Categories.forEach(el => {
                    this.categories.push(el)
                })

                // console.log(res.data[0].Organization.Categories)
                // res.data[0].Organization.Categories.forEach( el => {
                //   this.categories[el.id] = [el.id, el.name]
                // })
                // this.tasks = res.data
                })
                .catch((error) => {
                // handle error
                // handle error
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    }
                    console.log(error.config);
                })
                .then(_=> {
                // always executed
                });
        },
        postTask(title, des, catId, orgId) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/task',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: title,
                    description: des,
                    CategoryId: catId,
                    OrganizationId: orgId
                }
                })
                .then((res) => {
                // handle success
                    this.categories = []
                    this.getTaskList()
                })
                .catch((error) => {
                // handle error
                    // handle error
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    }
                    console.log(error.config);
                    
                })
                .then(_=> {
                // always executed
                });
        },
        commitEditTask (data) {
            console.log(data)
             axios({
                method: 'put',
                url: `http://localhost:3000/task/${data.id}`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: data.title,
                    description: data.description,
                    CategoryId: data.CategoryId,
                    OrganizationId: data.OrganizationId
                }
                })
                .then((res) => {
                // handle success
                    this.categories = []
                    this.getTaskList()
                })
                .catch((error) => {
                // handle error
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    }
                    console.log(error.config);
                    this.errorData = JSON.parse(error.request.responseText).error
                })
                .then(_=> {
                // always executed
                });
        },
        commitDeleteTask (taskId) {
                axios({
                method: 'delete',
                url: `http://localhost:3000/task/${taskId}`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                
                })
                .then((res) => {
                // handle success
                    this.categories = []
                    this.getTaskList()
                })
                .catch((error) => {
                // handle error
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    }
                    console.log(error.config);
                    this.errorData = JSON.parse(error.request.responseText).error
                })
                .then(_=> {
                // always executed
                });
        },
        commitPatchTask (taskId, catId) {
            axios({
                method: 'patch',
                url: `http://localhost:3000/task/${taskId}`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    CategoryId: catId,
                }
                })
                .then((res) => {
                // handle success
                    this.categories = []
                    this.getTaskList()
                })
                .catch((error) => {
                // handle error
                    // if (error.response) {
                    // // The request was made and the server responded with a status code
                    // // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    // } else if (error.request) {
                    // // The request was made but no response was received
                    // // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // // http.ClientRequest in node.js
                    // console.log(error.request);
                    // } else {
                    // // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                    // }
                    // console.log(error.config);
                    this.errorData = JSON.parse(error.request.responseText).error
                    console.log(JSON.parse(error.request.responseText).error)
                })
                .then(_=> {
                // always executed
                });
        },
        getUser () {
            axios({
                method: 'get',
                url: `http://localhost:3000/user`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                })
                .then((res) => {
                // handle success
                    this.activeUser = res.data
                    console.log(res)
                })
                .catch((error) => {
                // handle error
                    // if (error.response) {
                    // // The request was made and the server responded with a status code
                    // // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    // } else if (error.request) {
                    // // The request was made but no response was received
                    // // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // // http.ClientRequest in node.js
                    // console.log(error.request);
                    // } else {
                    // // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                    // }
                    // console.log(error.config);
                    this.errorData = JSON.parse(error.request.responseText).error
                    console.log(JSON.parse(error.request.responseText).error)
                })
                .then(_=> {
                // always executed
                });
        },
        logout () {
            console.log('logout')
            localStorage.removeItem('access_token')
            this.showPage = 'pg-login'
        }
    },
    created: function () {
        if (localStorage.getItem('access_token')) {
            this.showPage = 'pg-homepage'
        } else {
            this.showPage = 'pg-login'
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <login      v-if=" showPage == 'pg-login' "
                    @goTo="goTo" 
                    @choosePage="choosePage"
                    @onSignIn="onSignIn">
        </login>
        <register   v-if=" showPage == 'pg-register' "
                    @goTo="goTo"
                    @onSignIn="onSignIn">
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
                    @clearError="clearErrorData"
                    @getUser="getUser"
                    :activeUser="activeUser"
                    @logout="logout"
                    @editBoardName="editBoardName"
                    @updateCat="commitPatchTask"
                    @goTo="goTo"
                    @addCat="addCat"
                    @deleteCat="deleteCat">
                    
        </homepage>
        <registerOrg    v-if="showPage == 'pg-regOrg' "
                        @getOrgData="getOrgData"
                        :orgData="orgData"
                        @chooseOrg="chooseOrg"
                        @goTo="goTo"
                        :activeUser="activeUser"
                        @cancelSelect="choosePage"
                        @logout="logout">
        </registerOrg>
        <registerOrgAdd v-if="showPage == 'pg-registerOrgAdd' "
                        @addNewOrg="addNewOrg"
                        @cancelSelect="choosePage"
                        @logout="logout">
        </registerOrgAdd>
    </div>
</template>

<script>
// import login from './components/login'
import login from './components/login.vue'
import register from './components/register.vue'
import homepage from './components/homepage.vue'
import registerOrg from './components/register-org'
import registerOrgAdd from './components/registerOrg'
import axios from 'axios';

export default {
    name: 'App',
    data () {
        return {
            showPage: 'pg-login',
            organization: '',
            categories: [],
            errorData: '',
            activeUser: '',
            orgData: []
        }
    },
    components: {
        login,
        register,
        homepage,
        registerOrg,
        registerOrgAdd
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
                // console.log(res.data.Categories[0])

                this.organization = {
                    id: res.data.id,
                    name: res.data.name
                }
                res.data.Categories.forEach(el => {
                    this.categories.push(el)
                })
                this.categories.sort(function(a, b){return a.id - b.id})
                // console.log(res.data[0].Organization.Categories)
                // res.data[0].Organization.Categories.forEach( el => {
                //   this.categories[el.id] = [el.id, el.name]
                // })
                // this.tasks = res.data
                })
                .catch((error) => {
                // handle error
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
                    return this.activeUser
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
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                console.log('User signed out.');
                });
            this.showPage = 'pg-login'

        },
        getOrgData() {
            this.orgData = []
            axios({
                method: 'get',
                url: `http://localhost:3000/org`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                })
                .then((res) => {
                // handle success
                    res.data.forEach(el => {
                        console.log(el)
                        this.orgData.push(el)
                    })
                    // this.orgData = res.data
                    // console.log(res.data)
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
        chooseOrg (orgId) {
                axios({
                method: 'patch',
                url: `http://localhost:3000/user/${this.activeUser.id}`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    OrganizationId: orgId
                }
                })
                .then((res) => {
                // handle success
                    // localStorage.removeItem('access_token')
                    localStorage.setItem('access_token', res.data.access_token)
                    this.showPage = 'pg-homepage'
                    // this.orgData = res.data
                    console.log(res.data)
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
        choosePage () {
            axios({
                method: 'get',
                url: `http://localhost:3000/user`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                })
                .then((res) => {
                // handle success
                console.log(res.data)
                    if (res.data.OrganizationId) {
                        this.showPage = 'pg-homepage'
                    } else {
                        this.showPage = 'pg-regOrg'
                    }
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
        onSignIn(idToken) {
            
            axios({
                method: 'post',
                url:'http://localhost:3000/google-login',
                data: {
                    id_token: idToken
                }
            })
            .then (res => {
                localStorage.setItem('access_token', res.data.access_token)
                this.choosePage()
                console.log(res)
            })
            .catch (err => {
                    console.log(err)
            })
            .then(_=> {

            })
        },
        addNewOrg (value) {
            axios({
                method:'post',
                url: 'http://localhost:3000/org/add',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    name: value.name
                }
            })
            .then(res=> {
                value.board.forEach(el => {
                    el.OrganizationId = res.data.id
                })
                console.log(value.board)
                return axios({
                    method:'post',
                url: 'http://localhost:3000/categories/bulk',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    name: value.board
                }
                })
            })
            .then (res=> {
               return this.chooseOrg(res.data[0].OrganizationId)
            })
            .then (res => {
                this.choosePage()
                console.log(res.data)
            })
        },
        editBoardName (newName, id) {
            axios({
                method: 'patch',
                url: `http://localhost:3000/categories/${id}`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    name: newName
                }
            })
            .then(res => {
                console.log(res.data)
                this.getTaskList()
            })
            .catch(err=> {
                console.log(err)
            })
        },
        addCat(val) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/categories',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    name: val,
                    OrganizationId: this.organization.id
                }
            })
            .then(res=> {
                console.log(res.data)
                this.categories = []
                this.getTaskList()
            })
            .catch(err=> {
                console.log(err)
            })
        },
        deleteCat(val) {
            axios({
                method: 'delete',
                url: `http://localhost:3000/categories/${val}`,
                headers: {
                     access_token: localStorage.getItem('access_token')
                },
            })
            .then(res => {
                console.log(res.data)
                this.categories = []
                this.getTaskList()
            })
            .catch(err=> {
                console.log(err)
            })
        },
        clearErrorData() {
            this.errorData = ''
            this.getTaskList()
        }
    },
    created: function () {
        if (localStorage.getItem('access_token')) {
            console.log('sudah cek local storage')
             axios({
                method: 'get',
                url: `http://localhost:3000/user`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                })
                .then((res) => {
                // handle success
                console.log(res.data)
                    if (res.data.OrganizationId) {
                        this.showPage = 'pg-homepage'
                    } else {
                        this.showPage = 'pg-regOrg'
                    }
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
            
        } else {
            this.showPage = 'pg-login'
        }
    }
}
</script>

<style>

</style>
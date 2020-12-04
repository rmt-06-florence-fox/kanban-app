const route = require('express').Router()
const taskRoute = require('./task')
const {UserController, TaskController} = require('../controller')
const authentication = require('../middleware/authentication')

route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.post('/googleLogin', UserController.googleLogin)
route.use(authentication)
route.use('/tasks', taskRoute)


module.exports = route
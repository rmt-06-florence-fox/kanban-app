const route = require('express').Router()
const taskRoute = require('./task')
const {UserController} = require('../controller')
const authentication = require('../middleware/authentication')

route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.use(authentication)
route.get('/tasks', taskRoute)


module.exports = route
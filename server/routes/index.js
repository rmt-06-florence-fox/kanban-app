const route = require('express').Router()
const Controller = require('../controllers')
const authentication = require('../middlewear/authentication')
const authorize = require('../middlewear/authorize')

route.post('/register', Controller.register)
route.post('/login', Controller.login)
route.post('/logingoogle', Controller.google)
route.use(authentication)
route.post('/task', Controller.createTask)
route.get('/task', Controller.listTask)
route.post('/task/:id', Controller.findById)
route.put('/task/:id', authorize, Controller.editTask)
route.delete('/task/:id', authorize, Controller.deleteTask)

module.exports = route
const route = require('express').Router()
const Controller = require('../controllers')
const authentication = require('../middlewear/authentication')
const authorize = require('../middlewear/authorize')

route.get('/', (req, res, next) => {
    res.status(200).json({message: 'home'})
})
route.post('/register', Controller.register)
route.post('/login', Controller.login)
route.post('/logingoogle', Controller.google)
route.use(authentication)
route.post('/task', Controller.createTask)
route.get('/task', Controller.listTask)
route.get('/task/:id', Controller.findById)
route.put('/task/:id', authorize, Controller.editTask)
route.delete('/task/:id', authorize, Controller.deleteTask)

module.exports = route
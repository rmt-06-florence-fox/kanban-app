const route = require('express').Router()
const UserController = require('../controllers/UserController')
const TaskController = require('../controllers/TaskController')
const authenticate = require('../middlewares/authenticate')
const authorization = require('../middlewares/authorization')

route.get('/', function(req, res, next) {
    res.status(200).json({
        msg: 'welcome to heroku'
    })
}) 

route.post('/login', UserController.login)
route.post('/register', UserController.register)
route.post('/googleSign', UserController.googleLogin)

route.use(authenticate)
route.get('/tasks', TaskController.show)
route.post('/tasks', TaskController.create)
route.get('/tasks/:id', authorization, TaskController.getUser)
route.put('/tasks/:id', authorization, TaskController.edit)
route.delete('/tasks/:id', authorization, TaskController.delete)

module.exports = route
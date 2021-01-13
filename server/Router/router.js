const router = require('express').Router()
const TasksController = require('../Controller/tasksController')
const UserController = require('../Controller/userController')
const authentication = require('../midlleware/authentication')
const authorization = require('../midlleware/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

router.use(authentication)
router.get('/tasks', TasksController.getTask)
router.get('/tasks/:id', TasksController.getTaskById)
router.post('/tasks', TasksController.createTask)
router.put('/tasks/:id',authorization, TasksController.editTask)
router.delete('/tasks/:id', authorization, TasksController.deleteTask)

module.exports = router
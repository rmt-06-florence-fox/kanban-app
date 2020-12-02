const router = require('express').Router()
const TasksController = require('../Controller/tasksController')
const UserController = require('../Controller/userController')

router.post('/register', UserController.register)
// router.post('/login', UserController)

// router.get('/tasks', Controller)
// router.post('/tasks', Controller)
// router.put('/tasks/:id', Controller)
// router.delete('/tasks/:id', Controller)

module.exports = router
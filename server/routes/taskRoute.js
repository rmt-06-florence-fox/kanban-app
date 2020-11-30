const TaskController = require('../controllers/TaskController')

const route= require('express').Router()
const authorization = require('../middleware/authorization')

route.post('/', TaskController.createTask)
route.get('/', TaskController.getTask)
route.get('/:id', TaskController.getTaskById)

route.put('/:id', authorization, TaskController.modifyTask)
route.patch('/:id', authorization, TaskController.updateTask)
route.delete('/:id', authorization, TaskController.deleteTask)

module.exports = route
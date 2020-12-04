const taskRouter = require('express').Router()
const authentication = require('../middlewares/authentication')
const TaskController = require('../controllers/taskController')
const authorization = require('../middlewares/authorization')

taskRouter.use(authentication)
taskRouter.post('/', TaskController.createTask)
taskRouter.get('/', TaskController.getAllTask)
taskRouter.use('/:id', authorization)
taskRouter.get('/:id', TaskController.findTask)
taskRouter.put('/:id', TaskController.replaceTask)
taskRouter.patch('/:id', TaskController.modifyTask)
taskRouter.delete('/:id', TaskController.deleteTask)

module.exports = taskRouter
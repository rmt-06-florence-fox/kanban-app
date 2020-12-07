const TaskController = require('../controllers/TaskController')
const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', TaskController.findAll)

router.use(authentication)

router.post('/', TaskController.addTask)
router.put('/:id', authorization,  TaskController.updateTask)
router.post('/:id', authorization, TaskController.TaskById)
router.delete('/:id', authorization, TaskController.deleteTask)

module.exports = router


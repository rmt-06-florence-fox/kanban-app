const express = require('express')
const router = express.Router()
const { TaskController } = require('../controllers/index')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.getTasks)
router.post('/', TaskController.createTask)
router.put('/:id', authorization, TaskController.updateTask)
router.delete('/:id', authorization, TaskController.deleteTask)

module.exports = router 
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task-controller')
const authorization = require('../middlewares/authorize')

router.post('/', TaskController.addTask)
router.get('/', TaskController.showAll)
router.put('/', authorization, TaskController.updateTask)
router.delete('/', authorization, TaskController.delete)

module.exports = router
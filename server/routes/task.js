console.log('start in routing task');
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')
const authorization = require('../middlewares/authorization')

router.get('/tasks', TaskController.show)
router.post('/tasks', TaskController.create)

router.use('tasks/:id', authorization)
router.put('/tasks/:id', TaskController.edit)
router.delete('/tasks/:id', TaskController.delete)

module.exports = router
console.log('end in routing task');
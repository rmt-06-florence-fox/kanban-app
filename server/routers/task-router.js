const router = require('express').Router()
const TaskController = require('../controllers/task-controller')

router.get('/', TaskController.retrieve)
router.post('/', TaskController.create)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.delete)

module.exports = router
const router = require('express').Router()
const TaskController = require('../controllers/task-controller')
const authorization = require('../middlewares/authorization')

router.get('/', TaskController.retrieve)
router.post('/', TaskController.create)

router.use('/:id', authorization)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.delete)
router.patch('/:id', TaskController.alterCategory)

module.exports = router
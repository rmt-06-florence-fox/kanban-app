const router = require('express').Router()
const taskController = require('../controllers/task')
const authorization = require('../middlewares/authorization')

router.post('/', taskController.addTask)
router.get('/', taskController.findAll)
router.get('/:id', authorization, taskController.getById)
router.put('/:id', authorization, taskController.updateTask)
router.patch('/:id', authorization, taskController.updateStatus)
router.delete('/:id', authorization, taskController.del)

module.exports = router
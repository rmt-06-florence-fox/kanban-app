const router = require('express').Router()
const ControllerTask = require('../controllers/ControllerTask')
const authorize = require('../middlewares/authorize')

router.get('/', ControllerTask.getTask)
router.post('/', ControllerTask.addTask)

router.use('/:id', authorize)
router.patch('/:id', ControllerTask.patchTask)
router.put('/:id', ControllerTask.updateTask)
router.delete('/:id', ControllerTask.deleteTask)

module.exports = router
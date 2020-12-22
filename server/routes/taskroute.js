const router = require('express').Router()
const TaskController = require('../controllers/taskcontroller')
const { authentication, authorization } = require('../middlewares')

router.use(authentication)
router.get('/', TaskController.getTask)
router.post('/', TaskController.createTask)

router.use('/:id', authorization)
router.put('/:id', TaskController.editTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router
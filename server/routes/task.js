const router = require('express').Router()
const { TaskController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.getTask)
router.post('/', TaskController.createTask)

router.use('/:id', authorization)
router.get('/:id', TaskController.getOneTask)
router.put('/:id', TaskController.editTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router
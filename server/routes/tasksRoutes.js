const router = require('express').Router()
const { TaskController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.readTask)
router.post('/', TaskController.addTask)
router.delete('/:id', authorization, TaskController.deleteTask)



module.exports = router
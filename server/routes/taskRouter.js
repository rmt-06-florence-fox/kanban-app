const router = require('express').Router()
const taskController = require('../controllers/taskController.js')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

router.use(authentication)
router.post('/', taskController.addTask)
router.get('/', taskController.listAll)

router.use(authorization)
router.get('/:id', taskController.find)
router.put('/:id', taskController.edit)
router.patch('/:id', taskController.modify)
router.delete('/:id', taskController.delete)

module.exports = router
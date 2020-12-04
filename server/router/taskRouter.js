
const express = require('express')
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')
const otorisesion = require('../middlewares/autorisesion')
const router = express.Router()

router.use(authentication)

router.post('/', TaskController.addtask)
router.get('/',TaskController.showtask)
router.get('/category',TaskController.showCategory)
router.get('/:id', TaskController.findIdtask)

router.use('/:id',otorisesion)
router.put('/:id', TaskController.edittask)
router.patch('/:id', TaskController.changeCategory)
router.delete('/:id', TaskController.deletetask)

module.exports = router
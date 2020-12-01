const { resolveInclude } = require('ejs')
const express = require('express')
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')
const otorisesion = require('../middlewares/autorisesion')
const router = express.Router()

router.use(authentication)

router.post('/', TaskController.addtask) //add
router.get('/',TaskController.showtask) //show all
router.get('/:id', TaskController.findIdtask)

router.use('/:id',otorisesion)
router.put('/:id', TaskController.edittask) //updateall
router.delete('/:id', TaskController.deletetask)

module.exports = router
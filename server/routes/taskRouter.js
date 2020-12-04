const express = require('express')
const router = express.Router()
const {TaskController} = require('../controllers/allController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/',TaskController.createTask)
router.get('/',TaskController.readAllTask)
router.delete('/:id',authorization,TaskController.deleteTask)
router.put('/:id',authorization,TaskController.updateTask)

module.exports = router
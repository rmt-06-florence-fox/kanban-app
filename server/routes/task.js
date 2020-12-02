console.log('start in routing task');
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')
const authorization = require('../middlewares/authorization')

router.get('/', TaskController.show)
router.post('/', TaskController.create)

router.use('/:id', authorization)
router.put('/:id', TaskController.edit)
router.patch('/:id', TaskController.move)
router.delete('/:id', TaskController.delete)
  
module.exports = router
console.log('end in routing task');
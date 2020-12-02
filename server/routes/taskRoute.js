const route = require('express').Router()
const { TaskController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

//task route
route.use(authentication)
route.post('/',TaskController.postTask)
route.get('/',TaskController.getTask)


route.get('/:id',TaskController.getTaskId)
//authorization belum
route.put('/:id', authorization,TaskController.putTask)
route.patch('/:id', authorization,TaskController.patchTask)
route.delete('/:id', authorization,TaskController.deleteTask)




module.exports = route
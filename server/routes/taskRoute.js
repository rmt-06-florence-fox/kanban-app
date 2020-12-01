const route = require('express').Router()
const {TaskController} = require('../controller')
const authentication = require('../midleware/authentication')
const authorization = require('../midleware/authorization')

route.use(authentication)

route.get('/', TaskController.getAllTask)
route.post('/', TaskController.addNewTask)

route.use('/:id',authorization)

route.put('/:id',TaskController.replaceTask)
route.patch('/:id',TaskController.modifiedTask)
route.delete('/:id',TaskController.destroyTask)

module.exports = route

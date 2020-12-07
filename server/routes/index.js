const mainRouter = require('express').Router()
const userRouter = require('./user');
const taskRouter = require('./task')

mainRouter.use('/tasks', taskRouter)
mainRouter.use('/', userRouter)

module.exports = mainRouter;
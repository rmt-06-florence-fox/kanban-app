const route = require('express').Router()
const userRoute = require('./userRoute')
const taskRoute = require('./taskRoute')

route.use(userRoute)
route.use('/tasks',taskRoute)


module.exports = route
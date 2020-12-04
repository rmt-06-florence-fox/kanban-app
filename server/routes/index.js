const route = require('express').Router()
const userRoute = require('./userRoute')
const taskRoute = require('./taskRoute')

route.get('/', (req,res) =>{
    res.send('hello')
})
route.use('/',userRoute)
route.use('/task',taskRoute)
module.exports = route
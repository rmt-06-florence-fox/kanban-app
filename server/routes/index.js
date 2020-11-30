const router = require('express').Router()
const taskRoutes = require('./task')
const userRoutes = require('./user')

router.use('/', userRoutes)
router.use('/tasks', taskRoutes)

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router
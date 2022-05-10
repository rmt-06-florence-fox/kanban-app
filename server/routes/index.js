console.log('start in routing index');
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const taskRouter = require('./task')
const categoryRouter = require('./category') 
const authentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
  res.send('server kanban board')
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleSignIn);

router.use(authentication)
router.use('/tasks', taskRouter)
router.use('/categories', categoryRouter)

module.exports = router
console.log('end in routing index');
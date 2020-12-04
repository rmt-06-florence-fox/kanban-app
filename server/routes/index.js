const router = require('express').Router()
const { UserController, TaskController } = require('../controllers/index')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// --- login routes ---

router.post('/signup', UserController.signup)
router.post('/signin', UserController.signin)
router.post('/google-sign-in', UserController.googleSignIn)

router.use(authentication)

router.get('/tasks', TaskController.getAll)
router.get('/tasks/:id', authorization, TaskController.getOne)
router.post('/tasks', TaskController.add)
router.put('/tasks/:id', authorization, TaskController.edit)
router.delete('/tasks/:id', authorization, TaskController.delete)

module.exports = router
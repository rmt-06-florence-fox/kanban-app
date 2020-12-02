
const router = require('express').Router()
const { UserController, TaskController } = require('../controllers')
const {Authentication, Authorization} = require('../middlewares')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
// router.post('/google-login', UserController.googleLogin)
// router.post('/', UserController.githubLogin)

router.use(Authentication)
router.get('/', TaskController.getAll)
router.post('/add', TaskController.create)

router.use('/:id',Authorization)


module.exports = router





const router = require ('express').Router()
const TaskController = require ('../controllers/taskcontroller')
const authentication = require ('../middlewares/authentication')
const authorization = require ('../middlewares/authorization.js')

router.use (authentication)
router.get ("/", TaskController.findTask)
router.post ("/", TaskController.addTask)
router.get ("/:id", authorization, TaskController.findTaskById)
router.patch ("/:id", authorization, TaskController.patchTask)
router.put ("/:id", authorization, TaskController.putTask)
router.delete ("/:id", authorization, TaskController.deleteTask)

module.exports = router
const express = require('express')
const router = express.Router()
const {TaskController} = require('../controllers/allController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/',TaskController.getAllTask)

module.exports = router
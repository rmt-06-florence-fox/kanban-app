const express = require('express')
const router = express.Router()
const {CategoryController} = require('../controllers/allController')
const authentication = require('../middlewares/authentication')


router.use(authentication)
router.post('/',CategoryController.createCategory)
router.get('/',CategoryController.readAllCategory)

module.exports = router
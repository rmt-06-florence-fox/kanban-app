const express = require("express")
const router = express.Router()
const userRouter = require("./user.js")
const taskRouter = require("./task.js")

router.use("/user", userRouter)
//router.use("/tasks", taskRouter)

module.exports = router
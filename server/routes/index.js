const express = require("express")
const route = express.Router()
const ControllerUser = require("../controllers/userControllers")

route.post("/register", ControllerUser.registerUser)
route.post("/login", ControllerUser.loginUser)
// route.get("/", (req, res) => {
//     res.send("-----------------")
// })

module.exports = route
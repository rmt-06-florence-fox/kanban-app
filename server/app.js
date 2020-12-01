const express = require("express")
const router = require("./routers/main")
const app = express()
const port = 3000
const cors = require("cors")
const errorHandler = require("./middlewares/errorhandlers")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log("App listening on port " + port)
})
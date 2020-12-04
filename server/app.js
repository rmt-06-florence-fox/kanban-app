const express = require("express")
const router = require("./routers/main")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const errorHandler = require("./middlewares/errorhandlers")
if(process.env.NODE_ENV === "development"){
  require("dotenv").config()
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log("App listening on port " + port)
})
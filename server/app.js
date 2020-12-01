if(process.env.NODE_ENV === "development") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const Port = process.env.PORT
var cors = require('cors')
const routes = require("./routes/index")


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

app.listen(Port, () => {
    console.log(`I LOVE YOU ${Port}`)
  })
if(process.env.NODE_ENV === "development") { // ---> ini taruh di app.js
    require("dotenv").config()
}

const exress = require("express")
const app = exress()
const Port = 3000
var cors = require('cors')
const routes = require("./routes/index")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

app.listen(Port, () => {
    console.log(`I LOVE YOU ${Port}`)
  })
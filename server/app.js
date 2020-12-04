if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require("./routes")
const errorHandler = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
app.use(errorHandler)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
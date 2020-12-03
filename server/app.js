require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const port = 3000
const errorHandler = require('./middlewares/errorHandler.js')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App is running on ${port}`)
})
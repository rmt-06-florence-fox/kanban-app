// require('dotenv').config()
if (process.env.NODE_ENV == 'development'){ require('dotenv').config() }
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
const errorHandler = require ('./middlewares/errorHandler')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
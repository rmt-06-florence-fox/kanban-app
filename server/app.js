require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const router = require('./routes/router')
const errorHandler = require('./middlewares/error-handler')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
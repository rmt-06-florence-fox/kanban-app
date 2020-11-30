require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())
app.get('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
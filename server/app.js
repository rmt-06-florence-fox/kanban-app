require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const route = require('./routes/index')


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', route)



app.listen(port, () => {
    console.log(`running on port: ${port}`)
})
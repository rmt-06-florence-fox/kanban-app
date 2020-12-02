const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const router = require('./Router/router')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//route
app.use('/', router)

app.listen(PORT, ()=> {
    console.log('this app on port ', PORT);
})


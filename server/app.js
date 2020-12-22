if (!process.env.NODE_ENV){
    console.log('masuk')
    require('dotenv').config()
}

const express = require('express')
const router = require('./routers')
const cors = require('cors')
const errorHandler = require('./middlewares/error-handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/', router)

app.use(errorHandler)
app.listen(port, _ => {console.log('port', port, ' is ready to fight')})
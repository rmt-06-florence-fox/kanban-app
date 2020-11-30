if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(route)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`this app running on localhost:${port}`)
})
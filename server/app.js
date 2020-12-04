if(process.env.NODE_ENV == 'development'){
}
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT  || 3000
const route = require('./routes')
const cors = require('cors')
const errorHandler = require('./midleware/erorHandler')
console.log(process.env.NODE_ENV,'ini process')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', route)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})



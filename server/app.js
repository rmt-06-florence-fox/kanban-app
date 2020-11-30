if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.route || 3000
const route = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/', route)

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})



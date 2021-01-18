// conditional env
if(process.env.NODE_ENV == "development") {
    require('dotenv').config()

}
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)


app.listen(port, () =>{
    console.log(`running on ${port}`)
})
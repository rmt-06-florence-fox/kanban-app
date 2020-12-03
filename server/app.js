const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes/index')


app.use(cors())
app.use(express.urlencoded({extended:true}))

app.get("/", routes)

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
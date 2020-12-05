require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

app.use(jsonParser);

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use("/",jsonParser, routes)


app.use(errorHandler)
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
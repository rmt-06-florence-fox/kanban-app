if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middlewares/errorhandler')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})
if(process.env.NODE_ENV != 'development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')
const errHandler = require('./middlewear/errhandler')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)
app.use(errHandler)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
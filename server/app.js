if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(route)

app.listen(port, () => {
    console.log('app running');
})
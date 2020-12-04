if (process.eventNames.NODE_ENV === 'development') {
    require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const route = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req, res) => res.send('nice'))
app.listen(port, _=> console.log(`this app running on port ${port}`))
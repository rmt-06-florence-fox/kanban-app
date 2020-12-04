if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is active and running at http://localhost:${port}`);
})
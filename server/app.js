if (process.env.NODE_ENV === "development") {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes/index')
const errorhandler = require('./middlewares/errorhandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)

app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
}) 
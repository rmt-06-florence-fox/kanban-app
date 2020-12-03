require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const Router = require('./Routes/index')
const errorhandler = require('./middleware/errorhandler')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(errorhandler)

app.use('/', Router)

app.listen(PORT, () =>{
  console.log(`listening at http://localhost:${PORT}`);
})

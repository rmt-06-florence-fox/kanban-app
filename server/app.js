if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/index')
const errorhandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req,res) => res.status(200).json({msg:"success"}))
app.use(router)
app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`This App running at http://localhost:${PORT}`)
})
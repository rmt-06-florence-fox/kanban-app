require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


//cek buat deploy
// app.get('/', (req,res) => res.status(200).json({
//     msg: 'halo semuanya'
// }))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`bismillah ${port}x`)
})
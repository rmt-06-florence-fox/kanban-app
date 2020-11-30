if (process.env.NODE_ENV === "development") {
  require('dotenv').config();
}
const express = require('express');
const errorHandler = require('./middlewares/errorHandler.js');
const router = require('./routes/index.js')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listen at`, PORT)
})
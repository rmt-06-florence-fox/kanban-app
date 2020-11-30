const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use(express.urlencoded({extended : false}))
app.use(router)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
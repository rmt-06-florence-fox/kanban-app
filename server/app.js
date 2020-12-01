const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.get("/", (req,res) => {
    res.send('hello world')
})

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
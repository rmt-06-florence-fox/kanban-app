if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({msg:'Hello World from server'})
})

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})
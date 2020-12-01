if(process.env.NODE_ENV==='development')
   require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors')
const indexRouter = require('./routes/indexRouter')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// app.get('/',(req,res) => {
//    res.status(200).json({data:'Hello'})
// })
app.use('/',indexRouter)

app.listen(PORT,() => {
   console.log(`Listening on http://localhost:${PORT}`);
})




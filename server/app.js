if (process.env.NODE_ENV !== 'production'){
  console.log('a');
  require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/', (req,res)=>{ res.send('adsda') })


app.listen(port, ()=>{
  console.log(port);
})
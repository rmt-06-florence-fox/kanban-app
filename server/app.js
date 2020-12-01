if (process.env.NODE_ENV !== 'production'){
  console.log('a');
  require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000
const app = express();
const router = require('./routers')
const errorHandler = require('./middlewares/errorhandler')

app.use(cors());
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.use('/', router)

app.use(errorHandler)
app.listen(port, ()=>{
  console.log(port);
})
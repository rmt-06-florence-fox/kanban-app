if(process.env.NODE_ENV === "development"){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routers');
const cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes/index");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use(routes);

app.listen(PORT, ()=> {
    console.log("Application is running on http://localhost:"+PORT);
})
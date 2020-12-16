if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const routes = require("./Routes")
// console.log(process.env.NODE_ENV)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use("/", routes)

app.use((err, req, res, next) => {
    console.log("Masuk Error Handler")
    console.log(err)
    if(err.name === "SequelizeValidationError") {
        res.status(401).json({msg: err.errors[0].message})
    } else if (err.name === "Login First") {
        res.status(401).json({msg: err.name})
    } else if (err.name === "Invalid Account") {
        res.status(401).json({msg: err.name})
    } else if(err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({msg: err.errors[0].message})
    } else if(err.name === "Authorized") {
        res.status(401).json({msg: "You not autorization"})
    } else if (err.name === "DataNotFound") {
        res.status(404).json({msg: "Data Not Found"})
    } else {
        res.status(500).json({msg: "Internal Service Error"})
    }
})

app.listen(port, () => {
    console.log("listen to http://localhost:" + port)
})
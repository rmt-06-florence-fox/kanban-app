if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
// const routes = require("./Routes")
// console.log(process.env.PORT)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
// app.use("/", routes)
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"})
})

app.listen(port, () => {
    console.log("listen to http://localhost:" + port)
})
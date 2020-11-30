if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
// const routes = require("./Routes")

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
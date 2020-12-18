const http = require("http")
const app = require("./app.js")
const server = http.createServer(app)
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Listening in : http://localhost:${PORT}`);
})
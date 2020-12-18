if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const errorHandler = require("./middlewares/errorHandler.js");
const routes = require("./routes/index.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.listen(PORT, (_) => {
  console.log(`listen at`, PORT);
});

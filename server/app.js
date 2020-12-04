if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require(`./routes`);
const errorHandler = require("./middlewares/error-handler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(`/`, routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

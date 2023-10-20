const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/config");

const route = require("./routes/productRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
// app.get("", (req, res) => {
//   res.send("hello");
// });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", route);

app.listen(8080, () => {
  console.log("port 8080");
});

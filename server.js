const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const { use } = require("express/lib/application");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_KEY,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB CONECTADO com sucesso!");
    }
  }
);

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(routes);

app.get("/", function (req, res) {
  res.json({ menssage: "Hello World" });
});

app.get("/home", function (req, res) {
  res.json({ menssage: "Home" });
});

app.listen(port, function () {
  console.log(`server runing on port ${port}`);
});

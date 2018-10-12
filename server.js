const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressServer = express();
const router = require("./route");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true }
);

mongoose.connection
  .once("open", () => console.log("Connected to database"))
  .on("error", error => console.log("Connexion to database fail"));

expressServer.use(morgan("combined"));
expressServer.use(
  bodyParser.json({
    type: "*/"
  })
);

const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);

server.listen(port);
console.log("le serveru écoute sur le port :", port);

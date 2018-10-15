require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressServer = express();
const router = require("./route");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

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
    type: "*/*"
  })
);
expressServer.use(cors());

const server = http.createServer(expressServer);
router(expressServer);

server.listen(process.env.PORT);
console.log("Le serveur écoute sur le port :", process.env.PORT);

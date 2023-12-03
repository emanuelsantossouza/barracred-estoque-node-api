require("dotenv").config({ path: "variaveis.env" });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // converso de formatos

const routes = require("./routes/route");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/api", routes);


module.exports = server;
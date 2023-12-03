const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // converso de formatos
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

module.exports = server;
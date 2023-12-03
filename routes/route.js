//routing for local development server (devServer.js)

const routes = require("express").Router();

const pessoa = require("./pessoaRota");

routes.use("/", pessoa);

module.exports = routes;
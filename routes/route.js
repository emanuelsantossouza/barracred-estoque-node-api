//routing for local development server (devServer.js)

const routes = require("express").Router();

const pessoa = require("./pessoaRota");

routes.get("/", async function (req, res) {
    //homepage route returns some HTML
    res.send(`<h1>Reached home!</h1> 
            <br>
            <a href='/carros'>Carros</a>`);
});

routes.use("/", pessoa);

module.exports = routes;
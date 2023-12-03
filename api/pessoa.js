const servidor = require('../index');
const route = require('../routes/route.js');

servidor.use("/api", route);

module.exports = servidor;
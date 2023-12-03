const servidor = require('../app');
const route = require('../routes/route.js');

servidor.use("/api", route);

module.exports = servidor;
const servidor = require('../index');
const route = require('../routes/route');

servidor.get('/pessoa', route);
servidor.post('/pessoa', route);
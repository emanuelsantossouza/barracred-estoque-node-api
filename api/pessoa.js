const servidor = require('../index');
const pessoaRota = require('../routes/pessoaRota');
const route = require('../routes/route');

servidor.get('/pessoas', route);
servidor.post('/pessoa', route);
const servidor = require('../src/index');
const pessoaRota = require('../src/routes/pessoaRota');

ervidor.get('/pessoas', pessoaRota);
servidor.post('/pessoa', pessoaRota);
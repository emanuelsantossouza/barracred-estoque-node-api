const servidor = require('../index');
const pessoaRota = require('../routes/pessoaRota');

ervidor.get('/pessoas', pessoaRota);
servidor.post('/pessoa', pessoaRota);
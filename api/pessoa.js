const servidor = require('../index');
const pessoaRota = require('../routes/pessoaRota');

servidor.get('/pessoas', pessoaRota);
servidor.post('/pessoa', pessoaRota);
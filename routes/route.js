const express = require('express');
const router = express.Router();

const PessoaController = require('../src/controller/PessoaController');

router.get('/pessoas', PessoaController.buscarTodos);
router.get('/pessoa/:pessoaId', PessoaController.buscarUm);
router.post('/pessoa', PessoaController.cadastrarUsuario);
router.put('/pessoa/:pessoaId', PessoaController.editarUsuario);
router.delete('/pessoa/:pessoaId', PessoaController.excluirUsuario);

module.exports = router;  
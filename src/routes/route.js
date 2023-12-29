const express = require('express');
const router = express.Router();

const PessoaController = require('../controller/PessoaController');
const PedidoController = require('../controller/PedidoController');
const ProdutoController = require('../controller/ProdutoController');

const body = {
    cargo: 0,
    contato: '',
    email: '',
    id: 0,
    nomeCompleto: '',
    senha: '',
    confirmarSenha: '',
}


// Pessoa Ou usuario
router.get('/pessoas', PessoaController.buscarTodos);
router.get('/pessoa/:pessoaId', PessoaController.buscarUm);
router.get('/pessoa/email/:pessoaEmail', PessoaController.buscarPorEmail);
router.post('/pessoa', PessoaController.cadastrarUsuario,);
router.put('/pessoa/:pessoaId', PessoaController.editarUsuario);
router.delete('/pessoa/:pessoaId', PessoaController.excluirUsuario);

// Pedido
router.get('/pedidos', PedidoController.buscarTodos);
router.get('/pedido/:id', PedidoController.buscarUm);
router.post('/pedido', PedidoController.cadastarPedido);

// Produto
router.get('/produtos', ProdutoController.buscarTodos);
// router.get('/produto/:id', ProdutoController.buscarTodos());
// router.post('/produto', ProdutoController.buscarTodos());

module.exports = router;  
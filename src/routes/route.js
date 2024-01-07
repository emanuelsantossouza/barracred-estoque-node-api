const express = require('express');
const router = express.Router();

const PessoaController = require('../controller/PessoaController');
const PedidoController = require('../controller/PedidoController');
const ProdutoController = require('../controller/ProdutoController');
const FuncionarioController = require('../controller/FuncionarioController');


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
router.get('/produto/id/:produtoId', ProdutoController.buscarUm);
router.get('/produto/unidades/:unidadesEstoque', ProdutoController.buscarProdutoUnidadeNoEstoque);
router.get('/produto/categoria/:categoriaProduto', ProdutoController.buscarProdutoCategoria);
router.get('/produto/nome/:nomeProduto', ProdutoController.buscarProdutoNome);
router.post('/produto', ProdutoController.cadastrarProduto);

// Funcionario
router.get('/funcionarios', FuncionarioController.buscarTodosFuncionarios);
router.post('/funcionario', FuncionarioController.cadastrarFuncionario);

module.exports = router;  
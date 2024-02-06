const db = require('../data/db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeito) => {
            db.query('SELECT *FROM pedidos', (error, results) => {
                if (error) { rejeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },

    buscarUm: (produtoId) => {
        return new Promise((aceito, reijeto) => {
            db.query('SELECT *FROM pedidos WHERE id=?', [produtoId], (error, results) => {
                if (error) { reijeto(error); return; }
                if (results)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },


    cadastrarPedido: (descricaoPedido, funcionarioId, produtoId, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantidade) => {
        return new Promise((aceito, rejeito) => {
            db.query('INSERT INTO pedidos (descricaoPedido, funcionarioId, produtoId, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantasUnidades) VALUES (?, ?, ?, ?, ? ,? ,? ,? ,?)',
                [descricaoPedido, funcionarioId, produtoId, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantidade], (error, results) => {
                    if (error) { rejeito(error); return; }
                    aceito(results.insertId);
                }
            );
        });
    },

    atualizarStatus: (pedidoId, novoStatus) => {
        return new Promise((aceito, rejeito) => {
            db.query('UPDATE pedidos SET status=? WHERE id=?', [novoStatus, pedidoId], (error, results) => {
                if (error) { rejeito(error); return; }
                aceito(true);
            });
        });
    }
}
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


    cadastrarPedido: (nomeProduto, descricaoPedido, quantidade, status, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, ) => {
        return new Promise((aceito, rejeito) => {
            db.query('INSERT INTO pedidos (nomeProduto, descricaoPedido, preco, quantidade) VALUES (?, ?, ?, ?)',
                [nomeProduto, descricaoPedido, quantidade, status, nivelUrgencia, qualPredio, qualData, novoProduto,produtoPadrao,  preco, quantidade], (error, results) => {
                    if (error) { rejeito(error); return; }
                    aceito(results.insertId);
                }
            );
        });
    }
}
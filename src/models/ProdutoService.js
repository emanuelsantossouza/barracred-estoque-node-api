const db = require('../data/db');

module.exports = {

    buscarTodos: () => {

        return new Promise((aceito, rejeito) => {

            db.query('SELECT *FROM produtos', (error, results) => {
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
            db.query('SELECT *FROM produtos WHERE id=?', [produtoId], (error, results) => {
                if (error) { reijeto(error); return; }
                if (results)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },

    buscarProdutoNome: (nomeProduto) => {
        return new Promise((aceito, rejeito) => {
            db.query('SELECT *FROM produtos WHERE nomeProduto like "%"?"%" ', [nomeProduto], (error, results) => {
                if (error) { rejeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        })
    },

    buscarProdutoUnidadesHaEstoque: (unidadesEstoque) => {
        return new Promise((aceito, rejeito) => {
            db.query('SELECT *FROM produtos WHERE unidadesHaEstoque <= ? ', [unidadesEstoque], (error, results) => {
                if (error) { rejeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        })
    },

    buscarProdutoCategoria: (categoriaProduto) => {
        return new Promise((aceito, rejeito) => {
            db.query('SELECT *FROM produtos WHERE categoria like "%"?"%" ', [categoriaProduto], (error, results) => {
                if (error) { rejeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        })
    },

    cadastrarProduto: (nomeProduto, peso, altura, marca, isFragil, categoria, descricao, imagem, cor, unidadesHaEstoque) => {
        return new Promise((aceito, rejeito) => {
            db.query('INSERT INTO produtos (nomeProduto, pesoProduto, alturaProduto, marcaProduto, isFragil, categoria, descricaoProduto, imagem, cor, unidadesHaEstoque) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [nomeProduto, peso, altura, marca, isFragil, categoria, descricao, imagem, cor, unidadesHaEstoque], (error, results) => {
                    if (error) { rejeito(error); return; }
                    aceito(results.insertId);
                });
        });
    }
}
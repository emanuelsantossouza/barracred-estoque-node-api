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

    buscarUm: () => {
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
    }
}
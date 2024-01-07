const db = require('../data/db');

module.exports = {
    buscarTodosFuncionarios: () => {
        return new Promise((aceito, rejeito) => {

            db.query('SELECT *FROM funcionarios', (error, results) => {
                if (error) { rejeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },

    cadastrarFuncionario: (id) => {
        return new Promise((aceito, rejeito) => {
            db.query('INSERT INTO funcionarios (funcionario_id) VALUES (?)',
                [id],
                (error, results) => {
                    if (error) { rejeito(error); return; }
                    aceito(results.insertId);
                }
            );
        });
    }
}
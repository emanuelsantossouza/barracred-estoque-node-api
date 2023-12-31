const db = require('../data/db');

module.exports = {

    buscarTodos: () => {
        return new Promise((aceito, rejeito) => {

            db.query('SELECT *FROM carros', (error, results) => {
                if (error) { rejeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },

    buscarUm: (pessoaId) => {
        return new Promise((aceito, reijeto) => {
            db.query('SELECT *FROM pessoas WHERE id=?', [pessoaId], (error, results) => {
                if (error) { reijeto(error); return; }
                if (results)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },

    buscarPessoaEmail: (pessoaEmail) => {
        return new Promise((aceito, reijeito) => {
            db.query('SELECT *FROM pessoas WHERE email=?', [pessoaEmail], (error, results) => {
                if (error) { reijeito(error); return; }
                if (results.length > 0)
                    aceito(results);
                else {
                    aceito(false);
                }
            });
        });
    },

    cadastrarUsuario: (nomeCompletoPessoa, contato, cargo, email, senha) => {
        return new Promise((aceito, rejeito) => {
            db.query('INSERT INTO pessoas (nomeCompletoPessoa, contato, cargo, email, senha) VALUES (?, ?, ?, ?, ?)',
                [nomeCompletoPessoa, contato, cargo, email, senha],
                (error, results) => {
                    if (error) { rejeito(error); return; }
                    aceito(results.insertId);
                }
            );
        });
    },

    editarUsuario: (id, nomeCompletoPessoa, contato, cargo, email, senha) => {
        return new Promise((aceito, rejeito) => {
            db.query('UPDATE pessoas SET nomeCompletoPessoa=?, contato=?, cargo=?, email=?, senha=? WHERE id=?',
                [nomeCompletoPessoa, contato, cargo, email, senha, id],
                (error, results) => {
                    if (error) { rejeito(error); return; }
                    aceito(results);
                }
            );
        })
    },

    excluirUsuario: (pessoaId) => {
        new Promise((aceito, rejeito) => {
            db.query('DELETE FROM pessoas WHERE id=?', [pessoaId], (error, results) => {
                if (error) { rejeito(error); return; }
                aceito(results);
            })
        })
    }
};
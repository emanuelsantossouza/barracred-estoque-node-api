const PessoaService = require('../models/PessoaService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { erro: '', resultado: [] };

        let pessoas = await PessoaService.buscarTodos();

        for (let i in pessoas) {
            json.resultado.push({
                id: pessoas[i].id,
                nomeCompletoPessoa: pessoas[i].nomeCompletoPessoa,
                contato: pessoas[i].contato,
                cargo: pessoas[i].cargo,
                email: pessoas[i].email,
                senha: pessoas[i].senha
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { erro: '', resultado: {} };

        let pessoaId = req.params.pessoaId;
        console.log(pessoaId);
        let pessoa = await PessoaService.buscarUm(pessoaId);

        if (pessoa != false) {
            json.resultado = pessoa;
            res.status(200);
        } else {
            json.erro = 'Pessoa não encontrada, Id Invalido';
            res.status(500);
        }
        res.json(json);
    },

    buscarPorEmail: async (req, res) => {
        let json = { error: '', resultado: {} };

        let pessoaEmail = req.params.pessoaEmail;
        console.log(pessoaEmail);

        let pessoa = await PessoaService.buscarPessoaEmail(pessoaEmail);
        console.log(pessoa);

        if (pessoa != false) {
            json.resultado = pessoa;
            res.status(200);
        } else {
            json.error = 'Pessoa não encontrada, Email Invalido';
            res.status(404);
        }
        res.json(json);
    },

    cadastrarUsuario: async (req, res) => {
        console.log("entrou aquii");
        
        console.log(req.body);
        let json = { error: '', resultado: {} }

        let nomeCompleto = req.body.nomeCompleto;
        let contato = req.body.contato;
        let cargo = req.body.cargo;
        let email = req.body.email;
        let senha = req.body.senha;
        let confirmarSenha = req.body.confirmarSenha;

        console.log(nomeCompleto, contato, cargo, email, senha);

        if (nomeCompleto && contato && cargo && email && senha && confirmarSenha) {
            
            let pessoaId = await PessoaService.cadastrarUsuario(nomeCompleto, contato, cargo, email, senha);
            json.resultado = {
                id: pessoaId,
                nomeCompleto,
                contato,
                cargo,
                email,
                senha
            };
        } else {
            json.error = 'Campos não enviados, Invalidos';
        }
        res.json(json);
    },

    editarUsuario: async (req, res) => {
        let json = { error: '', resultado: {} }
        let pessoaId = req.params.pessoaId;

        let id = req.body.id;
        let nomeCompletoPessoa = req.body.nomeCompletoPessoa;
        let contato = req.body.contato;
        let cargo = req.body.cargo;
        let email = req.body.email;
        let senha = req.body.senha;

        if (id && nomeCompletoPessoa && contato && cargo && email && senha) {
            await PessoaService.editarUsuario(pessoaId, nomeCompletoPessoa, contato, cargo, email, senha);
            json.resultado = {
                id: id,
                nomeCompletoPessoa,
                contato,
                cargo,
                email,
                senha
            };
        } else {
            json.error = 'Campos não enviados, Invalidos';
        }
        res.json(json);
    },

    excluirUsuario: async (req, res) => {
        let json = { error: '', resultado: {} }
        await PessoaService.excluirUsuario(req.params.pessoaId);

        res.json(json);
        res.status(200);
    }
}

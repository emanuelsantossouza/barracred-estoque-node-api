const servidor = require('express').Router();
const pessoaService = require('../models/PessoaService');



servidor.get('/pessoa', async (req, res) => {
    let json = { error: '', result: [] }

    try {
        const buscarPessoas = await pessoaService.buscarTodos();

        json = {
            error: '',
            result: buscarPessoas.map(carro => ({
                codigo: carro.codigo,
                descricao: carro.modelo,
                placa: carro.placa
            }))
        };

        res.status(200);
        return res.json(json);
        // id: buscarPessoas[i].id,
        // nomeCompletoPessoa: buscarPessoas[i].nomeCompletoPessoa,
        // contato: buscarPessoas[i].contato,
        // cargo: buscarPessoas[i].cargo,
        // email: buscarPessoas[i].email,
        // senha: buscarPessoas[i].senha

    } catch (error) {
        json.error = error;
        console.log(error);
        return res.status(500);
    };
})

module.exports = servidor;
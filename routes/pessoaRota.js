const servidor = require('express').Router();
const pessoaService = require('../models/PessoaService');



servidor.get('/pessoa', async (req, res) => {
    let json = { error: '', result: [] }

    try {
        const buscarPessoas = await pessoaService.buscarTodos();

        for (let i; i < buscarPessoas.length; i++) {
            json.result.push({
                codigo: buscarPessoas[i].codigo,
                modelo: buscarPessoas[i].modelo,
                placa: buscarPessoas[i].placa,
                // id: buscarPessoas[i].id,
                // nomeCompletoPessoa: buscarPessoas[i].nomeCompletoPessoa,
                // contato: buscarPessoas[i].contato,
                // cargo: buscarPessoas[i].cargo,
                // email: buscarPessoas[i].email,
                // senha: buscarPessoas[i].senha
            });
        }
        
        res.status(200);
        return res.json(json.result);
    } catch (error) {
        json.error = error;
        console.log(error);
        return res.status(500);
    };
})

module.exports = servidor;
const servidor = require('../index');
const pessoaService = require('../models/PessoaService');

servidor.get('/pessoas', async (req, res) => {
    let json = { error: '', result: [] }

    try {
        const buscarPessoas = await pessoaService.buscarTodos();

        for (let i; i < buscarPessoas.length; i++) {
            json.result.push({
                id: buscarPessoas[i].id,
                nomeCompletoPessoa: buscarPessoas[i].nomeCompletoPessoa,
                contato: buscarPessoas[i].contato,
                cargo: buscarPessoas[i].cargo,
                email: buscarPessoas[i].email,
                senha: buscarPessoas[i].senha
            });
        }
        res.status(200);
    } catch (error) {
        json.error = error;
        res.status(500);
        console.log(error);
    };

    res.json(json);
})
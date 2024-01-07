const FuncionarioService = require('../models/FuncionarioService');

module.exports = {
    buscarTodosFuncionarios: async (req, res) => {
        let json = { erro: '', resultado: [] };

        let funcionarios = await FuncionarioService.buscarTodosFuncionarios();

        if (funcionarios) {
            for (let i in funcionarios) {
                json.resultado.push({
                    id: funcionarios[i].id,
                    nome: funcionarios[i].nome,
                    email: funcionarios[i].email,
                    senha: funcionarios[i].senha,
                    cpf: funcionarios[i].cpf,
                    telefone: funcionarios[i].telefone,
                    endereco: funcionarios[i].endereco,
                    cargo: funcionarios[i].cargo,
                    salario: funcionarios[i].salario,
                    image: funcionarios[i].image,
                });
            }
        } else {
            json.erro = 'Nenhum funcionario encontrado!';
        }
    },

    cadastrarFuncionario: async (req, res) => {
        let json = { error: '', resultado: {}, status: 0 };

        let funcionarioId = req.body.funcionarioId;
        console.log("id: " + funcionarioId);

        if (funcionarioId) {
            await FuncionarioService.cadastrarFuncionario(funcionarioId);
            res.status(200);
            json.status = 200;
            } else {
                json.error = 'Erro ao cadastrar produto';
                res.status(400);
            }
        res.json(json.status);
    }
}
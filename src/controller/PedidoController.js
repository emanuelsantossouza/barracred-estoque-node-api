const PedidoService = require('../models/PedidoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { erro: '', resultado: [], status: 0 };

        const pedidos = await PedidoService.buscarTodos();

        if (pedidos) {
            for (let i in pedidos) {
                json.resultado.push({
                    id: pedidos[i].id,
                    status: pedidos[i].status,
                    descricaoPedido: pedidos[i].descricao,
                    quantasUnidades: pedidos[i].quantasUnidades,
                    motivoPedido: pedidos[i].motivo,
                    nivelUrgencia: pedidos[i].nivelUrgencia,
                    qualPredio: pedidos[i].qualPredio,
                    qualData: pedidos[i].qualData,
                    novoProduto: pedidos[i].novoProduto,
                    produtoPadrao: pedidos[i].produtoPadrao,
                    produtoId: pedidos[i].produtoId,
                    funcionarioId: pedidos[i].funcionarioId
                });
            }
            json.status = 200;
        } else {
            res.status(404);
            json.erro = 'Nenhum pedido encontrado!';
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {

        let json = { erro: '', resultado: {}, status: 0 };
        const pedidoId = req.params.id;

        if (pedidoId != undefined || pedidoId != null || pedidoId != '') {
            json.resultado = await PedidoService.buscarUm(pedidoId);

            if (json.resultado != false) {
                json.status = 200;
                res.json(json);
            }
            else
                res.status(404).json({ erro: 'Pedido não encontrado!' });

        }
    },

    cadastarPedido: async (req, res) => {

        let json = { error: '', resultado: {}, status: 0 };

        let descricaoPedido = req.body.descricaoPedido;
        let nivelUrgencia = req.body.nivelUrgencia;
        let quantasUnidades = req.body.quantasUnidades;
        let produtoPadrao = req.body.produtoPadrao;
        let novoProduto = req.body.novoProduto;
        let qualPredio = req.body.qualPredio;
        let qualData = req.body.qualData;
        let produtoId = req.body.produtoId;
        let funcionarioId = req.body.funcionarioId;

        if (descricaoPedido, funcionarioId, produtoId, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantasUnidades) {

            let pedidoId = await PedidoService.cadastrarPedido(descricaoPedido, funcionarioId, produtoId, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantasUnidades);
            json.resultado = {
                id: pedidoId,
                descricaoPedido,
                nivelUrgencia,
                qualPredio,
                qualData,
                novoProduto,
                produtoPadrao,
                quantasUnidades,
                funcionarioId,
                produtoId
            };
            json.status = 201;
            res.status(201);
        } else {
            res.status(400).json({ erro: 'Pedido não cadastrado, Verifique os dados enviados' });
        }

        res.json(json);
    },

    atualizarStatus: async (req, res) => {
        let json = { erro: '', resultado: {}, status: 0 };
        const pedidoId = req.params.id;
        const novoStatus = req.body.status;

        if (pedidoId != undefined || pedidoId != null || pedidoId != '') {
            json.resultado = await PedidoService.atualizarStatus(pedidoId, novoStatus);
           
          
                console.log(json.resultado);
                if (json.resultado == true) {
                    json = {
                        status: 200,
                        resultado: { id: pedidoId, status: novoStatus },
                        erro: ''
                    }
                }
                else {
                    json.status(404)
                    json.erro({ erro: 'Pedido não alterado!' });
                }
          
        }

        res.json(json);
    }
}

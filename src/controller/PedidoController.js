const PedidoService = require('../models/PedidoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { erro: '', resultado: [] };

        const pedidos = await PedidoService.buscarTodos();

        if (pedidos) {
            for (let i in pedidos) {
                json.resultado.push({
                    id: pedidos[i].id,
                    status: pedidos[i].status,
                    descricaoPedido: pedidos[i].descricao,
                    quantasUnidades: pedidos[i].quantidade,
                    motivoPedido: pedidos[i].motivo,
                    nivelUrgencia: pedidos[i].nivelUrgencia,
                    qualPredio: pedidos[i].qualPredio,
                    qualData: pedidos[i].qualData,
                    novoProduto: pedidos[i].novoProduto,
                    produtoPadrao: pedidos[i].produtoPadrao,
                });
            }
        } else {
            res.status(404).json({ erro: 'Nenhum pedido encontrado!' });
            json.erro = 'Nenhum pedido encontrado!';
        }
        res.json(pedidos);
    },

    buscarUm: async (req, res) => {
        const pedidoId = req.params.id;
        const pedido = await PedidoService.buscarUm(pedidoId);

        if (pedido)
            res.json(pedido);
        else
            res.status(404).json({ erro: 'Pedido não encontrado!' });
    },

    cadastarPedido: async (req, res) => {
        const { id, status, descricaoPedido, motivoPedido, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantasUnidades } = req.body;
        const pedido = await PedidoService.cadastrarPedido(id, status, descricaoPedido, motivoPedido, nivelUrgencia, qualPredio, qualData, novoProduto, produtoPadrao, quantasUnidades);

        if (pedido)
            res.json({ mensagem: 'Pedido cadastrado com sucesso!' });
        else
            res.status(404).json({ erro: 'Pedido não cadastrado!' });
        
    }
}
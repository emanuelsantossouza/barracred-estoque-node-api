const ProdutoService = require('../models/ProdutoService');

module.exports = {

    buscarTodos: async (req, res) => {
        let json = { erro: '', resultado: [] };

        let produtos = await ProdutoService.buscarTodos();

        if (produtos) {
            for (let i in produtos) {
                json.resultado.push({
                    id: produtos[i].id,
                    nomeProduto: produtos[i].nomeProduto,
                    categoria: categorias[i].categoria,
                    descricao: produtos[i].descricao,
                    preco: produtos[i].preco,
                    quantidade: produtos[i].quantidade,                    
                    cor: produtos[i].cor,                    
                    isFragil: produtos[i].isFragil,                    
                    peso: produtos[i].peso,                    
                });
            }
        } else {
            json.erro = 'Nenhum produto encontrado!';
        }

        return res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { erro: '', resultado: {} };

        let produtoId = req.params.id;
        let produto = await ProdutoService.buscarUm(produtoId);

        if (produto != false) {
            json.resultado = produto;
            res.status(200);
        } else {
            json.erro = 'Produto não encontrado, Id Invalido';
            res.status(500);
        }
        res.json(json); 
    }
}
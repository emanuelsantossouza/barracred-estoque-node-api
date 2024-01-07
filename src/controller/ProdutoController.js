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
                    peso: produtos[i].pesoProduto,
                    altura: produtos[i].alturaProduto,
                    marca: produtos[i].marcaProduto,
                    isFragil: produtos[i].isFragil,
                    categoria: produtos[i].categoria,
                    preco: produtos[i].preco,
                    descricao: produtos[i].descricaoProduto,
                    image: produtos[i].image,
                    cor: produtos[i].cor,
                    unidadesHaEstoque: produtos[i].unidadesHaEstoque,
                });
            }
        } else {
            json.erro = 'Nenhum produto encontrado!';
        }

        return res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { erro: '', resultado: {} };

        let produtoId = req.params.produtoId;
        let produto = await ProdutoService.buscarUm(produtoId);

        if (produto != false) {
            json.resultado = produto;
            res.status(200);
        } else {
            json.erro = 'Produto não encontrado, Id Invalido';
            res.status(500);
        }
        res.json(json);
    },

    buscarProdutoNome: async (req, res) => {
        let json = { error: '', resultado: [], status: 0 };

        let nomeProduto = req.params.nomeProduto;
        console.log(nomeProduto);

        if (nomeProduto != undefined || nomeProduto != null || nomeProduto != '') {
            json.resultado = await ProdutoService.buscarProdutoNome(nomeProduto);

            if (json.resultado != false) {
                json.status = 200;
            }
            else {
                json.status = 404;
                json.error = 'Produto não encontrado!'
                res.status(404);
            }
        }
        res.json(json);
    },

    buscarProdutoUnidadeNoEstoque: async (req, res) => {
        let json = { error: '', resultado: [], status: 0 };

        let produtoValorNoEstoque = req.params.unidadesEstoque;

        if (produtoValorNoEstoque != undefined || produtoValorNoEstoque != null || produtoValorNoEstoque != '') {
            json.resultado = await ProdutoService.buscarProdutoUnidadesHaEstoque(produtoValorNoEstoque);

            if (json.resultado != false) {
                json.status = 200;
            }
            else {
                json.status = 404;
                json.error = 'Valor Invalido!'
                res.status(404);
            }
        }
        res.json(json);
    },

    buscarProdutoCategoria: async (req, res) => {
        let json = { error: '', resultado: [], status: 0 };

        let produtoValorNoEstoque = req.params.produtoUnidade;

        if (produtoValorNoEstoque != undefined || produtoValorNoEstoque != null || produtoValorNoEstoque != '') {
            json.resultado = await ProdutoService.buscarProdutoUnidadesHaEstoque(produtoValorNoEstoque);

            if (json.resultado != false) {
                json.status = 200;
            }
            else {
                json.status = 404;
                json.error = 'Valor Invalido!'
                res.status(404);
            }
        }
        res.json(json);
    },

    cadastrarProduto: async (req, res) => {
        let json = { error: '', resultado: {} };

        let nomeProduto = req.body.nomeProduto;
        let peso = req.body.pesoProduto;
        let altura = req.body.alturaProduto;
        let marca = req.body.marcaProduto;
        let isFragil = req.body.isFragil;
        let categoria = req.body.categoria;
        let descricao = req.body.descricaoProduto;
        let imagem = req.body.imagem;
        let cor = req.body.cor;
        let unidadesHaEstoque = req.body.unidadesHaEstoque;

        if (nomeProduto && categoria && descricao && peso && cor && isFragil && unidadesHaEstoque && altura && marca) {

            let produtoId = await ProdutoService.cadastrarProduto(nomeProduto, peso, altura, marca, isFragil, categoria, descricao, imagem, cor, unidadesHaEstoque);

            if (produtoId) {

                json.resultado = {
                    id: produtoId,
                    nomeProduto,
                    categoria,
                    descricao,
                    altura,
                    imagem,
                    marca,
                    peso,
                    cor,
                    isFragil,
                    unidadesHaEstoque
                };
                res.status(200);
            } else {
                json.error = 'Erro ao cadastrar produto';
                res.status(500);
            }

        } else {
            json.error = 'Campos não enviados';
            res.status(400);
        }
        res.json(json);
    }
}
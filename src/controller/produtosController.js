const produtosModel = require('../model/produtosModel')

const getAllProdutos = (req, res) => {
    
    const { nome } = req.query;


    if (nome) {
        const produto = produtosModel.findByName(nome);

 
        if (produto) {
            return res.status(200).json(produto);
        } 

        else {
            return res.status(404).json({ mensagem: `Produto com nome "${nome}" não encontrado.` });
        }
    } 

    else {

        const produtos = produtosModel.findAllProdutos();
        return res.status(200).json(produtos);
    }
}

const getProdutoById = (req, res) => {
    const id = parseInt(req.params.id)

    const produto = produtosModel.findById(id)

    if (produto) {
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: `Produto ${id} nâo encontrado` })
    }
}


const createProduto = (req, res) => {
    const { nome, email } = req.body

    if (!nome || !email) {
        return res.status(400).json({ mensgame: "Nome e email são obrigatorios" })
    }
    const newProduto = produtosModel.createProduto({ nome, email })
    res.status(201).json(newProduto)
}

const editarProdutos = (req, res) => {
    const id = parseInt(req.params.id)
    const modificacoes = req.body

    if (!modificacoes){
        return res.status(400).json({ mensgame: `O id ${id} do produto e suas modificações são obrigatorios` })
    }
    const produtoModificado = produtosModel.editarProdutos(id,modificacoes)
    res.status(201).json(produtoModificado)
}




const removerProdutos = (req, res) => {
    const id = parseInt(req.params.id)

    if(!id){
        return res.status(400).json({mensagem: "Digite o id do produto a ser removido"})
    }

    const listaAtualizada = produtosModel.removerProdutos(id)

 
    res.status(201).json(listaAtualizada)
}

module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    editarProdutos,
    removerProdutos
}
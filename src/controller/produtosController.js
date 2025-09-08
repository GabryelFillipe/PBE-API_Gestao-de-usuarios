const produtosModel = require('../model/produtosModel')

const getAllProdutos = (req, res) => {
    const produtos = produtosModel.findAllProdutos()
    res.status(200).json(produtos)
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
const getProdutoByname = (req, res) => {

    const nome = (req.params.nome)

    const produto = produtosModel.findByName(nome)

    if (produto) {
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: `Produto ${nome} nâo encontrado` })
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
    getProdutoByname,
    createProduto,
    editarProdutos,
    removerProdutos
}
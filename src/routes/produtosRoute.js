const express = require('express')

const router = express.Router()

const produtosController = require('../controller/produtosController')

router.get('/', produtosController.getAllProdutos)

router.get('/:id', produtosController.getProdutoById)

router.get('/nome/:nome', produtosController.getProdutoByname)

router.post('/', produtosController.createProduto)

router.delete('/:id', produtosController.removerProduto)

module.exports = router
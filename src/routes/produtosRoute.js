const express = require('express')

const router = express.Router()

const produtosController = require('../controller/produtosController')

router.get('/', produtosController.getAllProdutos)

router.get('/:id', produtosController.getProdutoById)

router.post('/', produtosController.createProduto)

router.patch('/:id', produtosController.editarProdutos)

router.delete('/:id', produtosController.removerProdutos)

module.exports = router
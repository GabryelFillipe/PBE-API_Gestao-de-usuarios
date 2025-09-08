const express = require('express')

const router = express.Router()

const clientesController = require('../controller/clientesController')

router.get('/', clientesController.getAllClientes)

router.get('/:id', clientesController.getClienteById)

router.post('/', clientesController.createCliente)

router.patch('/:id', clientesController.editarClientes)

router.delete('/:id', clientesController.removerCliente)

module.exports = router
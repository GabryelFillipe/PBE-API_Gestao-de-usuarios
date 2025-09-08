const clientesModel = require('../model/clientesModel')

const getAllClientes = (req, res) => {
    const clientes = clientesModel.findAllClientes()
    res.status(200).json(clientes)
}

const getClienteById = (req, res) => {
    const id = parseInt(req.params.id)

    const cliente = clientesModel.findById(id)

    if (cliente) {
        res.status(200).json(cliente)
    } else {
        res.status(404).json({ mensagem: `Cliente ${id} nâo encontrado` })
    }
}
const getClienteByname = (req, res) => {

    const nome = (req.params.nome)

    const cliente = clientesModel.findByName(nome)

    if (cliente) {
        res.status(200).json(cliente)
    } else {
        res.status(404).json({ mensagem: `Cliente ${nome} nâo encontrado` })
    }
}

const createCliente = (req, res) => {
    const { nome, email } = req.body

    if (!nome || !email) {
        return res.status(400).json({ mensagem: "Nome e email são obrigatorios" })
    }
    const newCliente = clientesModel.createCliente({ nome, email })
    res.status(201).json(newCliente)
}

const editarClientes = (req, res) => {
    const id = parseInt(req.params.id)
    const modificacoes = req.body

    if (!modificacoes){
        return res.status(400).json({ mensgame: `O id ${id} do cliente e suas modificações são obrigatorios` })
    }
    const clienteModificado = clientesModel.editarClientes(id,modificacoes)
    res.status(201).json(clienteModificado)
}



const removerCliente = (req, res) => {
    const id = parseInt(req.params.id)

    if(!id){
        return res.status(400).json({mensagem: "Digite o id do cliente a ser removido"})
    }

    
    //const removerCliente = clientesModel.removerCliente(id)

    const listaAtualizada = clientesModel.removerCliente(id)
    res.status(201).json(listaAtualizada)
  
}

module.exports = {
    getAllClientes,
    getClienteById,
    getClienteByname,
    createCliente,
    editarClientes,
    removerCliente
}
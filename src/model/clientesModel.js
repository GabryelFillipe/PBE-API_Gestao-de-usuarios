let clientes = [
    {
        "id": 1,
        "nome": "João da Silva",
        "email": "joao.silva@email.com",
        "telefone": "11987654321",
        "endereco": {
            "rua": "Avenida Principal",
            "numero": "123",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "cep": "01000-000"
        },
        "dataCadastro": "2024-05-10T10:00:00Z",
        "ativo": true
    },
    {
        "id": 2,
        "nome": "Maria Oliveira",
        "email": "maria.oliveira@email.com",
        "telefone": "21998877665",
        "endereco": {
            "rua": "Rua das Flores",
            "numero": "456",
            "bairro": "Copacabana",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "cep": "22010-000"
        },
        "dataCadastro": "2025-01-20T14:30:00Z",
        "ativo": true
    },
    {
        "id": 3,
        "nome": "Carlos Pereira",
        "email": "carlos.pereira@email.com",
        "telefone": "31976543210",
        "endereco": {
            "rua": "Praça da Liberdade",
            "numero": "789",
            "bairro": "Savassi",
            "cidade": "Belo Horizonte",
            "estado": "MG",
            "cep": "30140-010"
        },
        "dataCadastro": "2025-08-28T09:15:00Z",
        "ativo": false
    }
]

const findAllClientes = () => {
    return clientes
}

const findById = (id) => {
    return clientes.find(clientes => clientes.id === id)
}

const findByName = (nome) => {
    return clientes.find(clientes => clientes.nome === nome)
}

const createCliente = (newCliente) => {
    const newId = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1
    const clienteWithId = {
        id: newId,
        ...newCliente
    }
    clientes.push(clienteWithId)
    return clienteWithId
}
const editarClientes = (id, modificacoes) => {

    const index = clientes.findIndex(clientes => clientes.id === id)
    
    
    clientes[index] ={
        ...clientes[index],
        ...modificacoes
    }
    return clientes[index]
}

const removerCliente = ( valor) => {
    const chave = "id"
    clientes = clientes.filter(function(jsonObject){
        return jsonObject[chave] != valor
    })
    return clientes
}






module.exports = {
    findAllClientes,
    findById,
    findByName,
    createCliente,
    editarClientes,
    removerCliente
}
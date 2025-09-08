let produtos = [
    {
        "id": 1,
        "nome": "Smartphone Modelo X",
        "descricao": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.",
        "preco": 2999.90,
        "categoria": "Eletrônicos",
        "estoque": 50,
        "ativo": true
    },
    {
        "id": 2,
        "nome": "Notebook Pro",
        "descricao": "Notebook com processador i7, 16GB de RAM, SSD de 512GB e tela de 15 polegadas.",
        "preco": 7499.00,
        "categoria": "Informática",
        "estoque": 25,
        "ativo": true
    },
    {
        "id": 3,
        "nome": "Fone de Ouvido Bluetooth",
        "descricao": "Fone de ouvido sem fio com cancelamento de ruído e autonomia de 20 horas.",
        "preco": 499.50,
        "categoria": "Acessórios",
        "estoque": 120,
        "ativo": false
    }
]

const findAllProdutos = () => {
    return produtos
}

const findById = (id) => {
    return produtos.find(produtos => produtos.id === id)
}

const findByName = (nome) => {
    return produtos.find(produtos => produtos.nome === nome)
}

const createProduto = (newProduto) => {
    const newId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1
    const produtoWithId = {
        id: newId,
        ...newProduto
    }
    produtos.push(produtoWithId)
    return produtoWithId
}

const editarProdutos = (id, modificacoes) => {

    index = produtos.findIndex(id)

}


const removerProdutos = ( valor) => {
    const chave = "id"
    produtos = produtos.filter(function(jsonObject){
        return jsonObject[chave] != valor
    })
    return produtos
}
module.exports = {
    findAllProdutos,
    findById,
    findByName,
    createProduto,
    removerProdutos
}
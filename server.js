const express = require('express')

const clientesRoute = require('./src/routes/clienteRoute')

const produtosRoute = require('./src/routes/produtosRoute')

const app = express()

app.use(express.json())

const porta = 8000

app.get('/', (req,res) => {
    res.send('API está funcionando')
})

app.use('/api/clientes' , clientesRoute)

app.use('/api/produtos' , produtosRoute)

app.listen(porta,()=>{
    console.log(`Servidor rodando em http://localhost${porta}`)
})
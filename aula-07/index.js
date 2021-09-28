// import express
const express = require('express');

// inicializar express
const app = express()

// declarando porta
const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hello Bluemers')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
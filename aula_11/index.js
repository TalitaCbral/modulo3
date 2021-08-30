//importar express
const express = require('express');
//importar mongoose
const mongoose = require('mongoose');

//importar módulo usuario

const usuarioModel = require('./models/usuario')

//url de conexao -> mongodb://servidor:porta/nome do banco

mongoose.connect("mondodb://localhost:27017/usuario", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Usuario = mongoose.model("Usuario", usuarioModel);


const usuario1 = new Usuario({
    nome: "Ivonaldo",
    sobrenome: "Soares",
    cpf: "00000000000",
    idade: 2000-10-15,
    senha: "blue123"
})


usuario1.save()
.then(()=> {
    console.log('Filme Salvo!');
})
.catch()






const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send('Helo Bluemers')
});

app.listen(port, function() {
    console.info(`App rodando na porta 300`);
  });
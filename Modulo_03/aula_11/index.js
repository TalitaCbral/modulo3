//importar express
const express = require('express');
//importar mongoose
const mongoose = require('mongoose');

//importar módulo usuario

const usuarioModel = require('./models/usuario')

//url de conexao -> mongodb://servidor:porta/nome do banco

mongoose.connect("mongodb://localhost:27017/usuarios", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Usuario = mongoose.model("Usuario", usuarioModel);


const usuario2 = new Usuario({
    nome: "Ivo",
    sobrenome: "Soares",
    cpf: "00000000000",
    idade: "2000-10-15",
    senha: "blue123"
})



Usuario.find({})
.then((usuarios)=> {
    console.log(usuarios);
})
.catch((err)=> {
    console.log(err)
})

// encontra um id e deleta ele
Usuario.findByIdAndDelete()
.then((usuarios)=> {
    console.log(`usuario excluido`);
})
.catch((err)=> {
    console.log(err)
})

////////////////

usuario2.save()
.then(()=> {
    console.log('Filme Salvo!');
})
.catch((err)=> {
    console.log(err)
})

const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send('Helo Bluemers')
});

app.listen(port, function() {
    console.info(`App rodando na porta 3000`);
  });
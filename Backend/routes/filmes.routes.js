const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router = express.Router();

//---------------------------------------------------------

const filmes = [
    {
        id: Date.now(),
        name: "Interstellar",
        image: "",
        genre: "Scy-fi",
        rate: 10,
        status: false

    }
];

//--------------------------------------------------------------

//----Rota GET para mostrar todos os filmes pré-cadastrados-----
router.get('/', (req, res)=>{
    res.send(filmes)
});

//--------------------------------------------------------------

//----Rota GET para mostrar os filmes por ID--------------------
router.get('/:id', (req, res)=>{
    const idParam = req.params.id;
    const index = filmes.findIndex(filme => filme.id == idParam);
    const filme = filmes[index];
    res.send(filme);
});

//--------------------------------------------------------------

//----Rota PUT para atualizar um item através do ID-------------
router.put('/:id', (req, res)=>{
    const filmeEdit = req.body;
    const id = req.params.id;
    let filmePreCadastrado = filmes.find((filme)=> filme.id == id);

    filmePreCadastrado.name = filmeEdit.name;
    filmePreCadastrado.image = filmeEdit.image;
    filmePreCadastrado.genre = filmeEdit.genre;
    filmePreCadastrado.rate = filmeEdit.rate;
    filmePreCadastrado.status = filmeEdit.status;

    res.send({
        message: `filme ${filmePreCadastrado.name} cadastrado com sucesso`,
        data: filmePreCadastrado
    });
});

//--------------------------------------------------------------

//----Rota de POST para adicionar um novo filme-----------------
router.post('/add', (req, res)=>{
    const filme = req.body;
    filme.id = Date.now();
    filmes.push(filme);
    res.status(201).send({
        message: 'Filme cadastrado com sucesso',
        data: filme
    });
})

//--------------------------------------------------------------

//----Rota DELETE que apaga o filme pelo ID---------------------
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    const index = filmes.findIndex((filme)=> filme.id == id);
    filmes.splice(index, 1);

    res.send({
        message: `Filme excluido com sucesso!`})
})


//-------------Exportação do routes-----------------------------
module.exports = router;
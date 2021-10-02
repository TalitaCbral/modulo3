const express = require('express');
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




//-------------Exportação do routes-----------------------------
module.exports = router;
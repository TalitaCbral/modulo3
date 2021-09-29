// importar o express
const express = require('express');

// inicializar o express
const app = express();

// declaracao da porta
const port = 3000;



const filmes = [
{
    id: 968468746854,
    text: 'Interstellar',
    check: false,
},
{
    id: 16868468768,
    text: 'Arrive',
    check: false,
},
{
    id: 1687168795798,
    text: 'O Castelo Animado',
    check: false,
},
]


// [GET] = HOME
app.get('/', (req, res)=> {
    res.send('Meus Filmes Favoritos');
})

app.get('/filmes', (req, res) => {
    res.send(filmes);
})

// rota que retorna um unico filme de acordo com o numero que ele receber
// [GET] /filmes/{id} - Retorna apenas um unico filme por ID
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id];

    res.send(filme);
})




// [GET] /filmes/{id} - retorna os filmes por id
app.get('/filmes/:id', (req, res) => {
// pega o id pelo parametro que vem da requisicao 
    const idParam = req.params.id;
    // procura na minha lista o filme que contem o id igual ao id que estou recebendo no parametro
    const filme = filmes.find((filme) => {
        return filme.id == idParam;
    })

    res.send(filme);
})



app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`)
})
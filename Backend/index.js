const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const FilmesRoutes = require('./routes/filmes.routes');

app.use('/filmes', FilmesRoutes);


app.get('/', (req, res)=>{
    console.info('Seja bem vind@ à minha lista de Filmes Favoritos!');
})


const port = 3000;

app.listen(port, ()=>{
    console.info(`O servidor está rodando no endereço: http://localhost:${port}/`);
})

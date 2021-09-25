//cria uma lista vazia que receberá os filmes

const movies = []

//cria uma constante para adicionar os filmes com as respectivas informações

const addMovie = (text)=> {
    const movie = {
        name: text,
        imgUrl: text,
        genre: text,
        rate: text,
        id: Date.now()
    }
    movies.push(movie); //Essa parte serve para acrescentar o objeto de filmes recem criado pelo usuário na lista de filmes
    renderMovies(movie); //Aqui é executada uma função que renderiza o filme adicionado na tela (será criada nas linhas abaixo)
};


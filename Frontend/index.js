const caminhoApi = 'http://localhost:3000/filmes';
const lista = document.getElementById('card-film');
let edicao = false;
let idEdicao = 0;

//----Requisição GET para receber os filmes cadastrados--------
const getFilmes = async () => {
    const response = await fetch(caminhoApi);

    const data = await response.json();

    console.log(data);
    
    data.map((filme)=>{
        lista.insertAdjacentHTML('beforeend', `
            <h2 >Filme: <span class="movieName">${filme.name}</span></h2>
            <img class="igmUrl"src="${filme.image}" alt="Imagem do Filme">
            <p>Gênero: <span class="movieGenre">${filme.genre}</span></p>
            <p>Nota: <span class="rate">${filme.rate}</span></p>
        `)
    })

};
getFilmes();

const submitForm = async (evento) => {
    evento.preventDefault();

    let name = document.getElementById('nome');
    let image = document.getElementById('image');
    let genre = document.getElementById('genre');
    let rate = document.getElementById('rate');

    const filme = {
        name : name.value,
        image : image.value,
        genre : genre.value,
        rate : rate.value
    }
    
    if(!edicao) {
        const request = new Request(`${caminhoApi}/add`, {
            method: 'POST',
            body: JSON.stringify(filme),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

        const response = await fetch(request);
        const result = await response.json();

        if(result) {
            getFilmes();
        }

    } else {
        const request = new Request(`${caminhoApi}/${idEdicao}`, {
            method: 'PUT',
            body: JSON.stringify(filme),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

        const response = await fetch(request);
        const result = await response.json();

        if(result){
            getFilmes();
        }
    }


    name.value = '';
    image.value = '';
    genre.value = '';
    rate.value = '';

    lista.innerHTML = '';

}

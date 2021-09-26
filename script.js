moviesJson.map((item, index)=>{
    let cardFilm = document.querySelector('.section-card .card-film').cloneNode(true); //clona a section que contem os cards dos filmes
    
    cardFilm.querySelector('.movieName').innerHTML = item.name;
    cardFilm.querySelector('.igmUrl').src = item.img;
    cardFilm.querySelector('.movieGenre').innerHTML = item.genre;
    cardFilm.querySelector('.rate').innerHTML = item.rate;

    document.querySelector('.section-card').style.display = 'flex'; //altera o display none para flex para mostrar o card

    


    let a = document.querySelector('.section-card').append(cardFilm);
    console.log('.section-card')
    
});
moviesJson.map((item, index)=>{
    let cardFilm = document.querySelector('.card-film').cloneNode(true);

    cardFilm.querySelector('.movieName').innerHTML = item.name;
    cardFilm.querySelector('.igmUrl').innerHTML = item.img;
    cardFilm.querySelector('.movieGenre').innerHTML = item.genre;
    cardFilm.querySelector('.rate').innerHTML = item.rate;

    document.querySelector('.section-card').append(cardFilm);
});
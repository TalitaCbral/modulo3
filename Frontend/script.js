//Lista com filmes chumbados

let movies = [
    {
    id: Date.now(),
    name: 'Interstellar', 
    img: './img/Interstellar.gif', 
    genre: 'Sci-fi', 
    rate: 10
    },

    {
    id: Date.now(), 
    name: 'Arrival',
    img: './img/arrival.jpg', 
    genre: 'Sci-fi', 
    rate: 8.5
    },
    {
    id: Date.now(), 
    name: 'Hauru no Ugoku Shiro',
    img: './img/Hauru no Ugoku Shiro.jpg', 
    genre: 'Animação', 
    rate: 9.6
    },
];

//------------------------------------------------------------------



movies.map((item, index)=>{
    
    let cardFilm = document.querySelector('.card-film').cloneNode(true); //clona a section que contem os cards dos filmes
    
    // cardFilm.innerHTML = '';
    

    cardFilm.querySelector('.movieName').innerHTML = item.name;
    cardFilm.querySelector('.igmUrl').src = item.img;
    cardFilm.querySelector('.movieGenre').innerHTML = item.genre;
    cardFilm.querySelector('.rate').innerHTML = item.rate;

    document.querySelector('.section-card').style.display = 'flex'; //altera o display none para flex para mostrar o card


    document.querySelector('.section-card').append(cardFilm);
    
});















// const form = document.querySelector('.form')
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const formNome = document.getElementById('movieName').value
//     const formUrl = document.getElementById('movieUrl').value
    
// })
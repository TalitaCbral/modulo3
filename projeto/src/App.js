import React, {useState} from 'react'
import './App.css';

export default function Home(){
  const [Animes, setAnimes] = useState([
    {
      nome: "Natsume Yuujinchou",
      imageUrl: "https://2.bp.blogspot.com/-Mp4tMZ-2sFI/XNLb-11vLvI/AAAAAAAAbQU/kgkXvmwjzrE54TMkMQV5-UojaqgoZUncQCLcBGAs/s1600/Natsume-Yuujinchou.jpg",
      videoUrl: "https://www.youtube.com/embed/_qCo-E3CHT0" 
    },
    {
      nome: "Mushishi",
      imageUrl: "https://http2.mlstatic.com/mushishi-1-temp-em-dvd-3-dvds-D_NQ_NP_777433-MLB26706917424_012018-F.jpg",
      videoUrl: "https://www.youtube.com/embed/wWGXQNBkJ-8"
    },
    {
      nome:"Boruto",
      imageUrl: "https://i0.wp.com/anmtv.com.br/wp-content/uploads/boruto-naruto-next-generations.jpg?ssl=1",
      videoUrl: "https://www.youtube.com/embed/zDBVLsblbjo"
    },
    {
      nome: "Demon Slayer",
      imageUrl: "https://sucodemanga.com.br/wp-content/uploads/2019/10/demon-slayer-kimetsu-no-yaiba-review-thumb.jpg",
      videoUrl: "https://www.youtube.com/embed/pmanD_s7G3U"
    }

  ]);
  const [nomeAnime, setNomeAnime] = useState("");
  const [imageUrlAnime, setImageUrlAnime] = useState("");
  const [videoUrlAnime, setVideoUrlAnime] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setAnimes([
      ...Animes,
      {
        nome: nomeAnime,
        imageUrl: imageUrlAnime,
        videoUrl: videoUrlAnime,

      },
    ]);

    setNomeAnime("");
    setImageUrlAnime("");
    setVideoUrlAnime("");
  };

  const deletar  = (index)=>{
    setAnimes(Animes.filter((f, i)=> i != index));
  };

  return (
    <div className="container">
      <main className="main">
        <nav>
          <h1>Lista de Animes</h1>
        </nav>
        
        
        <h2 class="cadastro">Cadastre um novo Anime</h2>
        <form onSubmit={onSubmit} class="formulario">
          <label>Nome</label>
          <input class="inputNome" placeholder="Nome" value={nomeAnime} onChange={(e)=>{setNomeAnime(e.target.value);}}/>
          <p/>
          <label>Link da Imagem</label>
          <input class="inputUrl" placeholder="Url da imagem" value={imageUrlAnime} onChange={(e)=>{setImageUrlAnime(e.target.value);}}/>
          <p/>
          <label>Link do Video</label>
          <input class="inputVideo" placeholder="Video do Anime" value={videoUrlAnime} onChange={(e)=>{setVideoUrlAnime(e.target.value);}}/>
          <button type="submit" class="botao">Salvar</button>
        </form>
        
        <h2 class="headerLista">Animes</h2>
        <ul>
          {
            Animes.map((f, index)=>(
              <li key={index} >
                <h3>{f.nome}</h3>
                <div class="imagens">
                  <img src={f.imageUrl} alt={f.nome}/>
                  <iframe width="420" height="315"
                    src={f.videoUrl}>
                  </iframe>                  
                </div>                
                <br/>
                
                <button onClick={()=> deletar(index)} class="botaoDel">Deletar</button>
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import './style.css';

//API
//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
        .then((resultado) => resultado.json()) //caso dê certo, cai nesse then. recebe o resultado e transforma em json
        .then((json) => { //joga para dentro do array 
          //console.log(json);
          setNutri(json);
        })
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Requisições HTTP</h1>
        <h2>React Nutri</h2>
      </header>
      {nutri.map((conteudo)=>{
        return(
          <article key={conteudo.id} className="posts">
            <strong className="titulo">{conteudo.id} - {conteudo.titulo}</strong>
            
            <img src={conteudo.capa} alt={conteudo.titulo} className="capa"/>
            <h2>Categoria: {conteudo.categoria}</h2>
            <p className="subtitulo">
              {conteudo.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;

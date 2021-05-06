
//instalar styled components
// npm install --save styled-components

import React from 'react';
import { Container, Head, BemVindo } from './style';


export default function App() {
  return (
    <Container>
      <Head>
        <a>Titulo aqui</a>
      </Head>

      <BemVindo cor="0000ff" tamanho={40}>
        Bem Vindo aos testes com Styled Components
      </BemVindo>
    </Container>
  );
}

/*
  <div className="container">
      <header className="header">
        <a className="titulo">Titulo - Projeto styled</a>
      </header>
      <h1>Bem vindo</h1>
  </div>
*/

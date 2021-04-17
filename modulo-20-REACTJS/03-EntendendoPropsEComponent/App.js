import React from 'react';

const BemVindo = (props) => <h2>Bem vindo(a) {props.nome}!</h2> //isto é um componente que recebe uma props como parametro

const OutroExemplo = (props) => {
    return(
        <div>
            <h2>Bem vindo(a) {props.nome}!</h2>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    );
} //isto é um componente

//props são propriedades  <BemVindo nome=""/>
function App() {
    return (
        <div>
            <h1>Olá, mundo!</h1>
            <BemVindo nome="Mateus"/>
            <OutroExemplo nome="Lucas" idade="21"/>
        </div>
    );   
}

export default App;
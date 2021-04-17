/*
    Nesta aula foi aprendido que um componente pode chamar o outro e que onde ele foi chamado
    posso ter uma props para um e para o outro não (vai depender se quero passar)

*/



import React from 'react';


const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social  github={props.github}/>
            <hr/>
        </div>
    );
}

//componente responsaveel por informar os atributos 
const Sobre = (props) =>{
    return(
        <div>
            <h2>Olá, sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) =>{
    return(
        <div>
            <a>LinkdIn</a>
            <a>Twitter</a>
            <a href={props.github}>GitHub</a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Lucas" cargo="Dev Front" idade="21" github="https://github.com/"/>            
            <Equipe nome="Luiz" cargo="Tester" idade="22"/>            
        </div>
    );   
}

export default App;
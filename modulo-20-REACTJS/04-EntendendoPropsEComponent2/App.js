import React, {Component} from 'react';

//clas component =>
// posso ter ciclo de vida
// funções
// estados


// é um componente e uma classe

//ja tem acesso as props
class Equipe extends Component{
    render(){
        return(
             //aqui dentro colocamos o codigo jsx
             //precisam estar dentro de um componente pai
             <div>
                 <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                 <Social github={this.props.github}/>
                 <hr/>
             </div>
        );
    }
}
class Sobre extends Component{
    render(){
        return(
             //aqui dentro colocamos o codigo jsx
             //precisam estar dentro de um componente pai
             <div>
                 <h2>Olá, sou o {this.props.nome}</h2>
                 <h3>Cargo: {this.props.cargo}</h3>
                 <h3>Cargo: {this.props.idade}</h3>
                 
             </div>
        );
    }
}

//isto é componente => componenentes são "burros" 

const Social = (props) => {
    return(
        <div>
            <a href={props.github}>Github</a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça a equipe!</h1>
            <Equipe nome="Lucas" cargp="Dev Front end" idade="21" github="https://github.com/Jhameson/"/>
            <Equipe nome="Mateus" cargp="Dev Full" idade="24"/>
        </div>
    );   
}

export default App;
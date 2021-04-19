import React, {Component} from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state ={
            nome: props.nome
        }
        this.entrar = this.entrar.bind(this);
    }
    entrar(nome){
        this.setState({
            nome: nome
        });
    }


    //{()=>this.entrar} so vai funcionar quando apertar de fato no botão, por isso usa-se função anonima
    render(){
        return(
            <div>
               <h2>{this.state.nome}</h2> 
               <button onClick={()=>this.entrar('Lucas')}>
                   Entrar no Sistema
               </button>
               <button onClick={()=>this.setState({nome: ''})}>
                   Sair
               </button>
            </div>
        );
    }
}
export default Membro;
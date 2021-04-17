/*
    CICLO DE VIDA DE COMPONENTES
    -> inicia
    -> usado
    -> encerrado etc
*/
import React, { Component } from 'react';

class App extends Component {

    //primeira coisa a ser carregada -> ciclo de vida
    constructor(props){
        super(props);
        this.state={
            hora: '00:00:00'

        };
    }

    //depois que o componente é montado que ele roda 
    componentDidMount(){
       
        setInterval(()=>{
            this.setState({ 
                hora: new Date().toLocaleTimeString 
                
            })
            //alert("aqui");
        },1000);
    }    
 
    //é chamado quando há alguma att na page
    componentDidUpdate(){
        //neste caso irá exibir a cada 1 seg devido a função anterior
        console.log("Atualizou");
    }

    //retorna true ou false
    //deve atualizar??
    shouldComponentUpdate(){

    }
    
    render() {

        return(
            <div>
               <h1>Projeto {this.state.hora}</h1>
            </div>
        );
    }
}
export default App;
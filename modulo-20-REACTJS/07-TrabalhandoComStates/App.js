import React, { Component } from 'react';

class App extends Component {

    //é necessário um construtor para acessar a state
    constructor(props){
        super(props);
        //isso é uma state
        this.state ={
             nome: 'Jhameson',
             contador: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador +=1; 
         this.setState(state);
    }
    diminuir(){
        let state = this.state;

        if(state.contador === 0){
            return;
        }

        state.contador -=1; 
         this.setState(state);
    }

    render() {
        
        return(
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}
export default App;
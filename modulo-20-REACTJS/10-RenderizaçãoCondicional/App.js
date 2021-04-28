import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status1: 1,
            status2: true
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({
            status2: true
        });
    }

    sair(){
        this.setState({
            status2: false
        });
    }

    render() {
        return (
            <div>
                <h1>
                    CURSO REACTJS
                </h1>
                {
                    //so exibe se a condição for aceita
                    this.state.status1 === 1 &&
                    <h2>
                        Seja bem vindo(a)!
                    </h2>
                }
                {
                    this.state.status2 ?
                        <h2>Condição 01 </h2> : <h2>Condição 02</h2>
                }


                {
                    //melhor exemplo
                    //mais funcional
                    this.state.status2 ?
                        <div>
                            <h2>Bem vindo!</h2>
                            <button onClick={this.sair}>Sair</button>
                        </div>
                        :
                        <div>
                            <h2>Faça login!</h2>
                            <button onClick={this.entrar}>Entrar</button>
                        </div>

                }
            </div>
        );
    }
}

export default App;
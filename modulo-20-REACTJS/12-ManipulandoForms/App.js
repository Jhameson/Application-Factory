import React, { Component } from 'react';
import style from './styles/style.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        }
        this.trocarEmail = this.trocarEmail.bind(this);
        //this.trocarSenha = this.trocarSenha.bind(this);
    }

    trocarEmail(event) {
        let valorDigitado = event.target.value;
        this.setState({
            email: valorDigitado
        });
    }
    /*
    trocarSenha(event){
        let valorDigitado = event.target.value;
        this.setState({
            senha: valorDigitado
        });
    }
    */
    render() {
        return (
            <div >
                <div className="interna">
                    <h1>Login</h1>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.trocarEmail} /> <br />

                    <label>Senha:</label><br />
                    <input
                        type="password"
                        name="senha"
                        value={this.state.senha}
                        onChange={(event) => this.setState({ senha: event.target.value })} /> <br />

                    <div>
                        <h3>{this.state.email}</h3>
                        <h3>{this.state.senha}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
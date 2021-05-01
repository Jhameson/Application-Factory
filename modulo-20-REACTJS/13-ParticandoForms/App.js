import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        };

        this.cadastrar = this.cadastrar.bind(this);

    }

    cadastrar(event){
        //desconstrução
        const {nome, email, senha} = this.state;

        if(nome !== '' && email !== '' && senha !== ''){

            alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`)
        }else{
            alert("Preencha todos os campos!")
        }

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text"
                        value={this.state.nome}
                        onChange={(event) => this.setState({
                            nome: event.target.value
                        })} /><br />

                    <label>Email:</label>
                    <input type="email"
                        value={this.state.email}
                        onChange={(event) => this.setState({
                            email: event.target.value
                        })} /><br />

                    <label>Senha:</label>
                    <input type="password"
                        value={this.state.senha}
                        onChange={(event) => this.setState({
                            senha: event.target.value
                        })} /><br />

                    <button type="submit">
                        cadastrar
                    </button>

                </form>
            </div>
        );
    }
}

export default App;
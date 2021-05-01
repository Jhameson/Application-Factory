import React, { Component } from 'react';
//import style from './styles/style.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form:{
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
        }
        this.dadosForm = this.dadosForm.bind(this);
       
    }

    dadosForm(e){
        let form = this.state.form;

        form[e.target.name] = e.target.value

        this.setState({
            form:  form
        });
    }
   
    render() {
        return (
            <div >
                <div className="interna">
                    <h1>Formulário</h1>
                    <label>Nome:</label><br />
                    <input
                        type="text"
                        name="nome"
                        value={this.state.form.nome}
                        onChange={this.dadosForm}
                        /><br/>
                    
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={this.state.form.email}
                        onChange={this.dadosForm} /> <br />

                    <label>Senha:</label><br />
                    <input
                        type="password"
                        name="senha"
                        value={this.state.form.senha}
                        onChange={this.dadosForm} /> <br />

                    <select
                        name="sexo"
                        value={this.state.form.sexo}
                        onChange={this.dadosForm}>
                        <option value="masculino">Maculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <div>
                        <h3>{this.state.form.nome}</h3>
                        <h3>{this.state.form.email}</h3>
                        <h3>{this.state.form.senha}</h3>
                        <h3>{this.state.form.sexo}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
import React, {Component} from 'react';

import Membro from './Membro'
class App extends Component{
    render(){
        return(
            <div>
                Olá, mundo!
                <Membro nome="Visitante"/>
            </div>
        );
    }
}

export default App;
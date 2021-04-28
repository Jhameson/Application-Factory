import React, { Component } from 'react';
import Feed from './componentes/Feed'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Jhameson', curtidas: 50, comentarios: 5 },
                { id: 2, username: 'Senhorita', curtidas: 30, comentarios: 5 },
                { id: 3, username: 'Moça', curtidas: 36, comentarios: 10 },
                { id: 4, username: 'Rapaz', curtidas: 69, comentarios: 4 },
                { id: 5, username: 'Ciclando', curtidas: 10, comentarios: 0 },
                { id: 6, username: 'Fulano', curtidas: 1, comentarios: 8 },
                { id: 7, username: 'Jovem', curtidas: 10, comentarios: 6 },
                { id: 8, username: 'Senhor', curtidas: 102, comentarios: 2 },
                { id: 9, username: 'Lucas', curtidas: 87, comentarios: 1 },
            ]
        };


    }



    render() {
        return (
            <div>
                <h1>Usuarios</h1>
                { //função map percorre todos os objetos
                    this.state.feed.map((item) => {
                        return (
                            <Feed id={item.id}
                                username={item.username}
                                curtidas={item.curtidas}
                                comentarios={item.comentarios} />
                        );
                    })}
            </div>
        );
    }
}

export default App;
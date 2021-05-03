import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Error from './pages/Error'

import Header from './Components/Header';

//EXACT faz com acesse exatamente uma pagina 
//path => caminho da pagina => nome é opcional
//COmponent => nome do componente
//Switch faz com que uma unica pagina seja executada

const Routes = () => {
    return (
        <BrowserRouter>

            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
                <Route path="/produto/:id" component={Produto} />

                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
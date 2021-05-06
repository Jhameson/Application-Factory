//https://sujeitoprogramador.com/r-api/?api=filmes/

import Routes from './routes';


import 'react-toastify/dist/ReactToastify.css';
//alert melhorado
// npm install toastify
import { ToastContainer } from 'react-toastify';

import './style.css';

export default function App(){

    return(
      <div className="app">
        <Routes/>
        <ToastContainer autoClose={3000}/>
      </div>
    );
}


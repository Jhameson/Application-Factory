import {Link} from 'react-router-dom';

//Link direciona para o lugar expecificado

export default function Home() {
    return (
      <div>
       <h1>Home</h1>
       <Link to="/sobre">Sobre</Link><br/><br/>
       <Link to="/contato">Contato</Link>
      </div>
    );
  }
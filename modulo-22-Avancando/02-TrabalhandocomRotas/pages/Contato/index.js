import {Link} from 'react-router-dom';

export default function Contato() {
    return (
      <div>
       <h1>Contato</h1>
       <Link to="/">Home</Link><br/><br/>
       <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
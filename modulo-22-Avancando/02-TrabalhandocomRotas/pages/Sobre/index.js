import {Link} from 'react-router-dom';
export default function Sobre() {
    return (
      <div>
       <h1>Sobre</h1>
       <Link to="/">Home</Link><br/><br/>
       <Link to="/contato">Contato</Link>
      </div>
    );
  }
import {Link} from 'react-router-dom';
export default function Error() {
    return (
      <div>
       <h1>Error!!</h1>
       <h2>Página não encontrada</h2>

       <span>Você pode estar procurando</span><br/><br/>
       <Link to="/">Home</Link><br/><br/>
       <Link to="/contato">Contato</Link><br/><br/>
       <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
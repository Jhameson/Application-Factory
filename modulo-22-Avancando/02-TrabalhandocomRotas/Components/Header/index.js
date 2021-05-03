import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <h1>Header da pagina</h1>
            <Link to="/contato">Contato</Link>
        </header>
    )
}
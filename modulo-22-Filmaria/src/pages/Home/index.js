import api from '../../services/api';
import './home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        //aync pois é assicrona
        async function load() {
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data);
        }
        load();
    }, [])

    return (
        <div className="container">
            <div className="lista-filmes">

                {
                    filmes.map((conteudo) => {
                        return(
                            <article key={conteudo.id}>
                                <strong>{conteudo.nome}</strong>
                                <img src={conteudo.foto} alt={conteudo.nome}/>  
                                <Link to={`/filme/${conteudo.id}`}>Acessar</Link> 
                            </article>
                        )
                    })
                }

            </div>
        </div>
    );
}

